
const ContactForm = ({ email, subject, message, onSend, privacyPolicyLink }) => {
  return (
    <div className="contact-form">
      <form>
        <div className="form-group">
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" placeholder={email} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder={subject} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" placeholder={message} required></textarea>
        </div>
        <button type="button" onClick={onSend}>Send</button>
      </form>
      <div className="privacy-policy">
        <a href={privacyPolicyLink} target="blank">Privacy Policy</a>
      </div>
    </div>
  );
};

export default ContactForm;
