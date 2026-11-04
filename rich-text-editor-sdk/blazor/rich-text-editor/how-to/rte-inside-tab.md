---
layout: post
title: Render Blazor Rich Text Editor inside Tab Component | Syncfusion®
description: Learn how to render multiple Blazor Rich Text Editor instances inside a Tab component with toolbar configuration and content editing support.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Render Blazor Rich Text Editor inside the Tab Component

Integrating the Blazor Rich Text Editor within the [Tab](https://blazor.syncfusion.com/documentation/tabs/getting-started) component provides a versatile and organized user interface for text formatting and content creation across multiple tabs. Each tab item can host a dedicated editor instance configured with its own toolbar options, enabling users to effortlessly manipulate text styles, apply formatting, insert media, and manage content layout.

## Prerequisites

To render the Rich Text Editor inside the Tab component, add the `Syncfusion.Blazor.RichTextEditor` and `Syncfusion.Blazor.Navigations` namespaces to the `~/_Imports.razor` file.

```cshtml

@using Syncfusion.Blazor.RichTextEditor
@using Syncfusion.Blazor.Navigations

```

## Configure the Tab with the Rich Text Editor

Initialize the `SfTab` component and render a `SfRichTextEditor` in the `ContentTemplate` of each `TabItem`. Configure the editor toolbar items using the `Items` field of the `RichTextEditorToolbarSettings` tag.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.RichTextEditor
@using Syncfusion.Blazor.Navigations

<SfTab HeightAdjustMode="HeightAdjustMode.Auto">
    <TabItems>
        <TabItem>
            <ChildContent>
                <TabHeader Text="TAB 1"></TabHeader>
            </ChildContent>
            <ContentTemplate>
                <SfRichTextEditor>
                    <RichTextEditorToolbarSettings Items="@Tools" />
                    <p>The Rich Text Editor component is a WYSIWYG editor that provides the best user experience to create and update the content.</p>
                </SfRichTextEditor>
            </ContentTemplate>
        </TabItem>
        <TabItem>
            <ChildContent>
                <TabHeader Text="TAB 2"></TabHeader>
            </ChildContent>
            <ContentTemplate>
                <SfRichTextEditor>
                    <RichTextEditorToolbarSettings Items="@Tools" />
                    <p>Users can format their content using standard toolbar commands.</p>
                </SfRichTextEditor>
            </ContentTemplate>
        </TabItem>
        <TabItem>
            <ChildContent>
                <TabHeader Text="TAB 3"></TabHeader>
            </ChildContent>
            <ContentTemplate>
                <SfRichTextEditor>
                    <RichTextEditorToolbarSettings Items="@Tools" />
                    <p>The editor supports formatting, image insertion, and link management within each tab.</p>
                </SfRichTextEditor>
            </ContentTemplate>
        </TabItem>
    </TabItems>
</SfTab>

@code {
    private List<ToolbarItemModel> Tools = new List<ToolbarItemModel>()
    {
        new ToolbarItemModel() { Command = ToolbarCommand.Bold },
        new ToolbarItemModel() { Command = ToolbarCommand.Italic },
        new ToolbarItemModel() { Command = ToolbarCommand.Underline },
        new ToolbarItemModel() { Command = ToolbarCommand.StrikeThrough },
        new ToolbarItemModel() { Command = ToolbarCommand.Separator },
        new ToolbarItemModel() { Command = ToolbarCommand.FontName },
        new ToolbarItemModel() { Command = ToolbarCommand.FontSize },
        new ToolbarItemModel() { Command = ToolbarCommand.FontColor },
        new ToolbarItemModel() { Command = ToolbarCommand.BackgroundColor },
        new ToolbarItemModel() { Command = ToolbarCommand.LowerCase },
        new ToolbarItemModel() { Command = ToolbarCommand.UpperCase },
        new ToolbarItemModel() { Command = ToolbarCommand.Separator },
        new ToolbarItemModel() { Command = ToolbarCommand.Formats },
        new ToolbarItemModel() { Command = ToolbarCommand.Alignments },
        new ToolbarItemModel() { Command = ToolbarCommand.OrderedList },
        new ToolbarItemModel() { Command = ToolbarCommand.UnorderedList },
        new ToolbarItemModel() { Command = ToolbarCommand.Outdent },
        new ToolbarItemModel() { Command = ToolbarCommand.Indent },
        new ToolbarItemModel() { Command = ToolbarCommand.Separator },
        new ToolbarItemModel() { Command = ToolbarCommand.CreateLink },
        new ToolbarItemModel() { Command = ToolbarCommand.Image },
        new ToolbarItemModel() { Command = ToolbarCommand.Separator },
        new ToolbarItemModel() { Command = ToolbarCommand.ClearFormat },
        new ToolbarItemModel() { Command = ToolbarCommand.Print },
        new ToolbarItemModel() { Command = ToolbarCommand.SourceCode },
        new ToolbarItemModel() { Command = ToolbarCommand.FullScreen },
        new ToolbarItemModel() { Command = ToolbarCommand.Separator },
        new ToolbarItemModel() { Command = ToolbarCommand.Undo },
        new ToolbarItemModel() { Command = ToolbarCommand.Redo }
    };
}

{% endhighlight %}
{% endtabs %}

## Lifecycle considerations

When the Rich Text Editor is rendered inside a Tab item that is initially hidden, the editor toolbar does not get the proper offset width and may render above the edit area container. To resolve this, call the [RefreshUIAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.RichTextEditor.SfRichTextEditor.html#Syncfusion_Blazor_RichTextEditor_SfRichTextEditor_RefreshUIAsync) method of the Rich Text Editor in the [Tab Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Navigations.TabEvents.html#Syncfusion_Blazor_Navigations_TabEvents_Created) event or when the tab item becomes visible, so that the editor recalculates its layout.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.RichTextEditor
@using Syncfusion.Blazor.Navigations

<SfTab>
    <TabEvents Created="@TabCreated"></TabEvents>
    <TabItems>
        <TabItem>
            <ChildContent>
                <TabHeader Text="TAB 1"></TabHeader>
            </ChildContent>
            <ContentTemplate>
                <SfRichTextEditor @ref="RteObj">
                </SfRichTextEditor>
            </ContentTemplate>
        </TabItem>
    </TabItems>
</SfTab>

@code {
    SfRichTextEditor RteObj;

    private async Task TabCreated()
    {
        await this.RteObj.RefreshUIAsync();
    }
}

{% endhighlight %}
{% endtabs %}

## See also

* [Getting Started with Blazor Tabs Component](https://blazor.syncfusion.com/documentation/tabs/getting-started)
* [Render Blazor Rich Text Editor inside Dialog Component](https://help.syncfusion.com/rich-text-editor-sdk/blazor/rich-text-editor/how-to/rte-inside-dialog)