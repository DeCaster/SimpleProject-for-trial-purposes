import { Link, useRouteError } from "react-router-dom";
import '../assets/Wrappers/ErrorPage.css';
import image from '../../public/error.jpg'
const Error = () => {
  const error = useRouteError();
  console.log(error)
  
    return (
      <div className="error-container">
        <img src={image}/>
        <h1>Oops!</h1>
        <h2>We can't seem to find the page you're looking for.</h2>
        <p className="error-details">Error code: {error.status} - {error.statusText || "Page Not Found"}</p>
        <Link to="/" className="home-link">Back to Home</Link>
      </div>
    );
};

export default Error;
