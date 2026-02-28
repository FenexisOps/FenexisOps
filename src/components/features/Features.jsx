import React from 'react';
import { DiagnosticShuffler } from './DiagnosticShuffler';
import { TelemetryTypewriter } from './TelemetryTypewriter';
import { CursorProtocolScheduler } from './CursorProtocolScheduler';

export const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background w-full">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark tracking-tight">Functional Artifacts</h2>
                        <p className="font-sans text-lg text-dark/60 mt-4 max-w-xl">
                            We don't sell consulting hours. We build deterministic pipelines that execute your growth strategy.
                        </p>
                    </div>
                    <div className="flex space-x-2 font-data text-xs text-dark/40 uppercase tracking-widest">
                        <span>[ SYSTEM.LIVE ]</span>
                        <span className="hidden md:inline">→</span>
                        <span className="hidden md:inline">[ MODULES.ACTIVE ]</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <DiagnosticShuffler />
                    <TelemetryTypewriter />
                    <CursorProtocolScheduler />
                </div>
            </div>
        </section>
    );
};
