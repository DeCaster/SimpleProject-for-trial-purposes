import { useState } from "react";
import '../assets/Wrappers/HomeLayout.css'
const HomePage = () => {
  const [isTextV,setIsTextV] = useState(false);
  const toggleTextbox = () => {
    setIsTextV(!isTextV);
  };
  return (
    <div className="app">
    <div className="icerik">
      <div className="icerik-image">
        <img src="../../public/all.jpg" className="all-image"/>
        </div>
    <div className="icerik-p">
      <h2 className="home-h2">Neden Bunu Sadece sen becere bilirsin?</h2>
      <p className="home-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptatum, ratione magni distinctio assumenda 
        laborum sapiente ea id non illum aliquid doloremque saepe quasi. Non nisi voluptatem totam minima fugit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptatum, ratione magni distinctio assumenda 
        laborum sapiente ea id non illum aliquid doloremque saepe quasi. Non nisi voluptatem totam minima fugit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptatum, ratione magni distinctio assumenda 
        laborum sapiente ea id non illum aliquid doloremque saepe quasi. Non nisi voluptatem totam minima fugit?</p>
        <button className="btn-home" onClick={toggleTextbox}>Soru Sor</button>
    {isTextV && (
      <textarea className="yazmaKutusu" placeholder='Istedigin seyi gire bilirsin..'></textarea>
    )}
        </div>
        
  </div>
  </div>
  )
}

export default HomePage