var editor = new ej.richtexteditor.RichTextEditor({
  value: `
     
<table style="width:100%; border-collapse: collapse;" border="1">
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
</table>
`,
  height: 300,
});
editor.appendTo('#editor');

document.getElementById('btn').onclick = function () {
  var panel = editor.contentModule.getEditPanel();
  var cells = panel.querySelectorAll('td');

  if (cells.length > 2) {
    var cell = cells[2]; // Third cell
    var range = document.createRange();
    range.selectNode(cell); // Logical selection

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    cell.style.backgroundColor = '#cce5ff';
    // Add Syncfusion's selection class for visual consistency
    cell.classList.add('e-cell-select');
  }
};
