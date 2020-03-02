/** @format */

import React, { ReactNode, useEffect } from 'react';

interface Props {
    children: ReactNode;
}

const AnimationIntersectionObserver: React.FC<Props> = ({
    children,
}: Props) => {
    const ratio = 0.1;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio,
    };

    const handleIntersection = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    useEffect(() => {
        const elements = document.querySelectorAll('.reveal');
        if (elements.length !== 0) {
            elements.forEach((element) => {
                observer.observe(element as Element);
            });
        }

        return function cleanup() {
            if (elements.length !== 0) {
                elements.forEach((element) => {
                    observer.unobserve(element as Element);
                });
            }
        };
    });

    return <>{children}</>;
};

export default AnimationIntersectionObserver;
