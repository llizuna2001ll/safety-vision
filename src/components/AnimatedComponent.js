import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children, animationType }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const animatedRef = useRef(null);

    useEffect(() => {
        const element = animatedRef.current;

        if (element && inView) {
            element.classList.add(animationType, 'active');
        }

        return () => {
            if (element) {
                element.classList.remove(animationType, 'active');
            }
        };
    }, [inView, animationType]);

    return <div ref={ref} className={`animated-component ${animationType}`} ref={animatedRef}>{children}</div>;
};

export default AnimatedComponent;
