import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from './ThemeContext';

export const Hero = () => {
    const { currentPreset } = useTheme();
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance animation for the hero content
            gsap.from(".hero-element", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });
        }, heroRef);

        return () => ctx.revert();
    }, [currentPreset.id]); // Re-run when preset changes to re-animate

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100dvh] w-full flex items-end justify-start pb-24 md:pb-32 px-6 md:px-16 lg:px-24 overflow-hidden"
        >
            {/* Background Image ImageMood query pattern */}
            <div className="absolute inset-0 z-0">
                <img
                    src={currentPreset.imageUrl}
                    alt="Atmospheric Background"
                    className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-app via-background-app/80 to-background-app/20 mix-blend-multiply"></div>
                {/* Soft radial overlay for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background-app to-transparent opacity-90"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl">
                <div className="flex flex-col gap-2">
                    <h1 className="hero-element font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white/90">
                        {currentPreset.heroLine[0]}
                    </h1>
                    <h2 className="hero-element font-drama italic text-7xl md:text-8xl lg:text-9xl tracking-tighter mix-blend-difference text-white">
                        {currentPreset.heroLine[1]}
                    </h2>
                </div>

                <div className="hero-element mt-12 md:mt-16">
                    <button className="magnetic-btn bg-accent text-white px-8 py-4 rounded-full font-heading font-semibold text-lg flex items-center gap-3 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Consultation
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </span>
                        <span className="absolute inset-0 bg-white/20 clip-slider"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};
