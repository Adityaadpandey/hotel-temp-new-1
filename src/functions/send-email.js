const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  sgMail.setApiKey("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");

  const msg = {
    to: 'adityapandeyadp@example.com',
    from: email,
    subject: `New message from ${name} (${email})`,
    text: message,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: 'Email sent successfully',
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error sending email',
    };
  }
};

