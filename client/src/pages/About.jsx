
import '../assets/Wrappers/About.css';
import image from '../../public/people.jpg'

const About = () => {
  
 
  return (
    <div className="about-page">
      <h2>OUR MISSION</h2>
      <h3>Making commerce better for everyone</h3>
      <p className='about-p-1'>
        We help people achieve independence by making it easier to start,
        run, and grow a business.We believe the future of commerce has more voices, not fewer, so we're reducing the barriers to business ownership to make commerce better for everyone.
      </p>
      <div className='page-info'>
      <h2 className='info-h2'>OUR PEOPLE</h2>
      <h3 className='info-h3'>Creating a community for impact</h3>
      <p className='about-p-2'>
         Shopify has grown from 5 people in a coffee shop to over 5,000 across the globe.
         With over 1,000,000 businesses powered by Shopify, we care deeply about the work we do. 
         We're constant learners who thrive on change and seek to have an impact in everything we do.
      </p>
      </div>
      <div className='about-image-div'>
            <img src={image} alt='photo' className='about-image'></img>
          </div>
    </div>
  );
};

export default About;
