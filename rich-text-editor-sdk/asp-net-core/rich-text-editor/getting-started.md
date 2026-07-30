---
layout: post
title: Getting Started with ASP.NET Core Rich Text Editor | Syncfusion
description: Check out and learn about getting started with ASP.NET Core Rich Text Editor control of Essential JS 2 and more details.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-rich-text-editor"
platform: ej2-asp-core-mvc
control: Rich Text Editor
publishingplatform: ##Platform_Name##
documentation: ug
---

# Getting Started with ASP.NET Core Rich Text Editor Control

The [ASP.NET Core Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-rich-text-editor) is a WYSIWYG (What You See Is What You Get) editor that enables users to create, edit, and format rich text content with features like multimedia insertion, lists, and links. This section briefly explains about how to include [ASP.NET Core Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-rich-text-editor) control in your ASP.NET Core application using [Visual Studio](https://visualstudio.microsoft.com/vs/).

> **Ready to streamline your ASP.NET Core development?** Discover the full potential of ASP.NET Core controls with AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like Visual Studio, Visual Studio Code, Cursor, CodeStudio and more. [Explore AI Coding Assistant](https://ej2.syncfusion.com/aspnetcore/documentation/ai-coding-assistant/overview)

To get started quickly with ASP.NET Core Rich Text Editor, you can check on this video:

{% youtube "youtube:https://www.youtube.com/watch?v=lEyINv1RGu8" %}

## Create an ASP.NET Core Web App with Razor Pages

{% tabcontents %}

{% tabcontent Visual Studio %}

Create an **ASP.NET Core Web App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0&tabs=visual-studio#create-a-razor-pages-web-app) or the [Syncfusion® ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-integration/create-project). For detailed instructions, refer to the [ASP.NET Core Web App Getting Started](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/razor-pages) documentation.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Run the following command to create a new ASP.NET Core Web App.

{% tabs %}
{% highlight C# tabtitle="Terminal" %}

dotnet new webapp -o RazorPagesMovie
code -r RazorPagesMovie

{% endhighlight %}
{% endtabs %}

Alternatively, create an **ASP.NET Core Web App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-8.0&tabs=visual-studio-code#create-a-razor-pages-web-app), or the [Syncfusion® ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-code-integration/create-project), or the [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) extension.

{% endtabcontent %}

{% endtabcontents %}

## Install the required ASP.NET Core packages

Install [Syncfusion.AspNetCore.RichTextEditor](https://www.nuget.org/packages/Syncfusion.AspNetCore.RichTextEditor/) and [Syncfusion.AspNetCore.Themes](https://www.nuget.org/packages/Syncfusion.AspNetCore.Themes/) NuGet packages. All Syncfusion ASP.NET Core packages are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.EJ2). See the [NuGet packages](https://ej2.syncfusion.com/aspnetcore/documentation/nuget-packages) topic for the details.

{% tabcontents %}

{% tabcontent Visual Studio %}

1. Go to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*.
2. Search the required NuGet package (`Syncfusion.AspNetCore.RichTextEditor` and `Syncfusion.AspNetCore.Themes` ) and install them.

Alternatively, you can install the same packages using the Package Manager Console with the following commands.

{% tabs %}
{% highlight C# tabtitle="Package Manager Console" %}

Install-Package Syncfusion.AspNetCore.RichTextEditor -Version {{ site.releaseversion }}
Install-Package Syncfusion.AspNetCore.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following commands.

{% tabs %}
{% highlight C# tabtitle="Terminal" %}

dotnet add package Syncfusion.AspNetCore.RichTextEditor --version {{ site.releaseversion }}
dotnet add package Syncfusion.AspNetCore.Themes -Version --version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Add the ASP.NET Core Tag Helpers

After the packages are installed, open the **~/Pages/_ViewImports.cshtml** file and import the `Syncfusion.AspNetCore.Base` and `Syncfusion.AspNetCore.RichTextEditor` Tag Helpers.

{% tabs %}
{% highlight cshtml tabtitle="_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.AspNetCore.Base
@addTagHelper *, Syncfusion.AspNetCore.RichTextEditor

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be referenced from [CDN](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme#cdn-reference). Include the [stylesheet](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) and [script references](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) inside the `<head>` of **~/Pages/Shared/_Layout.cshtml** 

{% tabs %}
{% highlight cshtml tabtitle="_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET Core controls styles -->
    <link rel="stylesheet" href="_content/Syncfusion.AspNetCore.Themes/styles/fluent2.css" />
    <!-- Syncfusion ASP.NET Core controls scripts -->
    <script src="_content/Syncfusion.AspNetCore.RichTextEditor/scripts/sf-rich-text-editor.min.js"></script>
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

## Add ASP.NET Core Rich Text Editor control

Add the [ASP.NET Core Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-rich-text-editor) control in the **~/Pages/Index.cshtml** file.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

<ejs-richtexteditor id="editor"></ejs-richtexteditor>

{% endhighlight %}
{% endtabs %}

I> When the Rich Text Editor control is rendered, the `id` attribute must be provided; otherwise, the control will fail to render.

## Run the application

{% tabcontents %}

{% tabcontent Visual Studio %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The [ASP.NET Core Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/aspnet-core-rich-text-editor) control will render in your default web browser.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following command.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet run

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

![ASP.NET Core Rich Text Editor Control](/images/richtexteditor-control.webp)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/RichTextEditor/ASP.NET%20Core%20Tag%20Helper%20Examples).

## See Also

1. [Getting Started with ASP.NET Core using Razor Pages](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/razor-pages)
2. [Getting Started with ASP.NET Core MVC using Tag Helper](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/aspnet-core-mvc-taghelper)
3. [Blog posting using Rich Text Editor](https://ej2.syncfusion.com/aspnetcore/RichTextEditor/Forums#/bootstrap5)
4. [How to change the editor type](https://ej2.syncfusion.com/aspnetcore/documentation/rich-text-editor/editor-types/editor-mode)
5. [How to render the iframe](https://ej2.syncfusion.com/aspnetcore/documentation/rich-text-editor/editor-types/iframe)
6. [Accessibility in Rich text editor](https://ej2.syncfusion.com/aspnetcore/documentation/rich-text-editor/accessibility)
7. [Keyboard support in Rich text editor](https://ej2.syncfusion.com/aspnetcore/documentation/rich-text-editor/keyboard-support)
8. [Globalization in Rich text editor](https://ej2.syncfusion.com/aspnetcore/documentation/rich-text-editor/globalization)
