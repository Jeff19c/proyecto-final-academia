import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../img/IL-logo.svg";


const Navbar = () =>{
    const [menuOpen,setMenuOpen] = useState(false)

    return(
        <div>
            <nav>
                <Link to="/"><img className="logo" src={logo} alt="Integra López" /></Link>
                <div className="menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ?  "open" : ""}>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="Blog">Blog</NavLink></li>
                    <li><NavLink to="Productos" ><div className="align-v"><div className="align-v">Productos<SearchIcon sx={{marginLeft:"12px"}}/></div></div> </NavLink> </li>
                    <li><NavLink to="Login" className="btn-2 align-h">Iniciar sesión </NavLink> </li>
                </ul>
            </nav>
            <div className="gradiente"> </div>
        </div>


    );

};

export default Navbar;