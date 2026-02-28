import React, { createContext, useContext, useEffect } from 'react';

// Merging Preset D's philosophy and topography with Preset C's brutalist imagery
export const SINGLE_PRESET = {
    id: 'Unified',
    name: 'FenexisOps Primary',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop', // from Preset C (Brutalist architecture)
    heroLine: ['FenexisOps beyond', 'Next Horizon.'], // from Preset D
    philosophy: ['Most AI tools focus on: stochastic hallucination output.', 'We focus on: engineered deterministic pipelines.'] // from Preset D
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'unified');
    }, []);

    // toggleTheme is removed since we only have one theme now
    return (
        <ThemeContext.Provider value={{ currentPreset: SINGLE_PRESET }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
