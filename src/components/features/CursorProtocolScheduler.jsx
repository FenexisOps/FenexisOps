import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const CursorProtocolScheduler = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const cellsRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Create an infinite timeline loop
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Starting position (outside top-left)
            tl.set(cursorRef.current, { x: -20, y: -20, opacity: 0 });

            // Enter and move to a random cell (e.g., Wednesday = index 3)
            const targetCell = cellsRef.current[3];

            tl.to(cursorRef.current, {
                duration: 0.8,
                x: targetCell ? targetCell.offsetLeft + 16 : 100,
                y: targetCell ? targetCell.offsetTop + 16 : 100,
                opacity: 1,
                ease: "power2.out"
            })
                // Click simulation (press down)
                .to(cursorRef.current, { scale: 0.8, duration: 0.15 })
                // Highlight the cell
                .to(targetCell, { backgroundColor: 'var(--color-accent)', color: '#fff', duration: 0.2 }, "-=0.15")
                // Release click
                .to(cursorRef.current, { scale: 1, duration: 0.15 })
                // Move to "Save" button equivalent (bottom right relative)
                .to(cursorRef.current, {
                    duration: 0.6,
                    x: 200,
                    y: 120,
                    ease: "power2.inOut"
                })
                // Click "Save"
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                // Fade out
                .to(cursorRef.current, { opacity: 0, duration: 0.3 })
                // Reset cell highlight
                .to(targetCell, { backgroundColor: 'transparent', color: 'inherit', duration: 0.5 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-background relative w-full h-[320px] rounded-[2rem] p-8 border border-dark/5 shadow-surface flex flex-col group overflow-hidden">
            <div className="mb-6 flex justify-between items-start">
                <div>
                    <h3 className="font-heading font-bold text-xl text-dark">AI That Stays in Its Lane</h3>
                    <p className="font-sans text-sm text-dark/60 mt-1 max-w-[200px]">Claude makes decisions. Python does the work. Clean execution.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crosshair text-accent">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="22" x2="18" y1="12" y2="12" />
                        <line x1="6" x2="2" y1="12" y2="12" />
                        <line x1="12" x2="12" y1="6" y2="2" />
                        <line x1="12" x2="12" y1="22" y2="18" />
                    </svg>
                </div>
            </div>

            <div className="flex-1 mt-6 relative flex flex-col gap-4 max-w-[240px] w-full self-center">
                {/* Weekly Grid */}
                <div className="grid grid-cols-7 gap-2">
                    {DAYS.map((d, i) => (
                        <div
                            key={i}
                            ref={el => cellsRef.current[i] = el}
                            className="aspect-square rounded-md border border-dark/10 flex items-center justify-center font-data text-xs text-dark/60 transition-colors"
                        >
                            {d}
                        </div>
                    ))}
                </div>

                <div className="h-8 bg-dark/5 rounded-md flex items-center justify-between px-3 mt-2">
                    <span className="font-data text-[10px] text-dark/40 uppercase">Deploy Protocol</span>
                    <div className="w-16 h-5 rounded bg-accent/20 border border-accent/40 flex items-center justify-center font-data text-[10px] text-accent font-bold">
                        EXECUTE
                    </div>
                </div>

                {/* The Animated Cursor */}
                <div
                    ref={cursorRef}
                    className="absolute z-50 pointer-events-none"
                    style={{ width: '24px', height: '24px' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-dark)" stroke="white" strokeWidth="1.5" strokeLinejoin="round">
                        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L6.35 3.35a.5.5 0 0 0-.85.35Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
