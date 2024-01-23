import '../style/AboutUs.css';
import Location from "./Location";
import React from "react";
import ContactUs from "./ContactUs";

function AboutUs() {
    return (
        <>
            <h5 className="partners-header m-4">Qui sommes nous</h5>
            <div className="d-flex about-us-container">
                <div className={"w-100 bg-white"}>
                    <p className={"p-3 ms-3"}>Safety Vision, votre destination privilégiée pour une vision claire et
                        élégante, vous accompagne depuis 2018. Spécialisés dans les lunettes médicales, solaires
                        polarisées,
                        lentilles esthétiques et médicales, nous offrons des conseils personnalisés pour répondre à vos
                        besoins visuels. Nous prenons en charge la réparation de vos lunettes favorites et proposons une
                        sélection d'accessoires variés. Chez Safety Vision, découvrez des solutions optiques de qualité
                        supérieure et bénéficiez de notre expertise pour choisir des lunettes adaptées à votre style de
                        vie.</p>
                </div>
                <div className={"d-flex justify-content-around w-100"}>
                    <ContactUs/>
                    <Location/>
                </div>
            </div>
        </>
    )
        ;
}

export default AboutUs;