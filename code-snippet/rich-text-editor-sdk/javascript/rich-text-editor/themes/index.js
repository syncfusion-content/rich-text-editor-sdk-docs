var rte = new ej.richtexteditor.RichTextEditor({
    cssClass: 'custom'
});
rte.appendTo('#defaultRTE');

document.getElementById('themeSelect').addEventListener('change', function (e) {
    var theme = e.target.value;

    if (theme === 'default') {
        rte.cssClass = 'custom';
    } else {
        rte.cssClass = 'custom ' + theme;
    }

    rte.dataBind();
});
