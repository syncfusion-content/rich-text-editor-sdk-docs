// ============================================
// SERVER-SIDE: ASP.NET Core Host Configuration (program.cs)
// ============================================
// Wire up the services and middleware required for the
// Modern Rich Text Editor image upload endpoints to work.
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// --- Services ---------------------------------------------------------

// Add framework services (controllers, model binding, etc.).
builder.Services.AddControllers();

// OpenAPI helper used in development to keep the API discoverable.
builder.Services.AddOpenApi();

// Optional: allow directory browsing for diagnostic purposes.
builder.Services.AddDirectoryBrowser();

// CORS: allow the editor's client during development.
// Restrict origins in production.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Increase multipart body length limit (10 MB) for image uploads.
builder.Services.Configure<Microsoft.AspNetCore.Http.Features.FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = 10 * 1024 * 1024; // 10 MB
});

var app = builder.Build();

// --- Middleware pipeline ---------------------------------------------

// Development helpers.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Force HTTPS for every request.
app.UseHttpsRedirection();

// 1. Serve default wwwroot static files.
app.UseStaticFiles();

// 2. Set up a File Provider for the custom RichTextEditor folder
//    that the controller writes uploaded images to.
var richTextFolderProvider = new PhysicalFileProvider(
    Path.Combine(app.Environment.ContentRootPath, "wwwroot", "RichTextEditor")
);

// Actually serve the files from the RichTextEditor folder.
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = richTextFolderProvider,
    RequestPath  = "/public"
});

// Browse the directory index (HTML list) of the folder.
app.UseDirectoryBrowser(new DirectoryBrowserOptions
{
    FileProvider = richTextFolderProvider,
    RequestPath  = "/public"
});

// Routing must come before CORS/Authorization for endpoint routing to work correctly.
app.UseRouting();

// Enable the CORS policy defined above.
app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
