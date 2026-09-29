---
layout: post
title: Remote Image Upload in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to implement remote image upload in TypeScript Modern Rich Text Editor. Configure endpoints, handle file uploads, rename images, and secure uploads with authentication.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Remote Image Upload in TypeScript Modern Rich Text Editor

Remote image upload enables centralized image management on your server, providing better control over storage, performance, and security. This section covers implementing a complete server-side upload pipeline with authentication and validation.

### Writing an Endpoint for Image Upload

When a user uploads an image through the RichTextEditor, the component sends the file to your server using the form field name `UploadFiles`. Your server processes the file and returns a JSON response containing the filename, which the editor combines with the `imageUrl` setting to create the final image source.

#### Client-Side Configuration

Configure the RichTextEditorUI component with the upload endpoint and base URL:

```typescript
// ============================================
// CLIENT-SIDE: Configure the RichTextEditor
// ============================================
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/images/upload',  // POST endpoint for uploads
        imageUrl: '/uploads/',                               // Base URL to resolve uploaded filenames
        removeUrl: 'https://api.example.com/images/remove',  // DELETE endpoint for removal
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif'],     // Allowed file types
        maxFileSize: 5 * 1024 * 1024                         // 5MB limit
    }
});
editor.appendTo('#editor');
```

#### Server-Side Configuration

```csharp
// ============================================
// SERVER-SIDE: Images Upload (ASP.NET Core)
// ============================================
[HttpPost("SaveFile")]
[EnableCors("AllowAllOrigins")]
public IActionResult SaveFile(IList<IFormFile> UploadFiles)
{
    try
    {
        if (UploadFiles == null)
        {
            return BadRequest("No files provided.");
        }
        if (UploadFiles.Count > 1)
        {
            return BadRequest("Too many files. Maximum 1 files allowed per request");
        }
        foreach (IFormFile uploadFile in UploadFiles)
        {
            var fileNameSegment = ContentDispositionHeaderValue.Parse(uploadFile.ContentDisposition).FileName;
            string? fileName = fileNameSegment.HasValue ? fileNameSegment.Value.Trim('"') : null;
            //  DOS PREVENTION - Filename length limit
            if (fileName?.Length > 255)
                return BadRequest("Filename too long. Maximum 255 characters allowed");
            //  PATH TRAVERSAL PREVENTION - Block dangerous characters
            if (fileName != null && (fileName.Contains("..") || fileName.Contains("/") || fileName.Contains("\\")))
                return BadRequest("Invalid filename - path traversal detected");
            // Construct the full path to save the file
            string filePath = Path.Combine(_webHostEnvironment.WebRootPath, "RichTextEditor/", fileName!);
            // Check if the file doesn't exist and create it
            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }
            using (FileStream fs = System.IO.File.Create(filePath))
            {
                uploadFile.CopyTo(fs);
                fs.Flush();
            }
        }
        return Ok("Files saved successfully.");
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}
```

Set up your ASP.NET Core application to handle image uploads with proper CORS, static file serving, and multipart body size configuration in your `program.cs` file:

```csharp
// ============================================
// SERVER-SIDE: Images Upload (program.cs)
// ============================================
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add framework services
builder.Services.AddControllers();

// OpenAPI helper used in development (keeps API discoverable for the team)
builder.Services.AddOpenApi();

// Optional: allow directory browsing for diagnostic purposes
builder.Services.AddDirectoryBrowser();

// CORS: allow the editor during development. Restrict origins in production.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

// Increase multipart body length limit (10 MB) for image uploads
builder.Services.Configure<Microsoft.AspNetCore.Http.Features.FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = 10 * 1024 * 1024; // 10 MB
});

var app = builder.Build();

// Development helpers
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Ensure HTTPS is used
app.UseHttpsRedirection();

// 1. Serve default wwwroot static files
app.UseStaticFiles();

// 2. Setup the File Provider for the custom RichTextEditor folder
var richTextFolderProvider = new PhysicalFileProvider(
    Path.Combine(app.Environment.ContentRootPath, "wwwroot", "RichTextEditor")
);

// FIX PART A: Actually SERVE the files from the RichTextEditor folder
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = richTextFolderProvider,
    RequestPath = "/public"
});

// FIX PART B: Browse the directory index (HTML list) of the folder
app.UseDirectoryBrowser(new DirectoryBrowserOptions
{
    FileProvider = richTextFolderProvider,
    RequestPath = "/public"
});

// Routing must come before CORS/Authorization for endpoint routing to work correctly
app.UseRouting();

// Enable CORS policy
app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
```

### Rename Images Before Inserting

You can implement server-side renaming to ensure all uploaded images follow your naming standards. The client receives the renamed filename and automatically inserts it using the `imageUrl` configuration.

#### Server-Side Configuration

```csharp
// ============================================
// SERVER-SIDE: Rename Images During Upload (ASP.NET Core)
// ============================================
[HttpPost("SaveFile")]
[Authorize]  // Authenticate user
public IActionResult SaveFile([FromForm] IFormFile[] UploadFiles)
{
    try
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;  // From authentication middleware
        
        if (UploadFiles == null || UploadFiles.Length == 0)
            return BadRequest(new { error = "No file provided" });
        
        var file = UploadFiles[0];
        
        // Extract file extension from original name
        var originalName = file.FileName;
        var fileExtension = Path.GetExtension(originalName);
        
        // Generate a standardized filename with user context
        var timestamp = DateTime.UtcNow.ToString("yyyyMMddHHmmssfff");
        var newFilename = $"img-user{userId}-{timestamp}{fileExtension}";
        
        // Save with renamed filename
        var webRoot = _webHostEnvironment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        var uploadsPath = Path.Combine(webRoot, "uploads");
        Directory.CreateDirectory(uploadsPath);
        
        var savePath = Path.Combine(uploadsPath, newFilename);
        
        using (var fs = System.IO.File.Create(savePath))
        {
            file.CopyTo(fs);
            fs.Flush();
        }
        
        // Return the renamed filename
        return Ok(new { name = newFilename });
    }
    catch (Exception error)
    {
        return StatusCode(500, new { error = "Upload failed" });
    }
}
```

#### Client-Side Configuration

```typescript
// ============================================
// CLIENT-SIDE: Track Upload Success
// ============================================
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/images/upload',
        imageUrl: '/uploads/'
    },
    fileUploadSuccess: (args) => {
        if (args.source === 'Image') {
            console.log('Image uploaded successfully');
            console.log('Renamed filename:', args.response);
        }
    }
});

editor.appendTo('#editor');
```

### Secure image upload with authentication

You can add additional data with the image uploaded from the RichTextEditorUI on the client side, which can even be received on the server side. By using the `fileUploading` event and its arguments you can access the current request and set the request header within this event. On the server side, you can fetch the custom headers by accessing the form collection from the current request, which retrieves the values sent using the POST method.

#### Client-Side Configuration

```typescript
// CLIENT-SIDE: Add authentication token before upload
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/images/upload',
        imageUrl: '/uploads/'
    },
    fileUploading: (args) => {
        args.currentRequest.setRequestHeader('Authorization', 'Syncfusion');
    }
});

editor.appendTo('#editor');
```

#### Server-Side Configuration

```csharp
[HttpPost("SaveFile")]
[EnableCors("AllowAllOrigins")]
public IActionResult SaveFile(IList<IFormFile> UploadFiles)
{
    try
    {
        // Fetch custom authentication header from form collection
        string authorizationHeader = Request.Headers["Authorization"].FirstOrDefault();
        
        if (string.IsNullOrEmpty(authorizationHeader))
            return StatusCode(401, new { error = "Authorization header missing" });
        if (UploadFiles == null)
        {
            return BadRequest("No files provided.");
        }
        if (UploadFiles.Count > 1)
        {
            return BadRequest("Too many files. Maximum 1 files allowed per request");
        }
        foreach (IFormFile uploadFile in UploadFiles)
        {
            var fileNameSegment = ContentDispositionHeaderValue.Parse(uploadFile.ContentDisposition).FileName;
            string? fileName = fileNameSegment.HasValue ? fileNameSegment.Value.Trim('"') : null;
            //  DOS PREVENTION - Filename length limit
            if (fileName?.Length > 255)
                return BadRequest("Filename too long. Maximum 255 characters allowed");
            //  PATH TRAVERSAL PREVENTION - Block dangerous characters
            if (fileName != null && (fileName.Contains("..") || fileName.Contains("/") || fileName.Contains("\\")))
                return BadRequest("Invalid filename - path traversal detected");
            // Construct the full path to save the file
            string filePath = Path.Combine(_webHostEnvironment.WebRootPath, "RichTextEditor/", fileName!);
            // Check if the file doesn't exist and create it
            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }
            using (FileStream fs = System.IO.File.Create(filePath))
            {
                uploadFile.CopyTo(fs);
                fs.Flush();
            }
        }
        return Ok("Files saved successfully.");
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}
```
