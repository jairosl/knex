import { ApiRequest } from '../../utils/api/validation';

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

export default async (request, response) => {
    const { name, subject, email, contact } = request.body;

    try {
        ApiRequest.validateSync(request.body, { abortEarly: false });
        const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

        sendSmtpEmail.subject = 'Possível Cliente: {{params.name}}';
        sendSmtpEmail.htmlContent = `
          <html>
              <body>
                  <p>Email: {{params.email}}</p>

                  <p>Assunto: {{params.subject}}</p>

                  <p>Contato: {{params.contact}}</p>

              </body>
          </html>`;
        sendSmtpEmail.sender = { name: 'site Knex', email: 'knex.org@gmail.com' };
        sendSmtpEmail.to = [{ email: 'knex.org@gmail.com', name: 'Knex' }];
        sendSmtpEmail.cc = [{ email: 'jairosoareslima@gamil.com', name: 'Jairo' }];
        sendSmtpEmail.params = {
            name: name,
            subject: subject,
            email: email,
            contact: contact
        };

        try {
            const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
            response.json({ 'API called successfully. Returned data: ': data });
        } catch (e) {
            console.error(e);
            response.status(400);
        }
    } catch (e) {
        response.status(400).json({ error: e.errors });
    }
};
