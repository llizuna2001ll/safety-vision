import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/Navbar.css";
import Header from "./Header";
import {Link} from "react-router-dom";

function Navbarr() {

    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("mynav");
        if (window.pageYOffset > 40) navbar.classList.add("sticky");
        else navbar.classList.remove("sticky");
    });


    return (
        <>
            <Header/>
            <Navbar id="mynav" className="navbar-style">
                <div className="nav_container">
                    <Navbar.Brand className="logo">IT-SYSTEM</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link className="navigation-item" to="/">ACCUEIL</Link></Nav.Link>
                        <Nav.Link><Link className="navigation-item" to="/societe">SOCIÉTÉ</Link></Nav.Link>
                        <Nav.Link><Link className="navigation-item" to="/services">SERVICES</Link></Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </>
    );
}

export default Navbarr;