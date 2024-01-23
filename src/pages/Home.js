import React, {useEffect} from 'react';
import HomeCarousel from "../components/HomeCarousel";
import GetInTouchBar from "../components/GetInTouchBar";
import Partners from "../components/Partners";
import Realisation from "../components/Realisation";
import {FloatingWhatsApp} from "react-floating-whatsapp";

function Home() {
    const containerStyle = {
        overflow: "hidden",
    }

    useEffect(() => {
        document.title = 'Safety Vision - Accueil';
    }, []);

    return (
        <>
            <HomeCarousel/>
            <GetInTouchBar/>
            <div style={containerStyle} className="ms-5 mt-3 me-5">
                <Realisation/>
                <div className={"mb-5 mt-3"}>
                    <Partners/></div>
            </div>
            <FloatingWhatsApp phoneNumber={"212672821362"} accountName={"Safety Vision"}
                              avatar={"./images/logo_safety.jpg"}
                              chatMessage={"Bonjour ! 🤝 Comment pouvons-nous vous aider ?"}
                              statusMessage={"Généralement, des réponses dans l'heure"}
                              placeholder={"Ecris un message..."}
            />
        </>
    );
}

export default Home;