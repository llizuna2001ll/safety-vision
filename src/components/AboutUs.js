import '../style/AboutUs.css';

function AboutUs() {
    return (
        <>
            <h2 className="m-4">
                About Us
            </h2>
            <div className="d-flex about-us-container">
                <p className={"p-3"}>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                    vel in justo.Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                    vel in justo.Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum
                    vel in justo.</p>
                <div className={"about-us-images"}>
                    <img src="./images/slider1.jpg"/>
                    <img src="./images/slider1.jpg"/>
                    <img src="./images/slider1.jpg"/>
                </div>
            </div>
        </>
    );
}

export default AboutUs;