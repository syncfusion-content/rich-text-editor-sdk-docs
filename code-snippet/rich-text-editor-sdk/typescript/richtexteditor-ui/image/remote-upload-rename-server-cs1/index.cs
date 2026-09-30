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
