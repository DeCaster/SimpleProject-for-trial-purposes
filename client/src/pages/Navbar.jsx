import '../assets/Wrappers/HomeLayout.css'
import '../assets/Wrappers/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <a href='/home'>Anasayfa</a>
        <a href="/login" className="login">Login</a>
        <a href="/contact">İletişim</a>
        <a href="/about">Hakkında</a>
      </div>
  )
}

export default Navbar