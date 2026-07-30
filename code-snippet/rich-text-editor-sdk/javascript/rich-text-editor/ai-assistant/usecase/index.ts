import { RichTextEditor, Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant, AIAssistantPromptRequestArgs } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, HtmlEditor, Link, Image, QuickToolbar, AIAssistant);

const editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    value: `<p>Dear valued costumer,</p><p>We are writting to inform you that there has been a recent change to our policy’s which may effect your account. Please take a moment to review the detials below carefuly.</p><p>Starting from next monday, all user must update there personal information before accessing the system. Failure to do so may result in temporary suspension of you’re account, and loss of acces to certain feature.</p><p>If you have any question or concern, feel free to contact our support team at <a href="mailto:support@companyname.com">support@companyname.com</a> they are avalible 24/7 and happy help.</p><p>Thank you for you’re time and coorperation. We appologize for any inconvenient this may cause.</p><p>Best Regard,</p><p>Customer Support Team</p><p>Company Name</p>`,
    aiAssistantPromptRequest: (event: AIAssistantPromptRequestArgs): void => {
        setTimeout(() => {
            const aiResponse: string = `Dear Valued Customer,
We are writing to inform you that there has been a recent change to our policies that may affect your account. Please take a moment to review the details below carefully.
Starting next Monday, all users must update their personal information before accessing the system. Failure to do so may result in the temporary suspension of your account and loss of access to certain features.
If you have any questions or concerns, please feel free to contact our support team at [support@companyname.com](mailto:support@companyname.com). They are available 24/7 and happy to help.
Thank you for your time and cooperation. We apologize for any inconvenience this may cause.
Best regards,
Customer Support Team
Company Name
`;
            editor.addAIPromptResponse(aiResponse, false);
            editor.addAIPromptResponse(aiResponse, true);
        }, 300); // For demonstration purpose.
    },
});
editor.appendTo('#editor');

const proofBtn = document.getElementById('proofBtn');
if (proofBtn) {
    proofBtn.onclick = (e: Event) => {
        editor.showAIAssistantPopup();
        editor.executeAIPrompt('Proof read the editor content.');
    };
}