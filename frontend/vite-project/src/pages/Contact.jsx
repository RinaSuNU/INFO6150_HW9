import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <a href="mailto:info@jobconnect.example.com">Email: info@jobconnect.example.com</a><br />
        <a href="tel:+15551234567">Phone: +1 (555) 123-4567</a>
        <p>Address: 123 Career Lane, Tech City, TC 10101</p>
      </div>

      <div className="contact-hours">
        <h2>Office Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 3:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contact;