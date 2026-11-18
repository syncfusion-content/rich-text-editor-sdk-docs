---
layout: post
title: Localization in .NET MAUI RichTextEditor control | Syncfusion®
description: Learn here all about Localization feature of Syncfusion® .NET MAUI RichTextEditor (SfRichTextEditor) control and its elements, and more.
platform: MAUI
control: SfRichTextEditor
documentation: ug
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Localization in .NET MAUI RichTextEditor

`Localization` is the process of translating the application resources into different languages for specific cultures. The [SfRichTextEditor](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.RichTextEditor.SfRichTextEditor.html?tabs=tabid-11) can be localized by adding a `resource` file. The `SfRichTextEditor` allows you to localize the following built-in strings to suit your application’s language and culture:

<table>
<tr>
    <td> <b> Name </b> <br/><br/></td>
    <td> <b> Value </b> <br/><br/></td>
</tr>
<tr>
    <td> UpperCase<br/><br/></td>
    <td> UPPERCASE<br/><br/></td>
</tr>
<tr>
    <td> LowerCase<br/><br/></td>
    <td> lowercase<br/><br/></td>
</tr>
<tr>
    <td> InsertTable<br/><br/></td>
    <td> Insert Table<br/><br/></td>
</tr>
<tr>
    <td> TableDimensions<br/><br/></td>
    <td> Table<br/><br/></td>
</tr>
<tr>
    <td> NumberOfColumns<br/><br/></td>
    <td> Number of columns<br/><br/></td>
</tr>
<tr>
    <td> NumberOfRows<br/><br/></td>
    <td> Number of rows<br/><br/></td>
</tr>
<tr>
    <td> Cancel<br/><br/></td>
    <td> Cancel<br/><br/></td>
</tr>
<tr>
    <td> Insert<br/><br/></td>
    <td> Insert<br/><br/></td>
</tr>
<tr>
    <td> InsertLink<br/><br/></td>
    <td> Insert Link<br/><br/></td>
</tr>
<tr>
    <td> EditLink<br/><br/></td>
    <td> Edit Link<br/><br/></td>
</tr>
<tr>
    <td> Update<br/><br/></td>
    <td> Update<br/><br/></td>
</tr>
<tr>
    <td> EnterDisplayText<br/><br/></td>
    <td> Enter the display text<br/><br/></td>
</tr>
<tr>
    <td> EnterURL<br/><br/></td>
    <td> Enter URL<br/><br/></td>
</tr>
<tr>
    <td> BulletListDisc<br/><br/></td>
    <td> Disc<br/><br/></td>
</tr>
<tr>
    <td> BulletListCircle<br/><br/></td>
    <td> Circle<br/><br/></td>
</tr>
<tr>
    <td> BulletListSquare<br/><br/></td>
    <td> Square<br/><br/></td>
</tr>
<tr>
    <td> NumberedListDecimal<br/><br/></td>
    <td> Decimal<br/><br/></td>
</tr>
<tr>
    <td> NumberedListLowerAlpha<br/><br/></td>
    <td> Lower Alpha<br/><br/></td>
</tr>
<tr>
    <td> NumberedListUpperAlpha<br/><br/></td>
    <td> Upper Alpha<br/><br/></td>
</tr>
<tr>
    <td> NumberedListLowerRoman<br/><br/></td>
    <td> Lower Roman<br/><br/></td>
</tr>
<tr>
    <td> NumberedListUpperRoman<br/><br/></td>
    <td> Upper Roman<br/><br/></td>
</tr>
<tr>
    <td> NumberedListLowerGreek<br/><br/></td>
    <td> Lower Greek<br/><br/></td>
</tr>
<tr>
    <td> AlignLeft<br/><br/></td>
    <td> Align Left<br/><br/></td>
</tr>
<tr>
    <td> AlignCenter<br/><br/></td>
    <td> Align Center<br/><br/></td>
</tr>
<tr>
    <td> AlignRight<br/><br/></td>
    <td> Align Right<br/><br/></td>
</tr>
<tr>
    <td> AlignJustify<br/><br/></td>
    <td> Justify<br/><br/></td>
</tr>
<tr>
    <td> Paragraph<br/><br/></td>
    <td> Paragraph<br/><br/></td>
</tr>
<tr>
    <td> Heading1<br/><br/></td>
    <td> Heading 1<br/><br/></td>
</tr>
<tr>
    <td> Heading2<br/><br/></td>
    <td> Heading 2<br/><br/></td>
</tr>
<tr>
    <td> Heading3<br/><br/></td>
    <td> Heading 3<br/><br/></td>
</tr>
<tr>
    <td> Heading4<br/><br/></td>
    <td> Heading 4<br/><br/></td>
</tr>
</table>

## Setting CurrentUICulture to the application

Application culture can be changed by setting the `CurrentUICulture` in the `App.xaml.cs` file.

{% tabs %}
{% highlight c# tabtitle="App.xaml.cs" hl_lines="1 3 12 13" %}

using Syncfusion.Maui.RichTextEditor;
using System.Globalization;
using System.Resources;

namespace MauiRichTextEditor
{
   public partial class App : Application
   {
      public App()
      {
            InitializeComponent();             
            CultureInfo.CurrentUICulture = new CultureInfo("fr-FR");   
            SfRichTextEditorResources.ResourceManager = new ResourceManager("MauiRichTextEditor.Resources.SfRichTextEditor", Application.Current!.GetType().Assembly);
            MainPage = new MainPage();
      }
   }
}

{% endhighlight %}
{% endtabs %}

N> The required `resx` files with `Build Action` as `EmbeddedResource` (File name should contain culture code) into the `Resources` folder.

## Localize application level

To localize the `RichTextEditor` based on the `CurrentUICulture` using the `resource` files, follow these steps.

   1. Create a new folder named `Resources` in the application.

   2. Right-click on the `Resources` folder, select `Add`, then click on `NewItem`.

   3. In the Add New Item wizard, select the Resource File option and name the filename as `SfRichTextEditor.<culture name>.resx`. For example, give the name as `SfRichTextEditor.fr-FR.resx` for French culture.

   4. The culture name indicates the name of the language and country.

   ![Syncfusion .NET MAUI RichTextEditor Shows the name of resource file to be added](images/maui-richtexteditor-shows-the-name-of-resource-file-to-be-added.png)

   5. Now, select `Add` option to add the resource file in the **Resources** folder.

   ![Syncfusion .NET MAUI RichTextEditor Shows the added resource file for french language](images/maui-richtexteditor-shows-the-added-resource-file-for-french-language.png)

   6. Add the Name or Value pair in the Resource Designer of `SfRichTextEditor.fr-FR.resx` file and change its corresponding value to corresponding culture.

   ![Syncfusion .NET MAUI RichTextEditor Shows the added resource file name value pair in the resource designer](images/maui-richtexteditor-shows-the-added-resource-file-name-value-pair-in-the-resource-designer.png)

   ![Syncfusion .NET MAUI RichTextEditor Localized content](images/maui-richtexteditor-with-localized-content.png)
