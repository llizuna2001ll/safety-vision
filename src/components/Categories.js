import "../style/Services.css"
import {Link} from "react-router-dom";

function Categories() {
    return (
        <>
            <div className={"categories-container"}>
                <div className={"categories-images"}>
                    <Link className="text-dark text-decoration-none" to="/category1"><img src="./images/slider1.jpg"/>
                    <p>Categorie 1</p></Link>
                </div>
                <div className={"categories-images"}>
                    <Link className="text-dark text-decoration-none" to="/category1"><img src="./images/slider1.jpg"/>
                        <p>Categorie 2</p></Link>
                </div>
                <div className={"categories-images"}>
                    <Link className="text-dark text-decoration-none" to="/category1"><img src="./images/slider1.jpg"/>
                        <p>Categorie 3</p></Link>
                </div>
                <div className={"categories-images"}>
                    <Link className="text-dark text-decoration-none" to="/category1"><img src="./images/slider1.jpg"/>
                        <p>Categorie 4</p></Link>
                </div>
            </div>
        </>
    );
}

export default Categories;