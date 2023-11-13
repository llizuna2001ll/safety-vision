import React, {useEffect} from "react";
import AboutUs from "../components/AboutUs";

function Societe() {
    useEffect(() => {
        document.title = 'IT-SYSTEM - Société';
    }, []);
    return (
        <>
            <AboutUs/>
        </>
    );
}

export default Societe;