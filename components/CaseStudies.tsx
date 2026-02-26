"use client";

import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";

// Placeholder structured case studies for an enterprise B2B staffing firm
const caseStudies = [
    {
        id: 1,
        client: "FinTech Innovators LLC",
        title: "Scaling Engineering Output by 40% While Reducing Overheads",
        category: "Software Development",
        background: "A rapidly growing financial technology firm needed to expand its engineering team to meet aggressive product launch deadlines, but local talent costs were prohibitive.",
        challenge: "Finding senior-level React and Node.js developers who could immediately integrate with their agile workflows without requiring extensive hand-holding.",
        solution: "Caliber deployed a dedicated squad of 5 senior engineers within 3 weeks, handling all technical vetting, cultural alignment screening, and ongoing HR management.",
        results: [
            "40% increase in development velocity within first 2 sprints",
            "60% reduction in total staffing costs compared to local hires",
            "0% turnover in the deployed team over 18 months"
        ]
    },
    {
        id: 2,
        client: "Global E-Commerce Solutions",
        title: "Building a 24/7 Customer Success Operations Center",
        category: "Customer Support Ops",
        background: "An international e-commerce platform required round-the-clock customer support to handle a growing user base across multiple time zones.",
        challenge: "Maintaining high customer satisfaction (CSAT) scores while rapidly scaling a support team capable of handling complex technical inquiries.",
        solution: "We recruited, trained, and managed a dedicated team of 20 Tier-2 support specialists, integrating them directly into the client's Zendesk environment and QA processes.",
        results: [
            "Target staffing level achieved 2 weeks ahead of schedule",
            "CSAT scores improved from 82% to 94%",
            "Average ticket resolution time decreased by 35%"
        ]
    }
];

export default function CaseStudies() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="case-studies" className="pt-16 sm:pt-24 pb-12 sm:pb-16 bg-secondary/10 border-y border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">
                        Client <span className="text-gradient-gold">Success Stories</span>
                    </h2>
                    <p className="body-text max-w-2xl mx-auto text-balance">
                        Discover how we've helped diverse organizations overcome talent constraints and achieve operational excellence.
                    </p>
                </div>

                <div>
                    {/* Main Case Study Display */}
                    <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                        {/* Sidebar Navigation */}
                        <div className="w-full md:w-1/3 bg-secondary/30 border-r border-border p-6 flex flex-col gap-4">
                            {caseStudies.map((study, index) => (
                                <button
                                    key={study.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-left p-4 rounded-xl transition-all duration-300 ${activeTab === index
                                        ? 'bg-primary/10 border-primary/30 border shadow-inner'
                                        : 'bg-transparent border-transparent border hover:bg-white/5'
                                        }`}
                                >
                                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{study.category}</p>
                                    <h3 className={`font-bold ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                                        {study.client}
                                    </h3>
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="w-full md:w-2/3 p-8 md:p-12 relative">
                            <div className="absolute top-12 right-12 opacity-10 pointer-events-none hidden md:block">
                                <TrendingUp className="w-32 h-32 text-primary" />
                            </div>

                            <h3 className="heading-3 mb-8 pr-12 text-balance">
                                {caseStudies[activeTab].title}
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Background</h4>
                                    <p className="body-text">{caseStudies[activeTab].background}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The Challenge</h4>
                                    <p className="body-text">{caseStudies[activeTab].challenge}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Solution</h4>
                                    <p className="body-text">{caseStudies[activeTab].solution}</p>
                                </div>

                                <div className="pt-6 border-t border-border mt-8">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-primary" />
                                        Measurable Results
                                    </h4>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {caseStudies[activeTab].results.map((result, idx) => (
                                            <li key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10">
                                                <span className="text-primary font-bold text-xl leading-none">
                                                    {/* Quick extraction of percentage/numbers for visual punch */}
                                                    {result.match(/\d+%/)?.[0] || '✓'}
                                                </span>
                                                <span className="text-sm text-gray-300">{result.replace(/\d+% /, '')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
