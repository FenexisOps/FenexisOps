import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const CARDS = [
    { id: 1, label: 'Lead Scraping Pipeline', status: 'INITIATED' },
    { id: 2, label: 'Cold Outreach Engine', status: 'ACTIVE' },
    { id: 3, label: 'Deterministic Routing', status: 'LIVE' },
];

export const DiagnosticShuffler = () => {
    const [cards, setCards] = useState(CARDS);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-background relative w-full h-[320px] rounded-[2rem] p-8 border border-dark/5 shadow-surface flex flex-col items-center justify-center overflow-hidden group">
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div>
                    <h3 className="font-heading font-bold text-xl text-dark">Day One Execution</h3>
                    <p className="font-sans text-sm text-dark/60 mt-1 max-w-[200px]">Leads scraped, campaigns live, systems running — within 48 hours.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-accent">
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                </div>
            </div>

            <div className="relative w-full max-w-[240px] h-[140px] mt-16 perspective-1000">
                {cards.map((c, i) => {
                    // Calculate explicit positions based on index
                    const isTop = i === 0;
                    const isMid = i === 1;
                    const isBottom = i === 2;

                    return (
                        <div
                            key={c.id}
                            className="absolute inset-0 w-full h-16 bg-white/80 dark:bg-dark/5 backdrop-blur-sm border border-dark/10 rounded-xl px-4 flex items-center justify-between"
                            style={{
                                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                transform: `translateY(${i * 24}px) scale(${1 - i * 0.05})`,
                                opacity: 1 - i * 0.2,
                                zIndex: 3 - i,
                            }}
                        >
                            <span className="font-data text-xs text-dark/80">{c.label}</span>
                            <span className={`font-data text-[10px] px-2 py-0.5 rounded-full ${isTop ? 'bg-accent/10 text-accent font-bold' : 'bg-dark/5 text-dark/40'}`}>
                                {c.status}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
