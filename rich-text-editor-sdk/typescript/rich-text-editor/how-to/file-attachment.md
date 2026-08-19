---
layout: post
title: Attach Files in TypeScript Rich Text Editor | Syncfusion
description: Learn how to attach files in the TypeScript Rich Text Editor using file upload, drag and drop, saveUrl, and path configurations.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Attach Files in TypeScript Rich Text Editor

The Rich Text Editor allows you to attach a file based on the file upload. You can attach your files using the file upload or drag-and-drop from your local path. When the file upload is successful, the attachment link is inserted into the content.

In the below sample, configure the `saveUrl` and `path` properties to achieve file attachments.

        1. `saveUrl`: Specifies the service URL where files will be saved.
        2. `path`: Defines the location where uploaded files will be stored.

The following sample illustrates how to attach a file in the Rich Text Editor.

```ts

import { RichTextEditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, NodeSelection } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, NodeSelection);
import { Uploader } from '@syncfusion/ej2-inputs';

let selection: NodeSelection = new NodeSelection();
let range: Range;
let saveSelection: NodeSelection;
let defaultRTE: RichTextEditor = new RichTextEditor({
  insertImageSettings: {
   saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Save",
    path: "../Files/"
  }
});
defaultRTE.appendTo("#defaultRTE");
let uploadObj: Uploader = new Uploader({
  asyncSettings: {
    saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Save",
  },
  dropArea: defaultRTE.inputElement,
  success: onUploadSuccess
});
uploadObj.appendTo("#fileupload");
function onUploadSuccess(args: any): void {
  (defaultRTE.contentModule.getEditPanel() as HTMLElement).focus();
  range = selection.getRange(document);
  saveSelection = selection.save(range, document);
  let fileUrl: any =
      document.URL + defaultRTE.insertImageSettings.path + args.file.name;
  if (defaultRTE.formatter.getUndoRedoStack().length === 0) {
      defaultRTE.formatter.saveData();
  }
  saveSelection.restore();
  defaultRTE.executeCommand('createLink', { url: fileUrl, text: fileUrl, selection: saveSelection });
  defaultRTE.formatter.saveData();
  defaultRTE.formatter.enableUndo(defaultRTE);
  this.clearAll();
}

```

To configure server-side handler, refer the below code.

```c#
int x = 0;
string file;
 [AcceptVerbs("Post")]
        public void Save()
        {
            try
            {
                var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
                file = httpPostedFile.FileName;
                if (httpPostedFile != null)
                {
                    Console.WriteLine(System.Web.HttpContext.Current.Server.MapPath("~/Files"));
                    var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Files");
                    if (!Directory.Exists(fileSave))
                    {
                        Directory.CreateDirectory(fileSave);
                    }
                    var fileName = Path.GetFileName(httpPostedFile.FileName);
                    var fileSavePath = Path.Combine(fileSave, fileName);
                    while (System.IO.File.Exists(fileSavePath))
                    {
                        file = "rte" + x + "-" + fileName;
                        fileSavePath = Path.Combine(fileSave, file);
                        x++;
                    }
                    if (!System.IO.File.Exists(fileSavePath))
                    {
                        httpPostedFile.SaveAs(fileSavePath);
                        HttpResponse Response = System.Web.HttpContext.Current.Response;
                        Response.Clear();
                        Response.Headers.Add("name", file);
                        Response.ContentType = "application/json; charset=utf-8";
                        Response.StatusDescription = "File uploaded successfully";
                        Response.Headers.Add("url", fileSavePath);
                        Response.End();
                    }
                }
            }
            catch (Exception e)
            {
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 204;
                Response.Status = "204 No Content";
                Response.StatusDescription = e.Message;
                Response.End();
            }
        }
```
