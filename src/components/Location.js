import React from 'react';

const Location = () => {
    return (
        <div className={"d-flex flex-column"}>
            <h5 className="partners-header m-4">Localisation</h5>
            <iframe
                className={"mt-4"}
                title="Safety Vision"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.73428124352!2d-7.527997324158936!3d33.586247773335934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdf94e644137%3A0x2f6315dcc8c9aedb!2sSafety%20Vision!5e0!3m2!1sen!2sma!4v1706043608634!5m2!1sen!2sma"
                width="650"
                height="500"
                style={{border: "2px solid black"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Location;
