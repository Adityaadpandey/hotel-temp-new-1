import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Contact.css";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/send-email', {
        name,
        email,
        message,
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError('Error sending email. Please try again later.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Email sent successfully</div>}
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
