// ============================================
// SERVER-SIDE: Secure Image Upload with Authentication (ASP.NET Core)
// ============================================
// Same upload endpoint as the basic version, but with a custom
// `Authorization` header check. The client sets this header inside
// the editor's `fileUploading` event using
// `args.currentRequest.setRequestHeader('Authorization', 'Syncfusion')`.
[HttpPost("SaveFile")]
[EnableCors("AllowAllOrigins")]
public IActionResult SaveFile(IList<IFormFile> UploadFiles)
{
    try
    {
        // Fetch the custom authentication header that the client attached
        // before the request was sent.
        string? authorizationHeader = Request.Headers["Authorization"].FirstOrDefault();

        if (string.IsNullOrEmpty(authorizationHeader))
        {
            return StatusCode(401, new { error = "Authorization header missing" });
        }

        // Optional: validate the token here (e.g. JWT, API key, session id).
        // if (!IsValidToken(authorizationHeader)) { return Unauthorized(); }

        if (UploadFiles == null || UploadFiles.Count == 0)
        {
            return BadRequest("No files provided.");
        }

        if (UploadFiles.Count > 1)
        {
            return BadRequest("Too many files. Maximum 1 file allowed per request.");
        }

        foreach (IFormFile uploadFile in UploadFiles)
        {
            var fileNameSegment = ContentDispositionHeaderValue
                .Parse(uploadFile.ContentDisposition).FileName;
            string? fileName = fileNameSegment.HasValue
                ? fileNameSegment.Value.Trim('"')
                : null;

            // DOS PREVENTION - Filename length limit.
            if (fileName?.Length > 255)
            {
                return BadRequest("Filename too long. Maximum 255 characters allowed.");
            }

            // PATH TRAVERSAL PREVENTION - Block dangerous characters.
            if (fileName != null && (fileName.Contains("..") ||
                                     fileName.Contains("/")  ||
                                     fileName.Contains("\\")))
            {
                return BadRequest("Invalid filename - path traversal detected.");
            }

            string filePath = Path.Combine(
                _webHostEnvironment.WebRootPath,
                "RichTextEditor",
                fileName!);

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
