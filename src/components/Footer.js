import '../style/Footer.css';

function Footer() {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 item text">
                            <h3>Heure de travail</h3>
                            <ul>
                                <li>Lundi - Jeudi: 9h00 - 13h00 | 15h00 - 20h00</li>
                                <li>Vendredi: 15h00 - 20h00</li>
                                <li>Samedi: 9h00 - 13h00</li>
                            </ul>
                        </div>

                        <div className="col-sm-3 col-md-3 item text">
                            <h3>Partenaires</h3>
                            <ul>
                                <li>GIORGIO ARMANI</li>
                                <li>BBGR</li>
                                <li>FENDI</li>
                                <li>GUESS</li>
                                <li>HOYA</li>
                                <li>INDO</li>
                                <li>KODAK</li>
                                <li>MIKAEL KORS</li>
                                <li>NIKON</li>
                                <li>POLICE</li>
                                <li>RAYBAN</li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>SAFETY VISION</h3>
                            <p>Safety Vision, votre destination privilégiée pour une vision claire et élégante, vous
                                accompagne depuis 2018. Spécialisés dans les lunettes médicales, solaires polarisées,
                                lentilles esthétiques et médicales, nous offrons des conseils personnalisés pour
                                répondre à vos besoins visuels. Nous prenons en charge la réparation de vos lunettes
                                favorites et proposons une sélection d'accessoires variés. Chez Safety Vision, découvrez
                                des solutions optiques de qualité supérieure et bénéficiez de notre expertise pour
                                choisir des lunettes adaptées à votre style de vie.</p>
                        </div>

                        <div className="col item social"><a href="https://web.facebook.com/safety.vision.k/"><i
                            className="lni lni-facebook-oval"></i></a><a
                            href="https://wa.me/212672821362"><i className="lni lni-whatsapp"></i></a><a
                            href="https://www.instagram.com/safety.vision.k/"><i
                            className="lni lni-instagram-original"></i></a></div>
                    </div>
                    <p className="copyright">SAFETY VISION © 2018</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;