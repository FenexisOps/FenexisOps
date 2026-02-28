import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-dark text-white rounded-t-[4rem] flex flex-col pt-24 px-8 md:px-16 border-t border-white/10 mt-12 relative overflow-hidden">

            {/* Background ambient texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <filter id="footerNoise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#footerNoise)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 pb-20">
                <div className="md:col-span-5 flex flex-col items-start">
                    <div className="font-heading font-bold text-3xl tracking-tight mb-4">
                        FenexisOps
                    </div>
                    <p className="font-sans text-white/50 text-sm max-w-sm mb-8 leading-relaxed">
                        We build deterministic pipelines that execute your growth strategy. Separating orchestration from execution.
                    </p>
                </div>

                <div className="md:col-span-4 grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-data text-xs text-white/30 uppercase tracking-widest mb-2">Systems</h4>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Lead Index</a>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Email Orchestration</a>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Data Triage</a>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">News Synthesis</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-data text-xs text-white/30 uppercase tracking-widest mb-2">Company</h4>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">About</a>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Case Studies</a>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Careers</a>
                        <a href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                <div className="md:col-span-3 flex flex-col items-start md:items-end">
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl mb-6">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <span className="font-data text-[10px] tracking-widest text-green-400 uppercase">System Operational</span>
                    </div>
                    <p className="font-data text-[10px] text-white/30 truncate text-right w-full">
                        LATENCY: 14ms | LAST DEPLOY: JUST NOW
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full pt-8 pb-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10 relative z-10 text-xs font-data text-white/30">
                <p>&copy; {new Date().getFullYear()} FenexisOps. All systems normal.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};
