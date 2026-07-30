---
layout: post
title: Import/Export in TypeScript Rich Text Editor | Syncfusion
description: Learn here all about Content Import/Export in Syncfusion TypeScript Rich Text Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: IContent Import/Export
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Content Import/Export in TypeScript Rich Text Editor control

## Importing content from Microsoft Word

The Rich Text Editor provides functionality to import content directly from Microsoft Word documents, preserving the original formatting and structure. This feature ensures a smooth transition of content from Word to the editor, maintaining elements such as headings, lists, tables, and text styles.

To integrate an `ImportWord` option into the Rich Text Editor toolbar, you can add it as a custom toolbar [items](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#items) using the items property in toolbarSettings.

The following example illustrates how to set up the `ImportWord` in the Rich Text Editor to facilitate content importation from Word documents:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/import-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/import-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/import-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/import-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/import-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/import-cs1" %}
{% endif %}

## Secure importing with authentication

The Rich Text Editor provides functionality to import Word documents with authentication for secure importing.

The [wordImporting](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#wordimporting) event provides [UploadingEventArgs](https://ej2.syncfusion.com/documentation/api/uploader/uploadingeventargs) for secure Word file import. Use `currentRequest` to add authentication headers and `customFormData` to include extra parameters in the POST body along with the uploaded file. On the server, read headers and form data from the request to validate and process the import securely.

The following example demonstrates how to configure `wordImporting` for secure importing:

```ts

import { RichTextEditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, ImportExport } from '@syncfusion/ej2-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, ImportExport);

const hostUrl: string = 'https://services.syncfusion.com/js/production/';
const importEditor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['ImportWord']
    },
    insertImageSettings: {
        saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
        removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
        path: hostUrl + 'RichTextEditor/'
    },
    importWord: {
        serviceUrl: hostUrl + 'api/RichTextEditor/ImportFromWord',
    },
    enableXhtml: true,
    wordImporting:  onWordImport
});
importEditor.appendTo('#importEditor');
function onWordImport(args: UploadingEventArgs): void {
    let accessToken = "Authorization_token";
    // adding authorization header
    args.currentRequest.setRequestHeader('Authorization', accessToken)
    // adding custom form Data
    args.customFormData = [{'userId': '1234'}];
}
```
Here’s how to handle the server-side action for importing content from Word with authentication.

```csharp

public class RichTextEditorController : Controller

    {       
        public IWebHostEnvironment _webHostEnvironment;

        [AcceptVerbs("Post")]
        [EnableCors("AllowAllOrigins")]
        [Route("ImportFromWord")]
        public IActionResult ImportFromWord(IList<IFormFile> UploadFiles)
        {
            // Read headers (e.g., Authorization)
            var authorization = Request.Headers["Authorization"].ToString();
            // Read custom form data (from args.customFormData)
            var formData = Request.Form("userId").ToString();
            string HtmlString = string.Empty;
            if (UploadFiles != null)
            {
                foreach (var file in UploadFiles)
                {
                    string filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    filename = _webHostEnvironment.WebRootPath + $@"\{filename}";
                    using (FileStream fs = System.IO.File.Create(filename))
                    {
                        file.CopyTo(fs);
                        fs.Flush();
                    }
                    using (var mStream = new MemoryStream())
                    {
                        WordDocument document = new WordDocument(file.OpenReadStream(), FormatType.Rtf);
                        document.SaveOptions.HTMLExportWithWordCompatibility = false;
                        document.Save(mStream, FormatType.Html);
                        mStream.Position = 0;
                        HtmlString = new StreamReader(mStream).ReadToEnd();
                    };
                    HtmlString = ExtractBodyContent(HtmlString);
                    HtmlString = SanitizeHtml(HtmlString);
                    System.IO.File.Delete(filename);
                }
                return Ok(HtmlString);
            }
            else
            {
                Response.Clear();
                // Return an appropriate status code or message
                return BadRequest("No files were uploaded.");
            }
        }

        private string ExtractBodyContent(string html)
        {
            if (html.Contains("<html") && html.Contains("<body"))
            {
                return html.Remove(0, html.IndexOf("<body>") + 6).Replace("</body></html>", "");
            }
            return html;
        }

        private string SanitizeHtml(string html)
        {
            // Regex pattern to match non-ASCII or control characters: [^\x20-\x7E]
            return Regex.Replace(html, @"[^\x20-\x7E]", " ");
        }
    }    

```

## Exporting content to PDF and Microsoft Word

The Rich Text Editor's export functionality allows users to convert their edited content into PDF or Word documents with a single click, preserving all text styles, images, tables, and other formatting elements.

You can add `ExportWord` and `ExportPdf` tools to the Rich Text Editor toolbar using the toolbarSettings [items](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings) property.

The following example demonstrates how to configure the `ExportWord` and `ExportPdf` tools in the Rich Text Editor, facilitating the export of content into Word or PDF documents:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/export-cs1" %}
{% endif %}

## Secure exporting with authentication

The Rich Text Editor provides functionality to export Word or PDF documents with authentication for secure exporting.

The [documentExporting](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#documentexporting) event provides `ExportingEventArgs` for secure export of Word or PDF files. Use `exportType` to identify the format, `currentRequest` to add authentication headers, and `customFormData` to send extra parameters in the POST body. On the server, read headers and custom data to validate and process the export securely.

The following example demonstrates how to configure `documentExporting` for secure exporting:

```ts
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, PasteCleanup, ImportExport } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, PasteCleanup, ImportExport);

const hostUrl: string = 'https://services.syncfusion.com/js/production/';
const exportEditor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['ExportWord', 'ExportPdf']
    },
    insertImageSettings: {
        saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
        removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
        path: hostUrl + 'RichTextEditor/'
    },
    exportWord: {
        serviceUrl: hostUrl + 'api/RichTextEditor/ExportToDocx',
        fileName: 'RichTextEditor.docx',
        stylesheet: `
        .e-rte-content {
            font-size: 1em;
            font-weight: 400;
            margin: 0;
        }
    `
    },
    exportPdf: {
        serviceUrl: hostUrl + 'api/RichTextEditor/ExportToPdf',
        fileName: 'RichTextEditor.pdf',
        stylesheet: `
        .e-rte-content{
            font-size: 1em;
            font-weight: 400;
            margin: 0;
        }
    `
    },
    enableXhtml: true,
    documentExporting : onDocumentExporting
});
exportEditor.appendTo('#exportEditor');
function onDocumentExporting(args: ExportingEventArgs): void {
    const accessToken = "Authorization_token";
    // Specify export type (e.g., 'Pdf' or 'Word')
    args.exportType = 'Pdf';
    // Add authentication header
    args.currentRequest = [{ Authorization: accessToken }];
    // Add custom form data
    args.customFormData = [{ userId: '1234' }, { exportMode: 'secure' }];
}
```
Here’s how to handle the server-side action for exporting content to PDF and Microsoft Word with authentication

 ```csharp

public class RichTextEditorController : Controller

    {       
        public IWebHostEnvironment _webHostEnvironment;

        [AcceptVerbs("Post")]
        [EnableCors("AllowAllOrigins")]
        [Route("ExportToPdf")]
        public ActionResult ExportToPdf([FromBody] ExportParam args)
        {
            // Read headers (e.g., Authorization)
            var authorization = Request.Headers["Authorization"].ToString();
            // Read custom form data (from args.customFormData)
            var formData = args.CustomFormData;
            string htmlString = args.html;
            if (htmlString == null && htmlString == "")
            {
                return null;
            }
            using (WordDocument wordDocument = new WordDocument())
            {
                //This method adds a section and a paragraph in the document
                wordDocument.EnsureMinimal();
                wordDocument.HTMLImportSettings.ImageNodeVisited += OpenImage;
                //Append the HTML string to the paragraph.
                wordDocument.LastParagraph.AppendHTML(htmlString);
                DocIORenderer render = new DocIORenderer();
                //Converts Word document into PDF document
                PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
                wordDocument.HTMLImportSettings.ImageNodeVisited -= OpenImage;
                MemoryStream stream = new MemoryStream();
                pdfDocument.Save(stream);
                return File(stream.ToArray(), System.Net.Mime.MediaTypeNames.Application.Pdf, "Sample.pdf");
            }
        }

        [AcceptVerbs("Post")]
        [EnableCors("AllowAllOrigins")]
        [Route("ExportToDocx")]
        public FileStreamResult ExportToDocx([FromBody] ExportParam args)
        {
            string htmlString = args.html;
            if (htmlString == null && htmlString == "")
            {
                return null;
            }
            using (WordDocument document = new WordDocument())
            {
                document.EnsureMinimal();
                //Hooks the ImageNodeVisited event to open the image from a specific location
                document.HTMLImportSettings.ImageNodeVisited += OpenImage;
                //Validates the Html string
                bool isValidHtml = document.LastSection.Body.IsValidXHTML(htmlString, XHTMLValidationType.None);
                //When the Html string passes validation, it is inserted to the document
                if (isValidHtml)
                {
                    //Appends the Html string to first paragraph in the document
                    document.Sections[0].Body.Paragraphs[0].AppendHTML(htmlString);
                }
                //Unhooks the ImageNodeVisited event after loading HTML
                document.HTMLImportSettings.ImageNodeVisited -= OpenImage;
                //Creates file stream.
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);
                stream.Position = 0;
                //Download Word document in the browser
                return File(stream, "application/msword", "Result.docx");
            }
        }

        private static void OpenImage(object sender, ImageNodeVisitedEventArgs args)
        {
            if (args.Uri.StartsWith("https://"))
            {
                #pragma warning disable SYSLIB0014 // Type or member is obsolete
                WebClient client = new WebClient();
                #pragma warning restore SYSLIB0014 // Type or member is obsolete
                //Download the image as a stream.
                byte[] image = client.DownloadData(args.Uri);
                Stream stream = new MemoryStream(image);
                //Set the retrieved image from the input Markdown.
                args.ImageStream = stream;
            }
        }

        public class ExportParam
        {
            public string html { get; set; }
            // For receiving custom form data
            public List<Dictionary<string,string>> CustomFormData { get; set; }
        }
    }    

```

> To create Rich Text Editor with ImportExport feature, inject the ImportExport module to the Rich Text Editor using the `RichTextEditor.Inject(ImportExport)` method.
