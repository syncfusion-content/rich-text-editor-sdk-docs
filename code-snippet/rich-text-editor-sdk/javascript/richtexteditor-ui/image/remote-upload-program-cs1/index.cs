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
