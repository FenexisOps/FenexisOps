import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

export const Navbar = () => {
    const { currentPreset } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-6 pointer-events-none">
            <nav
                className={`pointer-events-auto flex items-center justify-between transition-all duration-700 w-[90%] max-w-5xl rounded-full px-6 py-4 ${scrolled
                        ? 'bg-background/60 backdrop-blur-xl border border-dark/10 shadow-lg text-primary'
                        : 'bg-transparent text-white'
                    }`}
            >
                <div className="font-heading font-bold text-xl tracking-tight">
                    FenexisOps
                </div>

                <div className="hidden md:flex items-center gap-8 font-heading text-sm font-medium">
                    <a href="#features" className="hover:opacity-70 transition-opacity">Features</a>
                    <a href="#philosophy" className="hover:opacity-70 transition-opacity">Philosophy</a>
                    <a href="#protocol" className="hover:opacity-70 transition-opacity">Protocol</a>
                </div>

                <button className="magnetic-btn bg-accent text-white px-6 py-2.5 rounded-full font-heading font-medium text-sm flex items-center justify-center relative overflow-hidden group">
                    <span className="relative z-10">Start Protocol</span>
                    <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                </button>
            </nav>
        </div>
    );
};
