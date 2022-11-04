import React from "react";

const Contact = () => {
  return (
    <div className="container contact-container">
      <div class="contact-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>
      </div>
      <form className="form">
        <div className="items">
          <div className="input-items">
            <label htmlFor="first_name" className="input-item-label">First name</label>
            <input className="input-item" id="first_name" placeholder="Enter your first name" />
          </div>

          <div className="input-items">
            <label htmlFor="last_name" className="input-item-label">Last name</label>
            <input className="input-item" id="last_name" placeholder="Enter your last name" />
          </div>
        </div>

        <div className="input-items">
          <label htmlFor="email" className="input-item-label">Email</label>
          <input type="email" id="email" className="input-item" placeholder="yourname@email.com" />
        </div>

        <div className="input-items">
          <label htmlFor="message" className="input-item-label">Message</label>
          <textarea
            className="textArea" id="message"
            cols="7"
            rows="7"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div className="text-description">
          <input type="checkbox" />
          <label>
            You agree to providing your data to Ogbonna Ifeanyi who may contact you
          </label>
        </div>
        <button className="btn btn-contact" type="submit" id="btn__submit">Send message</button>
      </form>
    </div>
  );
};

export default Contact;
