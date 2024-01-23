import React, {useEffect} from "react";
import AboutUs from "../components/AboutUs";

function Societe() {

    useEffect(() => {
        document.title = 'Safety Vision - À propos de nous';
    }, []);

    return (
        <>
            <AboutUs/>
        </>
    );
}

export default Societe;