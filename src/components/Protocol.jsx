import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROTOCOL_STEPS = [
    {
        num: "01",
        title: "Directive Synthesis",
        desc: "Ingesting raw operational data and converting it into natural language Standard Operating Procedures.",
        Animation: () => (
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent/40 stroke-[0.5] fill-none animate-spin-slow origin-center">
                <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="40" strokeDasharray="1 8" />
                <path d="M50 10 L50 90 M10 50 L90 50" className="stroke-white/20" />
            </svg>
        )
    },
    {
        num: "02",
        title: "Orchestration Routing",
        desc: "LLMs analyze intent, select appropriate tools, and dynamically route tasks to deterministic executors.",
        Animation: () => (
            <div className="w-full h-full relative overflow-hidden bg-dark/10 rounded-lg border border-white/5">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-2">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="bg-white/5 rounded-sm" />
                    ))}
                </div>
                <div className="absolute inset-x-0 top-0 h-1 bg-accent/80 animate-scan"></div>
            </div>
        )
    },
    {
        num: "03",
        title: "Deterministic Execution",
        desc: "Python scripts run with strict typings, no hallucinations, and automatic self-annealing error correction.",
        Animation: () => (
            <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                <path
                    d="M0 25 L30 25 L35 10 L45 40 L55 5 L65 45 L70 25 L100 25"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    className="animate-ekg"
                    style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
                />
            </svg>
        )
    }
];

export const Protocol = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Stacking effect using ScrollTrigger
            cardsRef.current.forEach((card, index) => {
                if (index === cardsRef.current.length - 1) return; // Last card doesn't squish

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: "blur(10px)",
                    scrollTrigger: {
                        trigger: cardsRef.current[index + 1],
                        start: "top center",
                        end: "bottom bottom",
                        scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative w-full bg-background pt-24 pb-32">
            <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark tracking-tight mb-4">
                    The 3-Layer Automation Protocol
                </h2>
                <p className="font-sans text-lg text-dark/60 font-medium">
                    Separating the "what" from the "how" for robust, error-resistant systems.
                </p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto px-6">
                {PROTOCOL_STEPS.map((step, index) => (
                    <div
                        key={step.num}
                        ref={el => cardsRef.current[index] = el}
                        className="sticky top-24 min-h-[60vh] w-full bg-dark text-white rounded-[3rem] p-8 md:p-16 mb-24 last:mb-0 shadow-surface border border-white/10 flex flex-col md:flex-row items-center gap-12 overflow-hidden transform-gpu"
                        style={{ zIndex: index }}
                    >
                        {/* Background ambient glow based on accent color */}
                        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>

                        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
                            <span className="font-data text-accent font-bold text-2xl mb-8 block pb-4 border-b border-white/20 w-16">
                                {step.num}
                            </span>
                            <h3 className="font-heading font-medium text-3xl md:text-4xl leading-tight mb-6">
                                {step.title}
                            </h3>
                            <p className="font-sans text-white/60 text-lg leading-relaxed max-w-md">
                                {step.desc}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 h-64 md:h-full min-h-[300px] flex items-center justify-center relative z-10 bg-black/20 rounded-2xl border border-white/5 p-8">
                            <step.Animation />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
