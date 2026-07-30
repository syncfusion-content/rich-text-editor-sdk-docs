var blocksData = [
    {
        blockType: 'Template',
        template: '<div class="notification-card">' +
            '<div class="notification-header">' +
                '<span class="notification-icon">📢</span>' +
                '<h3 class="notification-title">Important Announcement</h3>' +
            '</div>' +
            '<div class="notification-content">' +
                '<p>The system will be undergoing maintenance on Saturday from 2:00 AM to 4:00 AM.</p>' +
                '<p>Please save your work before this time to prevent any data loss.</p>' +
            '</div>' +
        '</div>'
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
