const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config(); // Carga variables de entorno

const app = express();
app.use(express.json()); // Para parsear JSON

// ... tu código existente (rutas, static, etc.) ...

// Endpoint para contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Configurar transporter (aquí con Hotmail/Outlook, pero puedes cambiarlo)
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // Para Hotmail/Outlook
    port: 587,
    secure: false, // true para 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // a ti mismo
      subject: `Contacto desde CV - ${name}`,
      text: message,
      html: `
        <h3>Nuevo mensaje desde tu CV</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    res.json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});
