# Image Insertion and Management in RichTextEditor - TypeScript Guide

## Overview

The Syncfusion RichTextEditor component provides comprehensive image insertion and management capabilities for TypeScript applications. This guide covers all aspects of working with images in the RichTextEditor, from basic insertion to advanced configurations and toolbar customization.

---

## How-to Guides

### How to Insert Images from Local Storage

**Scenario**: You want users to upload images directly from their computer.

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        saveUrl: 'https://api.example.com/upload',
        path: '/Images/'
    },
    toolbarSettings: {
        items: ['Image']
    }
});

editor.appendTo('#editor');
```

**User Steps:**
1. Click the Image toolbar button
2. Select **Local Storage** tab
3. Click **Browse** to select a file from your computer
4. Click **Insert**

**Key Points:**
- Supported formats: JPG, JPEG, PNG, GIF (by default)
- Files are processed according to your server's `saveUrl` endpoint
- The editor sends files as multipart/form-data

### How to Insert Images from Web URLs

**Scenario**: You want to reference images hosted on external websites.

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
        insertImageSettings: {
            removeWebsiteUrl: false  // Keep the original URL
        }
    }
});

editor.appendTo('#editor');
```

**User Steps:**
1. Click the Image toolbar button
2. Select **Web URL** tab
3. Paste or type the image URL
4. (Optional) Set width, height, and alt text
5. Click **Insert**

**Code Example:**
```typescript
editor.executeCommand('createImage', {
    url: 'https://cdn.example.com/my-image.png',
    width: '400px',
    height: '300px',
    alt: 'Description of the image'
});
```

**Best Practices:**
- Always provide an `alt` attribute for accessibility
- Verify URLs point to publicly accessible images
- Consider CORS restrictions when linking to external domains

### How to Use Image Upload Commands

**Scenario**: You want to programmatically insert images using specific commands.

```typescript
// Insert image with specific properties
editor.executeCommand('createImage', {
    url: 'https://example.com/image.png',
    width: '300px',
    height: '200px',
    alt: 'Sample Image',
    title: 'My Image',
    cssClass: 'custom-image'
});

// Replace selected image
editor.executeCommand('replaceImage', {
    url: 'https://example.com/new-image.png'
});

// Remove image
editor.executeCommand('removeImage');
```

**Available Commands:**
- `createImage`: Insert a new image
- `replaceImage`: Replace the currently selected image
- `removeImage`: Delete the selected image
- `editImage`: Open image properties dialog

### How to Implement Remote Image Upload

**Scenario**: You want to upload images to your server and manage them centrally.

#### Step 1: Set Up Your Upload Endpoint

Create a server endpoint that accepts image uploads:

```typescript
// Server-side (Node.js/Express example)
app.post('/api/images/upload', (req, res) => {
    const file = req.files.file;
    const filename = `${Date.now()}-${file.name}`;
    
    file.mv(`./uploads/${filename}`, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        
        res.json({
            name: filename,
            url: `/uploads/${filename}`
        });
    });
});
```

#### Step 2: Configure the Editor

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        saveUrl: 'https://api.example.com/images/upload',
        path: '/uploads/',
        width: '300px',
        height: '300px'
    },
    insertImageSettings: {
        minWidth: '0px',
        maxWidth: '1000px',
        minHeight: '0px',
        maxHeight: '1000px',
        resize: true,
        saveFormat: 'Blob'
    }
});

editor.appendTo('#editor');
```

#### Step 3: Details About the Name Attribute

The `name` attribute in the upload form data:

```typescript
// Client sends form data with 'UploadFiles' as the field name
const formData = new FormData();
formData.append('UploadFiles', fileObject);  // Field name is 'UploadFiles'

// Server receives and processes
app.post('/api/images/upload', (req, res) => {
    const uploadedFiles = req.files.UploadFiles;
    // Process files...
});
```

**Configuration Reference:**
```typescript
imageSettings: {
    saveUrl: 'endpoint-url',           // POST endpoint for uploads
    path: '/path/to/store/',           // Server-side storage path
    width: '300px',                    // Default width
    height: '300px'                    // Default height
}
```

#### Step 4: Rename Images Before Inserting

Implement server-side renaming for consistency:

```typescript
// Server-side renaming strategy
app.post('/api/images/upload', (req, res) => {
    const file = req.files.UploadFiles;
    const originalName = file.name;
    const fileExtension = originalName.split('.').pop();
    
    // Generate a unique, readable name
    const timestamp = Date.now();
    const userId = req.user.id;
    const newFilename = `img-${userId}-${timestamp}.${fileExtension}`;
    
    file.mv(`./uploads/${newFilename}`, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Upload failed' });
        }
        
        res.json({
            name: newFilename,
            url: `https://api.example.com/uploads/${newFilename}`
        });
    });
});

// Client-side event to track the rename
editor.imageUploaded = (args) => {
    console.log('Original filename:', args.originalFileName);
    console.log('Server filename:', args.file.name);
};
```

**Renaming Strategies:**
- Include timestamp for uniqueness: `img-1725121200000.png`
- Include user ID for organization: `img-user-123-photo.png`
- Use UUIDs for maximum uniqueness: `img-550e8400-e29b-41d4-a716-446655440000.png`

#### Step 5: Secure Upload with Authentication

```typescript
// Configure upload with authentication
const editor = new RichTextEditor({
    imageSettings: {
        saveUrl: 'https://api.example.com/images/upload',
        path: '/uploads/'
    },
    beforeImageUpload: (args) => {
        // Add authentication token before upload
        args.customFormData = [
            { name: 'token', value: localStorage.getItem('auth_token') },
            { name: 'userId', value: getCurrentUserId() }
        ];
    },
    actionFailure: (args) => {
        console.error('Upload failed:', args.error);
        // Handle authentication or other errors
    }
});

editor.appendTo('#editor');
```

**Security Best Practices:**

```typescript
// Server-side validation
app.post('/api/images/upload', authenticateUser, (req, res) => {
    const file = req.files.UploadFiles;
    
    // 1. Verify file type
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedMimes.includes(file.mimetype)) {
        return res.status(400).json({ error: 'Invalid file type' });
    }
    
    // 2. Check file size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        return res.status(400).json({ error: 'File too large' });
    }
    
    // 3. Verify user ownership
    const userId = req.user.id;
    
    // 4. Sanitize filename
    let filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    filename = `${userId}-${Date.now()}-${filename}`;
    
    // 5. Store in secure location outside web root (if possible)
    const uploadPath = path.join(__dirname, '../secure-uploads', filename);
    
    file.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
        
        res.json({
            name: filename,
            url: `/api/images/secure/${filename}`  // Serve through authenticated endpoint
        });
    });
});
```

---

## Reference - Image Options & Configuration

### Allowed Image Formats

The `allowedTypes` property specifies the image file extensions that can be selected, dropped, pasted, or uploaded.

The `allowedTypes` property specifies the image file extensions that can be selected, dropped, pasted, or uploaded.

**Default Supported Formats:**
- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- GIF (`.gif`)
- BMP (`.bmp`)
- WebP (`.webp`)

**Custom Format Configuration:**

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp']
    }
});
```

| Format | Extension | Use Case | Notes |
|--------|-----------|----------|-------|
| JPEG | `.jpg`, `.jpeg` | Photographs | Lossy compression, smaller file size |
| PNG | `.png` | Graphics, logos | Lossless compression, supports transparency |
| GIF | `.gif` | Animated images | Limited color palette, good for simple animations |
| BMP | `.bmp` | Legacy images | Uncompressed, larger file size |
| SVG | `.svg` | Scalable graphics | Vector format, infinitely scalable |
| WebP | `.webp` | Modern web | Better compression, newer browser support |

### Image Size Restrictions

The `dimension` property specifies the default and permitted dimensions of an image. The `maxFileSize` property specifies the maximum permitted image file size in bytes (default: 30000000 bytes = ~30MB).

**Configuration Options:**

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        // Dimension settings
        dimension: {
            width: '300px',           // Default width
            height: 'auto',           // Default height
            minWidth: '50px',         // Minimum allowed width
            maxWidth: '100%',         // Maximum allowed width
            minHeight: '50px',        // Minimum allowed height
            maxHeight: '800px'        // Maximum allowed height
        },
        
        // File size restriction (in bytes)
        maxFileSize: 5242880          // 5MB in bytes
    }
});
```

**Size Validation:**

```typescript
editor.beforeImageUpload = (args) => {
    const file = args.file;
    
    // Check file size
    const maxSize = 5 * 1024 * 1024;  // 5MB
    if (file.size > maxSize) {
        args.cancel = true;
        console.log('File too large');
    }
};
```

**Common Size Limits:**
- Small images: 100-300px (icons, thumbnails)
- Medium images: 300-600px (inline content)
- Large images: 600-1200px (feature/hero images)
- Maximum practical: 1920px width (for high-resolution displays)

### Image Save Formats

**Blob Format (Recommended - Default)**

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        saveFormat: 'Blob'
    }
});
```

**Advantages:**
- Creates a temporary object URL for the image
- Images stored on server as files
- Smaller content size in editor HTML
- Better performance with large documents
- Memory efficient

**When to use:** Production environments, large documents, frequent saves, mobile apps

---

**Base64 Format**

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        saveFormat: 'Base64'
    }
});
```

**Advantages:**
- Complete data embedding in HTML
- No server-side storage needed
- Portable, self-contained documents
- Works offline

**Disadvantages:**
- Larger HTML file size (~33% larger than binary)
- Slower parsing with many images
- Not ideal for performance-critical applications
- Higher memory usage

**When to use:** Small documents, email templates, offline-first applications, export scenarios

### Base64 & Blob Limitations

#### Base64 Limitations

| Issue | Impact | Solution |
|-------|--------|----------|
| File size increase | 33% larger than original | Compress images first |
| Email compatibility | Large Base64 breaks email clients | Use URLs for emails |
| Performance | Slower parsing with many images | Limit to < 5 images per document |
| Mobile concerns | Large payload on mobile devices | Use Blob format for mobile apps |
| Debugging | Hard to inspect in dev tools | Use Blob for development |

#### Blob Limitations

| Issue | Impact | Solution |
|-------|--------|----------|
| Server storage required | Additional infrastructure | Plan storage capacity |
| Cross-domain issues | CORS restrictions | Configure CORS headers |
| Temporary files | Need cleanup mechanism | Implement file lifecycle management |
| Session dependency | Files tied to session | Persist files properly |

### Image Dimensions

**Retrieve Current Dimensions:**

```typescript
// Get dimensions of selected image
editor.imageResized = (args) => {
    console.log('Width:', args.width);
    console.log('Height:', args.height);
};

// Access image element
const selectedImage = editor.contentModule.getDocument().querySelector('img[data-ej2-image]');
if (selectedImage) {
    console.log('Actual width:', selectedImage.offsetWidth);
    console.log('Actual height:', selectedImage.offsetHeight);
}
```

**Set Dimensions Programmatically:**

```typescript
// Set specific dimensions
editor.executeCommand('createImage', {
    url: 'image.png',
    width: '400px',
    height: '300px'
});

// Set aspect ratio locked
editor.imageSettings = {
    width: '50%',
    height: 'auto'  // Maintains aspect ratio
};
```

**Common Responsive Patterns:**

```typescript
// 100% responsive (fluid)
imageSettings: {
    width: '100%',
    height: 'auto'
}

// Maximum width with auto height
imageSettings: {
    width: '600px',
    maxWidth: '100%',
    height: 'auto'
}

// Fixed square
imageSettings: {
    width: '300px',
    height: '300px'
}

// 16:9 aspect ratio
imageSettings: {
    width: '600px',
    height: '337px'  // 600 * 9/16
}
```

### Image Display Options

**Display Modes:**

```typescript
// Inline - image flows with text (default)
imageSettings: {
    display: 'inline'
}

// Break - image placed on a separate line
imageSettings: {
    display: 'break'
}
```

**Visual Difference:**

- **Inline**: Image appears within the current text flow → "Text before image text after"
- **Break**: Image appears on a separate line → Text before / [Image] / Text after

**CSS Styling:**

```typescript
const editor = new RichTextEditor({
    imageSettings: {
        cssClass: 'editor-image'
    }
});

// CSS for custom styling
/* Styles applied to inserted images */
.editor-image {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.editor-image:hover {
    transform: scale(1.02);
}
```

**Text Wrapping Options:**

```typescript
// Through Quick Toolbar - users select:
// - 'None' (default)
// - 'Inline'
// - 'Square'
// - 'Top and bottom'

// Programmatically set text wrap
editor.imageAligned = (args) => {
    const selectedImg = args.element;
    // Apply wrapping styles
    selectedImg.style.float = 'left';
    selectedImg.style.margin = '0 10px 10px 0';
};
```

### Image Resizing

**Enable Image Resize:**

```typescript
import { ImageResize } from '@syncfusion/ej2-richtexteditor';

Inject(ImageResize);

const editor = new RichTextEditor({
    imageSettings: {
        resize: true,
        minWidth: '50px',
        maxWidth: '800px',
        minHeight: '50px',
        maxHeight: '600px'
    }
});
```

**Programmatic Resizing:**

```typescript
// Track resize events
editor.imageResized = (args) => {
    console.log('Image resized');
    console.log('New width:', args.width);
    console.log('New height:', args.height);
};

// Resize specific image by ID
const imageElement = editor.contentModule.getDocument().getElementById('myImage');
if (imageElement) {
    imageElement.setAttribute('width', '400px');
    imageElement.setAttribute('height', '300px');
}
```

**Resize Behavior:**

| Resize Type | Behavior | Use Case |
|------------|----------|----------|
| Corner handle drag | Maintains aspect ratio | Default behavior |
| Free resize | Can change dimensions independently | With Alt/Ctrl key |
| Constrained | Respects min/max limits | Production environments |
| Smooth | Animated transition | Better UX |

---

## Reference - Image Quick Toolbar API

### Available Quick Toolbar Items

The Image Quick Toolbar appears when an image is selected. It provides quick access to common image operations.

#### Caption

**Purpose**: Add or edit image captions

```typescript
// Enable caption functionality
imageSettings: {
    showImageCaption: true
}

// Event when caption is added
editor.imageCaptionEdited = (args) => {
    console.log('Caption:', args.caption);
};
```

**HTML Output:**
```html
<figure>
    <img src="image.png" alt="Sample" />
    <figcaption>Image Caption Text</figcaption>
</figure>
```

---

#### Alt Text

**Purpose**: Add alternative text for accessibility

```typescript
// Require alt text on all images
editor.beforeImageUpload = (args) => {
    // Validate alt text is provided
    if (!args.altText) {
        args.cancel = true;
        console.log('Alt text is required');
    }
};

// Retrieve alt text of selected image
editor.imageSelected = (args) => {
    const altText = args.element.getAttribute('alt');
    console.log('Alt text:', altText);
};
```

**Accessibility Benefits:**
- Screen readers read alt text to visually impaired users
- Provides context when image fails to load
- Improves SEO
- Required for WCAG 2.1 Level A compliance

**Best Practices for Alt Text:**
```
❌ Don't write: "image", "photo", "picture"
✅ Do write: "Diagram showing data flow architecture"

❌ Don't write: Long descriptions
✅ Do write: Concise, descriptive text (< 125 characters)

❌ Don't write: "Image of a chart showing sales data"
✅ Do write: "Sales data 2024: Q1 $100k, Q2 $150k"
```

---

#### Replace

**Purpose**: Replace the selected image with a different one

```typescript
editor.imageReplaced = (args) => {
    console.log('Image replaced');
    console.log('Old URL:', args.oldUrl);
    console.log('New URL:', args.newUrl);
};

// Programmatic replace
editor.executeCommand('replaceImage', {
    url: 'https://example.com/new-image.png'
});
```

---

#### Text Wrap

**Purpose**: Control how text flows around the image

**Available Options:**
```typescript
// Inline - image flows with text
textWrap: 'inline'

// Square - text wraps around image in a square pattern
textWrap: 'square'

// Tight - text wraps tightly around image edges
textWrap: 'tight'

// Through - text flows through image
textWrap: 'through'

// Top and Bottom - no text on sides
textWrap: 'topAndBottom'
```

**CSS Implementation:**
```css
/* Inline (default) */
img.text-wrap-inline {
    display: inline;
}

/* Square */
img.text-wrap-square {
    float: left;
    margin: 0 15px 15px 0;
}

/* Top and Bottom */
img.text-wrap-top-bottom {
    display: block;
    margin: 15px auto;
}
```

---

#### Alignment

**Purpose**: Align image horizontally within the editor

**Available Options:**
```typescript
// Left alignment
alignment: 'left'

// Center alignment
alignment: 'center'

// Right alignment
alignment: 'right'
```

**Programmatic Usage:**
```typescript
editor.imageAligned = (args) => {
    console.log('Image aligned to:', args.alignment);
};

// Set alignment
const image = editor.contentModule.getDocument().querySelector('img[data-ej2-image]');
if (image) {
    image.style.textAlign = 'center';
    image.parentElement.style.textAlign = 'center';
}
```

---

#### Remove

**Purpose**: Delete the selected image from the editor

```typescript
editor.imageRemoved = (args) => {
    console.log('Image removed');
    console.log('Removed URL:', args.removedImageUrl);
};

// Programmatic removal
editor.executeCommand('removeImage');
```

---

#### Open Image

**Purpose**: Open the image in a new tab or modal

```typescript
editor.imageOpened = (args) => {
    console.log('Image opened');
    window.open(args.imageUrl, '_blank');
};
```

---

### Customizing the Image Quick Toolbar

The RichTextEditor provides comprehensive customization options for the image quick toolbar, offering a rich set of tools including 'AltText', 'Caption', 'Align', 'Display', 'WrapText', 'Dimension', 'Replace', and 'Remove'. By configuring these toolbar items through the `quickToolbarSettings` property, you can create a tailored editing experience that streamlines image operations. This flexibility enables developers to build interfaces that align with their specific workflow requirements while maintaining an intuitive user experience for content editing and image manipulation.

```typescript
const editor = new RichTextEditor({
    quickToolbarSettings: {
        image: [
            'AltText',
            'Caption',
            '|',
            'Align',
            'Display',
            'WrapText',
            '|',
            'Dimension',
            'Replace',
            'Remove'
        ]
    }
});

editor.appendTo('#richTextEditor');
```
