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
