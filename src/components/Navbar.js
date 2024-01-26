import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/Navbar.css";
import Header from "./Header";
import {Link} from "react-router-dom";

function Navbarr() {

    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("mynav");
        const navbarLogo = document.getElementById("safety_logo")
        if (window.pageYOffset > 25) {
            navbar.classList.add("sticky");
            navbarLogo.style.display = "none";
        } else {
            navbar.classList.remove("sticky");
            navbarLogo.style.display = "block";
        }
    });


    return (
        <>
            <Header/>
            <Navbar id="mynav" className="navbar-style">
                <div className="nav_container">
                    <Navbar.Brand id={"safety_logo"} className="logo"><img src={"./images/logos/safety_logo.png"}
                                                        alt={"safety_vision"} width={150}/></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link className="navigation-item" to="/">ACCUEIL</Link></Nav.Link>
                        <Nav.Link><Link to={"/face"}  className="navigation-item">SERVICES</Link></Nav.Link>
                            <Nav.Link><Link className="navigation-item" to="/societe">À PROPS DE NOUS</Link></Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </>
    );
}

export default Navbarr;