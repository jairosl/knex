const nodemailer = require('nodemailer');

export default (request, response) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'knex.org@gmail.com',
            pass: '9IqJi510uo19'
        }
    });

    const mailOptions = {
        from: 'knex.org@gmail.com',
        to: 'marcio.knex@gmail.com',
        bcc: 'knex.org@gmail.com; samuel.knex@gmail.com',
        subject: 'Possivel cliente: teste',
        html: `
        <h1> Contato</h1>
        <p>
          <strong>Nome: </strong> <br/>
          <strong>Email: </strong> <br/>
          <strong>Assunto: </strong> <br/>
          <strong>Menssagem: </strong> <br/>
        </p>
      `
    };

    try {
        const result = transporter.sendMail(mailOptions);
        if (!result.reject) {
            response.status(200).json({ message: 'mensagem enviada com sucesso' });
        } else {
            response.status(500).json({ message: 'ops... houve um erro' });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
