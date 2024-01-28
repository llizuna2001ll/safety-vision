import React, {useEffect, useRef, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import HomeCarousel from '../components/HomeCarousel';
import GetInTouchBar from '../components/GetInTouchBar';
import Partners from '../components/Partners';
import Realisation from '../components/Realisation';
import {FloatingWhatsApp} from 'react-floating-whatsapp';
import Reviews from '../components/Reviews';

function AnimatedComponent({children, animation}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        }
    }, [inView]);

    return <div ref={ref} className={`${animation} ${animate ? 'animate' : ''}`}>{children}</div>;
}

function Home() {
    const containerStyle = {
        overflow: 'hidden',
    };

    useEffect(() => {
        document.title = 'Safety Vision - Accueil';
    }, []);

    return (
        <>
            <AnimatedComponent animation={"animated-component"}>
                <HomeCarousel/>
                <GetInTouchBar/>
            </AnimatedComponent>
            <div style={containerStyle} className="ms-5 mt-3 me-5">
                <AnimatedComponent animation={"animated-component"}>
                    <Realisation/>
                </AnimatedComponent>
                <div className={'mb-5 mt-3'}>
                    <AnimatedComponent animation={"animated-component-from-left"}>
                        <Reviews/>
                    </AnimatedComponent>
                </div>
                <div className={'mb-5 mt-3'}>
                    <AnimatedComponent animation={"animated-component-from-right"}>
                        <Partners/>
                    </AnimatedComponent>
                </div>
            </div>
            <FloatingWhatsApp
                phoneNumber={'212672821362'}
                accountName={'Safety Vision'}
                avatar={'./images/logo_safety.jpg'}
                chatMessage={'Bonjour ! 🤝 Comment pouvons-nous vous aider ?'}
                statusMessage={"Généralement, des réponses dans l'heure"}
                placeholder={'Ecris un message...'}
            />
        </>
    );
}

export default Home;
