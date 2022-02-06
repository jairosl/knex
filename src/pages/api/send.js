var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey =
    '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';

export default async (request, response) => {
    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail.subject = 'My {{params.subject}}';
    sendSmtpEmail.htmlContent =
        '<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>';
    sendSmtpEmail.sender = { name: 'John Doe', email: 'example@example.com' };
    sendSmtpEmail.to = [{ email: 'jairosoareslima@gmail.com', name: 'Jane Doe' }];
    sendSmtpEmail.cc = [{ email: 'example2@example2.com', name: 'Janice Doe' }];
    // sendSmtpEmail.bcc = [{ email: 'John Doe', name: 'jairosoareslima@gamil.com' }];
    sendSmtpEmail.params = { parameter: 'jairo', subject: 'teste' };

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        response.json({ 'API called successfully. Returned data: ': data });
    } catch (e) {
        console.error(e);
        response.status(400);
    }
};
