import {RichTextEditor,Toolbar,Link,Image,HtmlEditor,QuickToolbar} from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
  value: `<table style="width:100%; border-collapse: collapse;" border="1">
<thead>
  <tr>
    <th style="font-weight:bold; padding:8px;">Product</th>
    <th style="font-weight:bold; padding:8px;">Price</th>
    <th style="font-weight:bold; padding:8px;">Stock</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style="padding:8px;">Product A</td>
    <td style="padding:8px;">$25</td>
    <td style="padding:8px;">Available</td>
  </tr>
  <tr>
    <td style="padding:8px;">Product B</td>
    <td style="padding:8px;">$40</td>
    <td style="padding:8px;">Out of Stock</td>
  </tr>
</tbody>
</table>`,
});
editor.appendTo('#editor');

document.getElementById('btn').onclick = function () {
  const panel: HTMLElement = editor.contentModule.getEditPanel() as HTMLElement;
  const cells: NodeListOf<HTMLTableCellElement> = panel.querySelectorAll('td');

  if (cells.length > 0) {
    const cell: HTMLTableCellElement = cells[0]; // First cell
    const range: Range = document.createRange();
    range.selectNode(cell); // Logical selection of entire cell

    const selection: Selection | null = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
    cell.style.backgroundColor = '#cce5ff';
    // Add Syncfusion's selection class for visual consistency
    cell.classList.add('e-cell-select');
  }
};
