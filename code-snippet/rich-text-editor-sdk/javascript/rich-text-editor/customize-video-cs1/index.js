var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['Video']
    },
    quickToolbarSettings: {
        showOnRightClick: true,
        video: ['VideoReplace', 'VideoAlign', 'VideoRemove', 'VideoLayoutOption', 'VideoDimension']
    },
    value: `<p><b>Get started with Quick Toolbar to click on a video</b></p>
    <p>Using the quick toolbar, users can replace, align, display, dimension, and delete the selected video.</p>
    <p><video controls style="width: 30%;">
        <source
          src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Ocean-Waves.mp4"
          type="video/mp4" />
      </video></p> `
});
editor.appendTo('#editor');