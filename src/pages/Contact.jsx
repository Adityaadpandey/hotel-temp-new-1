import React, { useState } from "react";
import "../styles/Contact.css";

const initialFormData = {
  name: "",
  // email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      // send form data to server
      console.log("Form submitted:", formData);
      setFormData(initialFormData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!isValidPhone(data.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <div className="error">{errors.message}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;

