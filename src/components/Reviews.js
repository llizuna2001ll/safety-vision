import React, {useEffect} from 'react';

const Reviews = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
        script.async = true;
        script.defer = true;

        // Append the script element to the body
        document.body.appendChild(script);

        // Cleanup: Remove the script element when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures useEffect runs only once after component mount

    return (
        <>
            <h5 className="partners-header mt-5">Avis de nos clients</h5>
            <div className='sk-ww-google-reviews' data-embed-id='25353254'></div>
        </>
    );
};

export default Reviews;
