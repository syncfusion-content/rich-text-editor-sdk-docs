---
layout: post
title: HttpClient Instance in Blazor Rich Text Editor | Syncfusion®
description: Learn how to configure and use HttpClient instance in Blazor Rich Text Editor for HTTP requests and much more details.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
---

# HttpClientInstance in Blazor Rich Text Editor

The Rich Text Editor component in Blazor enables you to use the [HttpClientInstance](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.RichTextEditor.SfRichTextEditor.html#Syncfusion_Blazor_RichTextEditor_SfRichTextEditor_HttpClientInstance) property to apply a custom `HttpClient` instance to all file upload and download requests. This provides flexibility in managing authentication and custom request configurations for Word Import, Word and PDF Export, and image, audio, and video insertions.

The following example illustrates how to configure the Rich Text Editor component with a custom `HttpClient` in a Blazor application.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.RichTextEditor
@inject HttpClient httpClient

<SfRichTextEditor HttpClientInstance="@httpClient">
    <RichTextEditorImageSettings SaveUrl="https://your_api.com/upload/image" />
    <RichTextEditorAudioSettings SaveUrl="https://your_api.com/upload/audio" />
    <RichTextEditorVideoSettings SaveUrl="https://your_api.com/upload/video" />
</SfRichTextEditor>

@code {
    protected override async Task OnInitializedAsync()
    {
        // Adding authorization header to HTTP client
        httpClient.DefaultRequestHeaders.Add("Authorization_1", "syncfusion");
        await base.OnInitializedAsync();
    }
}

{% endhighlight %}
{% endtabs %}

## Program.cs

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();
builder.Services.AddSyncfusionBlazor();
builder.Services.AddScoped(sp =>
{
    var httpClient = new HttpClient
    {
        BaseAddress = new Uri("https://your_api.com/")
    };

    // Add custom header
    httpClient.DefaultRequestHeaders.Add("Custom-Header", "YourCustomValue");
    return httpClient;
});

var app = builder.Build();

{% endhighlight %}
{% endtabs %}

## See also

* [Import and Export Content](./import-export)
* [Images](./image)
* [Video](./video) (Blazor)
* [Audio](./audio) (Blazor)