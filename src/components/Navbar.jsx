import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css"


export default function Navbar() {
  return (
    <nav>
      <h1>Example Navbar content</h1>
      <Link to={"/"}>Home |</Link>
      <NavLink to={"/"} className={({isActive}) => {return isActive? "active": "" }}> Home |</NavLink>
      <NavLink to={"/about"} className={({isActive}) => {return isActive? "active": "" }}>About Me |</NavLink>
      <NavLink to={"/contact"} className={({isActive}) => {return isActive? "active": "" }}>Contact Me |</NavLink>
    </nav>
  );
}
