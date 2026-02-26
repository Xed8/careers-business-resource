"use client";

import { Star } from "lucide-react";
import { getImagePath } from "@/lib/utils";

// Using placeholder data since this is a new component and real testimonials were requested.
// We'll use professional sounding placeholders until real data is provided.
const testimonials = [
    {
        quote: "Caliber provided us with exceptional remote talent that seamlessly integrated into our engineering team. Their structured vetting meant we only interviewed highly qualified candidates.",
        name: "Sarah Jenkins",
        role: "VP of Engineering",
        company: "TechFlow Solutions",
        image: "/images/testimonial-1.jpg", // Placeholder
    },
    {
        quote: "The account management and onboarding process is where Caliber truly shines. It feels like a genuine partnership rather than just a staffing transaction.",
        name: "Michael Chen",
        role: "Chief Operating Officer",
        company: "Global Logistics Inc.",
        image: "/images/testimonial-2.jpg", // Placeholder
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-background border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">
                        Trusted by <span className="text-gradient-gold">Industry Leaders</span>
                    </h2>
                    <p className="body-text max-w-2xl mx-auto text-balance">
                        Hear from companies that have successfully scaled their operations with our premium remote staffing solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="card-standard flex flex-col"
                        >
                            <div className="flex text-amber-500 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <blockquote className="body-text text-lg italic mb-8 mt-auto flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4 mt-auto border-t border-border pt-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary border border-border">
                                    {/* Fallback to initials if image doesn't exist */}
                                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-primary">{testimonial.role}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
