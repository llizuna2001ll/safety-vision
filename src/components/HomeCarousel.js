import Carousel from 'react-bootstrap/Carousel';
import '../style/HomeCarousel.css';

function HomeCarousel() {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img"
                        src="./images/slider1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-wrapper silder1">
                        <h3>Style Personnalisé, Vue Optimale</h3>
                        <p>
                            Chez Safety Vision, nous croyons que votre vision mérite un style personnalisé. Découvrez
                            notre sélection de montures esthétiques et de lentilles médicales pour une vue optimale qui
                            reflète votre mode de vie
                        </p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img "
                        src="./images/slider2.jpeg"
                        alt="Second slide"
                        style={{objectFit: "cover"}}
                    />
                    <Carousel.Caption className="caption-wrapper slider2">

                        <h3>Clarté et Élégance au Quotidien</h3>
                        <p>
                            Découvrez chez Safety Vision une vision claire et élégante au quotidien avec nos lunettes
                            médicales et solaires polarisées. Optez pour le style sans compromis sur la qualité
                        </p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img "
                        src="./images/slider2.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption-wrapper slider3">

                        <h3>Conseils Personnalisés, Votre Vision, Notre Priorité</h3>
                        <p>
                            Chez Safety Vision, nos experts en optique vous offrent des conseils personnalisés pour
                            trouver les lunettes parfaites adaptées à votre style de vie. Faites confiance à notre
                            engagement envers votre vision, où qualité et style se rencontrent harmonieusement
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeCarousel;