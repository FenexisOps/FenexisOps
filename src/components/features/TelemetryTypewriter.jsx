import React, { useState, useEffect } from 'react';

const MESSAGES = [
    "ERR: API Timeout detected.",
    "> Routing via fallback node...",
    "OK: Connection restored (14ms).",
    "> Analyzing failure pattern...",
    "OK: Self-annealing complete.",
    "> Pipeline stabilized.",
];

export const TelemetryTypewriter = () => {
    const [text, setText] = useState('');
    const [msgIndex, setMsgIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (msgIndex >= MESSAGES.length) {
            // Loop back after a pause
            const resetTimer = setTimeout(() => {
                setHistory([]);
                setMsgIndex(0);
                setCharIndex(0);
                setText('');
            }, 4000);
            return () => clearTimeout(resetTimer);
        }

        const currentMsg = MESSAGES[msgIndex];

        if (charIndex < currentMsg.length) {
            const typeTimer = setTimeout(() => {
                setText(prev => prev + currentMsg[charIndex]);
                setCharIndex(c => c + 1);
            }, Math.random() * 30 + 30); // Random typing speed
            return () => clearTimeout(typeTimer);
        } else {
            const nextTimer = setTimeout(() => {
                setHistory(prev => [...prev, currentMsg]);
                setText('');
                setCharIndex(0);
                setMsgIndex(m => m + 1);
            }, 800);
            return () => clearTimeout(nextTimer);
        }
    }, [charIndex, msgIndex]);

    return (
        <div className="bg-background relative w-full h-[320px] rounded-[2rem] p-8 border border-dark/5 shadow-surface flex flex-col overflow-hidden group">
            <div className="mb-6 flex justify-between items-start">
                <div>
                    <h3 className="font-heading font-bold text-xl text-dark">Systems That Fix Themselves</h3>
                    <p className="font-sans text-sm text-dark/60 mt-1 max-w-[200px]">Every error gets folded back. It exits stronger.</p>
                </div>
                <div className="flex items-center gap-2 bg-dark/5 px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <span className="font-data text-[9px] uppercase tracking-widest text-dark/60">Live Feed</span>
                </div>
            </div>

            <div className="flex-1 bg-dark/95 rounded-xl p-4 font-data text-xs text-green-400 overflow-hidden relative border border-dark/10 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 pointer-events-none mt-16 z-10"></div>
                <div className="flex flex-col gap-1 opacity-80">
                    {history.map((h, i) => (
                        <div key={i} className={h.startsWith('ERR') ? 'text-red-400' : h.startsWith('OK') ? 'text-green-400' : 'text-white/60'}>
                            {h}
                        </div>
                    ))}
                    <div className="flex items-center">
                        <span className={text.startsWith('ERR') ? 'text-red-400' : text.startsWith('OK') ? 'text-green-400' : 'text-white/80'}>
                            {text}
                        </span>
                        <span className="w-1.5 h-3 bg-accent ml-1 animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
