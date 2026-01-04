import React, { useState } from 'react';
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  const [formData, setFormData] = useState({
  name:'',
  email:'',
  message:''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
    setStatusMessage('');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Here you could send the data to a backend or service
    setStatusMessage(`Thanks ${formData.name}, your message has been sent!`);
    setFormData({ name: '', email: '', message: '' });
    alert("welcome you are successfully loged in")
  };

  return (
    <div id="contact" className="contact-section">
    {/* Left Side: Info */}
    <div className="contact-left">
    <h1>Let's Talk</h1>
    <p>We are currently available to take new projects, so feel free to contact us.</p>

    <div className="contact-details">
    <div className="contact-detail">
    <MdEmail />
    <p>Thinkacademy@gmail.com</p>
    </div>

    <div className="contact-detail">
    <IoMdContact />
    <p>+9205654910</p>
    </div>

    <div className="contact-detail">
    <CiLocationOn />
    <p>Noida Sector 142</p>
    </div>
    </div>
    </div>

    {/* Right Side: Form */}
    <form className="contact-right" onSubmit={handleSubmit}>
    <label htmlFor="name">Your Name</label>
    <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name"
    value={formData.name}
     onChange={handleChange}
    />

    <label htmlFor="email">Your Email</label>
    <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Write your message here</label>
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        />

        {error && <p className="error-message">{error}</p>}
        {statusMessage && <p className="success-message">{statusMessage}</p>}

        <button type="submit" className="contact-submit">Submit Now</button>
        </form>
        </div>
);
};

export default Contact;