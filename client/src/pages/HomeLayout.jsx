
import '../assets/Wrappers/HomeLayout.css'
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (<>
       <Navbar/>
      <Outlet/>
  </>
    
  );
}
export default HomeLayout