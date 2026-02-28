import React from 'react';

const TIERS = [
    {
        name: 'Essential Pilot',
        price: '$2k',
        period: '/mo',
        desc: 'The foundation for automated lead generation and outreach.',
        features: [
            'G-Maps / Apify Lead Scraper',
            'Instantly Campaign Setup',
            'Weekly performance tuning',
            'Slack connect channel'
        ],
        highlight: false,
        cta: 'Start Pilot'
    },
    {
        name: 'Performance Engine',
        price: '$5k',
        period: '/mo',
        desc: 'Full-stack automation for high-velocity revenue teams. Our most requested configuration.',
        features: [
            'Everything in Essential',
            'Custom LLM Lead Scoring',
            'Automated PandaDoc Proposals',
            'Daily AI News/Briefs synthesis',
            'Custom modal/webhook routing'
        ],
        highlight: true,
        cta: 'Deploy Engine'
    },
    {
        name: 'Enterprise Matrix',
        price: 'Custom',
        period: '',
        desc: 'Bespoke architectural design replacing entire operational departments.',
        features: [
            'Everything in Performance',
            'Voice agent integration',
            'Custom Upwork scraper pipelines',
            'Dedicated infrastructure (Modal)',
            'SLA guarantees'
        ],
        highlight: false,
        cta: 'Contact Architecture'
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-32 px-6 md:px-16 bg-background w-full">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-heading font-medium text-4xl md:text-5xl text-dark tracking-tight mb-6">
                        Architectural Tiers
                    </h2>
                    <p className="font-sans text-lg text-dark/70 max-w-2xl mx-auto">
                        Transparent pricing for non-transparent competitive advantages. We deploy working systems, not whitepapers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {TIERS.map((tier, i) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col rounded-[2.5rem] p-10 transition-transform duration-500 hover:-translate-y-2
                ${tier.highlight
                                    ? 'bg-primary text-white shadow-xl scale-105 z-10'
                                    : 'bg-white/50 border border-dark/5 backdrop-blur-sm text-dark'
                                }
              `}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white font-data text-xs uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                                    Recommended
                                </div>
                            )}

                            <h3 className="font-heading font-bold text-2xl mb-2">{tier.name}</h3>
                            <p className={`text-sm mb-8 flex-1 min-h-[40px] ${tier.highlight ? 'text-white/70' : 'text-dark/60'}`}>
                                {tier.desc}
                            </p>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="font-drama text-5xl italic">{tier.price}</span>
                                <span className={`font-data text-sm ${tier.highlight ? 'text-white/50' : 'text-dark/40'}`}>
                                    {tier.period}
                                </span>
                            </div>

                            <ul className="flex flex-col gap-4 mb-10 border-t border-current/10 pt-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className={`shrink-0 w-5 h-5 mt-0.5 ${tier.highlight ? 'text-accent' : 'text-dark/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-sans text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-auto w-full py-4 rounded-full font-heading font-medium text-sm transition-all magnetic-btn
                  ${tier.highlight
                                        ? 'bg-accent text-white hover:bg-white hover:text-accent shadow-lg'
                                        : 'bg-dark text-white hover:bg-dark/80'
                                    }
                `}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
