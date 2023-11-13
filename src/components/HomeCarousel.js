import Carousel from 'react-bootstrap/Carousel';
import $ from 'jquery';
import '../style/HomeCarousel.css';
import LearnMore from "./LearnMore";
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
                <div className="learn-more-container">
                    <LearnMore destination="/societe"/>
                </div>
                <Carousel.Caption className="caption-wrapper silder1">
                        <h3>Slide de concassage</h3>
                        <p>
                            Paragraphe qui representent le concassage dans IT-SYSTEM
                        </p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img "
                    src="./images/slide2.jpg"
                    alt="Second slide"
                />
                <div className="learn-more-container">
                    <LearnMore/>
                </div>
                <Carousel.Caption className="caption-wrapper slider2">

                        <h3>Slide d'electrecite</h3>
                        <p>
                            Paragraphe qui representent l'electrecite dans IT-SYSTEM
                        </p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img "
                    src="https://picsum.photos/id/238/800/320"
                    alt="Third slide"
                />
                <div className="learn-more-container">
                    <LearnMore/>
                </div>
                <Carousel.Caption className="caption-wrapper slider3">

                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default HomeCarousel;