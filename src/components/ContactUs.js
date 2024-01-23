import React from "react";

function ContactUs() {
    return(
        <div className={"d-flex flex-column"}>
            <h5 className="partners-header m-4">Contactez nous</h5>
            <div className={"about-us-images mt-4 ms-5 bg-white bg-opacity-50"}>
                <a href={"https://wa.me/212672821362"} target={"_blank"} className={"text-dark fw-bold"}><img
                    src="./images/social_media/whatsapp_icon.webp"/>+212 668057737</a>
                <a href={"https://www.instagram.com/safety.vision.k/"} target={"_blank"}
                   className={"text-dark fw-bold"}><img src="./images/social_media/instagram_icon.png"/>@safety.vision.k</a>
                <a href={"https://web.facebook.com/safety.vision.k/"} target={"_blank"}
                   className={"text-dark fw-bold"}><img src="./images/social_media/facebook_icon.png"/>Safety
                    Vision</a>
            </div>
        </div>
    )
}

export default ContactUs;