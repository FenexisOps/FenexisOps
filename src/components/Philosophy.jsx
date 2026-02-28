import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy = () => {
    const { currentPreset } = useTheme();
    const sectionRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const bgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                y: '20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // SplitText style reveal (using CSS classes and staggered spans)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.from(text1Ref.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            }).from(text2Ref.current, {
                y: 40,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            }, "-=0.6");
        }, sectionRef);

        return () => ctx.revert();
    }, [currentPreset.id]);

    // Highlight the last word of the second statement in the accent color
    const splitSecondStatement = currentPreset.philosophy[1].split(' ');
    const lastWord = splitSecondStatement.pop();
    const restOfSecondStatement = splitSecondStatement.join(' ');

    return (
        <section
            id="philosophy"
            ref={sectionRef}
            className="relative min-h-[90dvh] w-full flex items-center justify-center py-32 px-6 md:px-16 overflow-hidden bg-dark text-white"
        >
            {/* Parallax Background matching the theme's imageMood */}
            <div
                ref={bgRef}
                className="absolute inset-x-0 top-[-20%] bottom-[-20%] z-0 opacity-15"
            >
                <img
                    src={currentPreset.imageUrl}
                    alt="Philosophy Background"
                    className="w-full h-full object-cover filter grayscale sepia-[0.2] contrast-150"
                />
                <div className="absolute inset-0 bg-dark/70 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12 md:gap-20">
                <h2
                    ref={text1Ref}
                    className="font-heading font-medium text-2xl md:text-4xl text-white/50 leading-tight md:leading-snug"
                >
                    {currentPreset.philosophy[0]}
                </h2>

                <h3
                    ref={text2Ref}
                    className="font-drama italic text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter"
                >
                    {restOfSecondStatement} <span className="text-accent not-italic font-heading font-black block mt-4 md:mt-2 md:inline uppercase tracking-tight">{lastWord}</span>
                </h3>
            </div>
        </section>
    );
};
