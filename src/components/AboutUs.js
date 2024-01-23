import '../style/AboutUs.css';

function AboutUs() {
    return (
        <>
            <h2 className="m-4">
                Qui sommes nous
            </h2>
            <div className="d-flex about-us-container">
                <div className={"w-100 bg-white"}>
                <p className={"p-3 ms-3"}>Safety Vision, votre destination privilégiée pour une vision claire et
                    élégante, vous accompagne depuis 2018. Spécialisés dans les lunettes médicales, solaires polarisées,
                    lentilles esthétiques et médicales, nous offrons des conseils personnalisés pour répondre à vos
                    besoins visuels. Nous prenons en charge la réparation de vos lunettes favorites et proposons une
                    sélection d'accessoires variés. Chez Safety Vision, découvrez des solutions optiques de qualité
                    supérieure et bénéficiez de notre expertise pour choisir des lunettes adaptées à votre style de
                    vie.</p>
                </div>
                <h2 className="m-4">
                    Contactez-nous
                </h2>
                <div className={"about-us-images mt-4 ms-5 bg-white bg-opacity-50"}>
                    <a href={"https://wa.me/212672821362"} target={"_blank"} className={"text-dark fw-bold "}><img
                        src="./images/social_media/whatsapp_icon.webp"/>+212 668057737</a>
                    <a href={"https://www.instagram.com/safety.vision.k/"} target={"_blank"}
                       className={"text-dark fw-bold"}><img src="./images/social_media/instagram_icon.png"/>@safety.vision.k</a>
                    <a href={"https://web.facebook.com/safety.vision.k/"} target={"_blank"}
                       className={"text-dark fw-bold"}><img src="./images/social_media/facebook_icon.png"/>Safety Vision</a>
                </div>
            </div>
        </>
    );
}

export default AboutUs;