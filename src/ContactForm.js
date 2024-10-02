import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './styles.css'; // Import external CSS for styling

function ContactForm() {
  const [state, handleSubmit] = useForm("mvgpynvo");

  if (state.succeeded) {
    return <p className="success-message">Thank you for your message! We will get back to you shortly.</p>;
  }

  return (
    <div className="contact-section">
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Write your message"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="error-message"
          />
        </div>

        <button type="submit" className="submit-button" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {/* Map Section */}
      <div className="map-container">
      <iframe
    title="Office Location - Dubai"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115607.68494963725!2d55.02725090704712!3d25.276987224273076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434d0761f18f%3A0x452ca6a6f9b1995d!2sDubai!5e0!3m2!1sen!2sae!4v1694463895449!5m2!1sen!2sae"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

    </div>
  );
}

export default ContactForm;
