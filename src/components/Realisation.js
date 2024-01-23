import '../style/Realisation.css';

function Realisation() {
    return (
        <>
            <h5 className="partners-header mt-3">Nos Services</h5>
            <div className="flex-container">
                <div><img src="./images/lunettes_elegantes.jpg" style={{objectFit:"cover",objectPosition:"center 25%"}}/>
                    <p>Montures de lunettes élégantes</p></div>
                <div><img src="./images/verres_correcteurs.jpeg"/>
                    <p>Verres correcteurs de qualité</p></div>
                <div><img src="./images/sunglasses.jpeg" style={{objectFit:"cover",objectPosition:"center 41%"}}/>
                    <p>Lunettes de soleil de prescription</p></div>
                <div><img src="./images/contact_lenses.jpeg"/>
                    <p>Lentilles de contact</p></div>
                <div><img src="./images/esthetique_lenses.jpeg" style={{objectFit:"cover",objectPosition:"center 41%"}}/>
                    <p>Lentilles de contact esthétiques</p></div>
                <div><img src="./images/glasses_reparation.webp"/>
                    <p>Services de réparation et d'ajustement</p></div>
            </div>
        </>
    );
}

export default Realisation;