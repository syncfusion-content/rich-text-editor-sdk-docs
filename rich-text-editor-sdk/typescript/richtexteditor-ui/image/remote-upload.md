---
layout: post
title: Remote Image Upload in TypeScript RichTextEditorUI | Syncfusion
description: Learn how to implement remote image upload in TypeScript RichTextEditorUI. Configure endpoints, handle file uploads, rename images, and secure uploads with authentication.
control: RichTextEditorUI
platform: rich-text-editor-ui-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-ui-sdk/
---

# Remote Image Upload

Remote image upload enables centralized image management on your server, providing better control over storage, performance, and security. This section covers implementing a complete server-side upload pipeline with authentication and validation.

### Writing an Endpoint for Image Upload

When a user uploads an image through the RichTextEditor, the component sends the file to your server using the form field name `UploadFiles`. Your server processes the file and returns a JSON response containing the filename, which the editor combines with the `imageUrl` setting to create the final image source.

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
        maxFileSize: 5 * 1024 * 1024,                        // 5MB limit
        dimension: {
            width: '300px',                                  // Default width
            height: '300px',                                 // Default height
            minWidth: '50px',
            maxWidth: '1000px',
            minHeight: '50px',
            maxHeight: '1000px'
        }
    }
});

editor.appendTo('#editor');

// ============================================
// SERVER-SIDE: Handle Image Upload (Node.js/Express)
// ============================================
// The RichTextEditor sends files with the form field name 'UploadFiles'
app.post('/api/images/upload', (req, res) => {
    try {
        // Access the uploaded file using the 'UploadFiles' field name
        const file = req.files?.UploadFiles;
        
        if (!file) {
            return res.status(400).json({ error: 'No file provided' });
        }
        
        // Generate a unique filename
        const timestamp = Date.now();
        const filename = `${timestamp}-${file.name}`;
        
        // Save the file to your uploads directory
        const uploadPath = path.join(__dirname, 'uploads', filename);
        
        file.mv(uploadPath, (err) => {
            if (err) {
                console.error('File save error:', err);
                return res.status(500).json({ error: 'Upload failed' });
            }
            
            // ⚠️ IMPORTANT: Return ONLY the filename
            // The editor will combine it with imageUrl to create the final URL
            // Example: /uploads/ + image-123456.jpg = /uploads/image-123456.jpg
            res.status(200).json({
                name: filename
            });
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
});
```

#### Details about Name Attribute

The RichTextEditorUI component sends uploaded files using the form field name `UploadFiles`. This is a **hard-coded field name** in the component, and your server endpoint must access the file from this exact field name.

**Form Field Name**

When the user selects an image file in the RichTextEditorUI, the component creates a file input with:

```typescript
<input type="file" name="UploadFiles" />
```

Your server endpoint must access the uploaded file from the `UploadFiles` field:

```typescript
// Node.js/Express
const file = req.files?.UploadFiles;

// ASP.NET Core
var file = Request.Form.Files["UploadFiles"];

// PHP
$file = $_FILES['UploadFiles'];
```

**Response Format**

After processing the file on the server, you must return a JSON response with the `name` property containing **only the filename**:

```typescript
// Correct response format
res.json({
    name: "image-12345.jpg"
});
```

The editor will combine this filename with the `imageUrl` setting:

```typescript
imageSettings: {
    uploadUrl: 'https://api.example.com/images/upload',
    imageUrl: '/uploads/'    // Base URL
}

// Server returns: "image-12345.jpg"
// Final src becomes: "/uploads/image-12345.jpg"
```

### Rename Images Before Inserting

You can implement server-side renaming to ensure all uploaded images follow your naming standards. The client receives the renamed filename and automatically inserts it using the `imageUrl` configuration.

```typescript
// ============================================
// SERVER-SIDE: Rename Images During Upload
// ============================================
app.post('/api/images/upload', authenticateUser, (req, res) => {
    try {
        const file = req.files?.UploadFiles;
        const userId = req.user.id;  // From authentication middleware
        
        if (!file) {
            return res.status(400).json({ error: 'No file provided' });
        }
        
        // Extract file extension from original name
        const originalName = file.name;
        const fileExtension = originalName.split('.').pop();
        
        // Generate a standardized filename with user context
        const timestamp = Date.now();
        const newFilename = `img-user${userId}-${timestamp}.${fileExtension}`;
        
        // Save with renamed filename
        const uploadPath = path.join(__dirname, 'uploads', newFilename);
        
        file.mv(uploadPath, (err) => {
            if (err) {
                console.error('File save error:', err);
                return res.status(500).json({ error: 'Upload failed' });
            }
            
            // Return the renamed filename
            res.status(200).json({
                name: newFilename
            });
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
});

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
            // Server returns renamed filename
            // Editor automatically combines with imageUrl
            console.log('Image uploaded successfully');
            console.log('Renamed filename:', args.response);
            // Example flow:
            // Server returns: 'img-user123-1701234567890.jpg'
            // Editor creates: /uploads/img-user123-1701234567890.jpg
        }
    }
});

editor.appendTo('#editor');
```

### Secure Upload with Authentication

Implement client-side authentication token handling and server-side validation to secure your upload process.

```typescript
// ============================================
// CLIENT-SIDE: Send Authentication Token
// ============================================
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/images/upload',
        imageUrl: '/uploads/',
        removeUrl: 'https://api.example.com/images/remove',
        maxFileSize: 5 * 1024 * 1024  // 5MB limit
    },
    beforeFileUpload: (args) => {
        // Add authentication token before upload
        if (args.source === 'Image') {
            const token = localStorage.getItem('auth_token');
            if (token && args.customFormData) {
                args.customFormData.push({ 
                    name: 'Authorization', 
                    value: `Bearer ${token}`
                });
            }
        }
    },
    fileUploadSuccess: (args) => {
        if (args.source === 'Image') {
            console.log('Image uploaded successfully');
            console.log('Response:', args.response);
        }
    },
    fileUploadFailed: (args) => {
        if (args.source === 'Image') {
            console.error('Image upload failed:', args.error);
            // Handle different error types
            if (args.statusCode === 401) {
                console.error('Authentication failed - token may be expired');
                // Redirect to login or refresh token
            } else if (args.statusCode === 413) {
                console.error('File too large - exceeds size limit');
            } else if (args.statusCode === 415) {
                console.error('Unsupported file type');
            }
        }
    }
});

editor.appendTo('#editor');

// ============================================
// SERVER-SIDE: Validate and Secure Upload
// ============================================
app.post('/api/images/upload', 
    authenticateToken,  // Verify JWT or session token
    (req, res) => {
        try {
            const file = req.files?.UploadFiles;
            const userId = req.user.id;  // From auth middleware
            
            if (!file) {
                return res.status(400).json({ error: 'No file provided' });
            }
            
            // 1. Validate file type (MIME type check)
            const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!allowedMimes.includes(file.mimetype)) {
                return res.status(415).json({ error: 'Unsupported file type' });
            }
            
            // 2. Validate file size
            const maxSize = 5 * 1024 * 1024;  // 5MB
            if (file.size > maxSize) {
                return res.status(413).json({ error: 'File too large' });
            }
            
            // 3. Sanitize filename
            let filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            
            // 4. Generate secure filename with user context
            const timestamp = Date.now();
            const secureFilename = `img-user${userId}-${timestamp}-${filename}`;
            
            // 5. Save file to secure location
            const uploadPath = path.join(__dirname, 'secure-uploads', secureFilename);
            
            file.mv(uploadPath, (err) => {
                if (err) {
                    console.error('File save error:', err);
                    return res.status(500).json({ error: 'Upload failed' });
                }
                
                // 6. Return only the filename
                res.status(200).json({
                    name: secureFilename
                });
            });
        } catch (error) {
            console.error('Upload error:', error);
            res.status(500).json({ error: 'Upload failed' });
        }
    }
);
```
