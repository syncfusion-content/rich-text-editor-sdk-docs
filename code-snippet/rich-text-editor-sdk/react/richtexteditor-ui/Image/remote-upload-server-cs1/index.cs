// ============================================
// SERVER-SIDE: Image Upload Endpoint (ASP.NET Core)
// ============================================
// Controller action that receives image uploads from the
// Modern Rich Text Editor's `imageSettings.uploadUrl` endpoint.
// The editor POSTs the file using the form field name "UploadFiles".
[HttpPost("SaveFile")]
[EnableCors("AllowAllOrigins")]
public IActionResult SaveFile(IList<IFormFile> UploadFiles)
{
    try
    {
        // Guard: at least one file must be present in the request.
        if (UploadFiles == null || UploadFiles.Count == 0)
        {
            return BadRequest("No files provided.");
        }

        // Guard: limit the number of files per request to avoid abuse.
        if (UploadFiles.Count > 1)
        {
            return BadRequest("Too many files. Maximum 1 file allowed per request.");
        }

        foreach (IFormFile uploadFile in UploadFiles)
        {
            // Extract the original filename from the Content-Disposition header.
            var fileNameSegment = ContentDispositionHeaderValue
                .Parse(uploadFile.ContentDisposition).FileName;
            string? fileName = fileNameSegment.HasValue
                ? fileNameSegment.Value.Trim('"')
                : null;

            // DOS PREVENTION - Reject overly long filenames.
            if (fileName?.Length > 255)
            {
                return BadRequest("Filename too long. Maximum 255 characters allowed.");
            }

            // PATH TRAVERSAL PREVENTION - Reject filenames that try to escape
            // the target directory using relative path segments.
            if (fileName != null && (fileName.Contains("..") ||
                                     fileName.Contains("/")  ||
                                     fileName.Contains("\\")))
            {
                return BadRequest("Invalid filename - path traversal detected.");
            }

            // Resolve the destination path under the wwwroot/RichTextEditor folder.
            string filePath = Path.Combine(
                _webHostEnvironment.WebRootPath,
                "RichTextEditor",
                fileName!);

            // Overwrite any existing file with the same name.
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
