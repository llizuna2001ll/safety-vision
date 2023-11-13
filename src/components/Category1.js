import '../style/AboutUs.css';
import '../style/Services.css';
import {Link} from "react-router-dom";

function Category1() {
    return (
        <>
            <h2 className="m-4">
                Categorie 1
            </h2>
            <div className="d-flex about-us-container">
                <p className={"p-3 ms-3"}>
                    Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem
                    lacus. Ut
                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                    vel in justo.Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                    vel in justo.Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                    vel in justo.</p>
                <div className={"categories-container"}>
                    <div className={"categories-images"}>
                        <Link className="text-dark text-decoration-none" to="/category1"><img
                            src="./images/slider1.jpg"/>
                            <p>Produit 1</p></Link>
                    </div>
                    <div className={"categories-images"}>
                        <Link className="text-dark text-decoration-none" to="/category1"><img
                            src="./images/slider1.jpg"/>
                            <p>Produit 2</p></Link>
                    </div>
                    <div className={"categories-images"}>
                        <Link className="text-dark text-decoration-none" to="/category1"><img
                            src="./images/slider1.jpg"/>
                            <p>Produit 3</p></Link>
                    </div>
                    <div className={"categories-images"}>
                        <Link className="text-dark text-decoration-none" to="/category1"><img
                            src="./images/slider1.jpg"/>
                            <p>Produit 4</p></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category1;