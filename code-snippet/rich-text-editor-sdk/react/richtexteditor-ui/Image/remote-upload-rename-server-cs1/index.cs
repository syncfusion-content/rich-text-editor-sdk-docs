// ============================================
// SERVER-SIDE: Rename Images During Upload (ASP.NET Core)
// ============================================
// Generates a deterministic, user-scoped filename on the server so the
// client never has to invent a name. The new filename is returned in the
// response and the editor resolves it through `imageSettings.imageUrl`.
[HttpPost("SaveFile")]
[Authorize]  // Authenticate user via the configured auth scheme.
public IActionResult SaveFile([FromForm] IList<IFormFile> UploadFiles)
{
    try
    {
        // Read the user id from the authentication claims.
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (UploadFiles == null || UploadFiles.Count == 0)
        {
            return BadRequest(new { error = "No file provided" });
        }

        var file = UploadFiles[0];

        // Preserve the original file extension.
        var originalName  = file.FileName;
        var fileExtension = Path.GetExtension(originalName);

        // Build a standardized, collision-resistant filename with user context.
        var timestamp   = DateTime.UtcNow.ToString("yyyyMMddHHmmssfff");
        var newFilename = $"img-user{userId}-{timestamp}{fileExtension}";

        // Resolve the uploads directory under wwwroot (fall back to
        // a synthesized wwwroot if WebRootPath is not configured).
        var webRoot     = _webHostEnvironment.WebRootPath
                          ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        var uploadsPath = Path.Combine(webRoot, "uploads");
        Directory.CreateDirectory(uploadsPath);

        var savePath = Path.Combine(uploadsPath, newFilename);

        using (var fs = System.IO.File.Create(savePath))
        {
            file.CopyTo(fs);
            fs.Flush();
        }

        // Return the renamed filename so the editor can resolve it
        // against the configured `imageUrl` base path.
        return Ok(new { name = newFilename });
    }
    catch (Exception)
    {
        return StatusCode(500, new { error = "Upload failed" });
    }
}
