---
layout: post
title: Getting Started with ASP.NET Core Block Editor | Syncfusion
description: Learn how to get started with the ASP.NET Core Block Editor and explore setup, configuration, and core feature examples.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-block-editor"
platform: ej2-asp-core-mvc
control: Block Editor
documentation: ug
---

# Getting Started with ASP.NET Core Block Editor

This section explains how to add the [ASP.NET Core Block Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-block-editor) control to your ASP.NET Core application using [Visual Studio](https://visualstudio.microsoft.com/vs/).

**Prerequisites:**
- .NET 6.0 or later (compatible up to .NET 10.0)
- Visual Studio 2019 or later with ASP.NET and web development workload
- Basic familiarity with ASP.NET Core Razor Pages

> **AI Coding Assistant:** Discover the full potential of ASP.NET Core controls with AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions. [Explore AI Coding Assistant](https://ej2.syncfusion.com/aspnetcore/documentation/ai-coding-assistant/overview)

## Create an ASP.NET Core Web App with Razor pages

Create an **ASP.NET Core Web App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0&tabs=visual-studio#create-a-razor-pages-web-app) or the [Syncfusion® ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-integration/create-project). For detailed instructions, refer to the [ASP.NET Core Web App Getting Started](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/razor-pages) documentation.

## Install the required ASP.NET Core packages

To add the [ASP.NET Core Block Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-block-editor) control to your application, open the NuGet Package Manager in Visual Studio by going to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*. Search for and install the following packages:
- [Syncfusion.AspNetCore.BlockEditor](https://www.nuget.org/packages/Syncfusion.AspNetCore.BlockEditor/)
- [Syncfusion.AspNetCore.Themes](https://www.nuget.org/packages/Syncfusion.AspNetCore.Themes/)

All Syncfusion ASP.NET Core packages are available at [nuget.org](https://www.nuget.org/packages?q=syncfusion.EJ2). For more information, see the [NuGet packages](https://ej2.syncfusion.com/aspnetcore/documentation/nuget-packages) documentation.

**Note:** The version placeholder `{{ site.releaseversion }}` will be replaced with the actual version during documentation build. For the latest version, check the [release notes](https://ej2.syncfusion.com/aspnetcore/documentation/release-notes).

Alternatively, install the packages using the Package Manager Console:

{% tabs %}
{% highlight C# tabtitle="Package Manager Console" %}

Install-Package Syncfusion.AspNetCore.BlockEditor -Version {{ site.releaseversion }}
Install-Package Syncfusion.AspNetCore.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

## Add the ASP.NET Core Tag Helpers

After the packages are installed, open the **~/Pages/_ViewImports.cshtml** file and import the `Syncfusion.AspNetCore.Base` and `Syncfusion.AspNetCore.BlockEditor` Tag Helpers.

{% tabs %}
{% highlight cshtml tabtitle="_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.AspNetCore.Base
@addTagHelper *, Syncfusion.AspNetCore.BlockEditor

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be referenced from [CDN](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme#cdn-reference). Include the [stylesheet](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) and [script references](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) inside the `<head>` of **~/Pages/Shared/_Layout.cshtml** 

{% tabs %}
{% highlight cshtml tabtitle="_Layout.cshtml" %}

<head>
    ...
    <!-- ASP.NET Core controls styles -->
    <link rel="stylesheet" href="_content/Syncfusion.AspNetCore.Themes/styles/fluent2.css" />
    <!-- ASP.NET Core controls scripts -->
    <script src="_content/Syncfusion.AspNetCore.BlockEditor/scripts/sf-blockeditor.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Register the Script Manager

Open the **~/Pages/Shared/_Layout.cshtml** file and register the script manager `<ejs-scripts>` at the end of the `<body>` element as follows.

{% tabs %}
{% highlight cshtml tabtitle="_Layout.cshtml" %}

<body>
    ...
    <!-- ASP.NET Core Script Manager -->
    <ejs-scripts></ejs-scripts>
</body>

{% endhighlight %}
{% endtabs %}

## Add ASP.NET Core Block Editor control

Add the [ASP.NET Core Block Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-block-editor) control in the **~/Pages/Index.cshtml** file.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/getting-started/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/getting-started/gettingstarted.cs %}
{% endhighlight %}
{% endtabs %}

I> When the Block Editor control is rendered, the `id` attribute must be provided; otherwise, the control will fail to render.

## Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The [ASP.NET Core Block Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-block-editor) control will render in your default web browser.

![ASP.NET Core Block Editor Control](images/block-editor-control.webp)

## See Also

1. [Getting Started with ASP.NET Core using Razor Pages](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/razor-pages)
2. [Getting Started with ASP.NET Core MVC using Tag Helper](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/aspnet-core-mvc-taghelper)
