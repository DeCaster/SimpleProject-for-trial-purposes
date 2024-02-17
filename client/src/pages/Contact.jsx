// Contact.js
import { Link} from "react-router-dom";
import ContactForm from '../components/ContactForm'; // Adjust the path as necessary
import '../assets/Wrappers/Contact.css';

const Contact = () => {
  
  const handleFormSend = () => {

    const emailAddress = 'ornekmailgir@mail.com';
    const subject = encodeURIComponent('Destek Talebi');
    const emailBody = encodeURIComponent('Merhaba, destek ekibinizle iletişime geçmek istiyorum. Sorum şudur: ');

    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className='contact-page'>
      <div className='contact-info'>
        <h4>Contact Us</h4>
        <h5>Questions, bug reports, feedback, feature request - we are here for it all.</h5>
        <p>Already use it? <Link to='/register' className='link'>Sign in</Link> so we can tailor your support experience. If that's not possible, we would still like to hear from you.</p>
      </div>
      <ContactForm
        email="Enter your email address"
        subject="Enter the subject"
        message="How can we help you?"
        onSend={handleFormSend}
        privacyPolicyLink="https://policies.google.com/privacy?hl=en-US"
      />
    </div>
  );
};

export default Contact;
