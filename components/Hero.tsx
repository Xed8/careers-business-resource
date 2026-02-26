import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-16"
    >
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-gray-300">Trusted Outsourcing Partner</span>
        </div>

        {/* Main Heading - H1 per design system */}
        <h1 className="heading-1 mb-6 sm:mb-8 text-balance">
          Scale Your Operations.
          <span className="text-gradient-gold"> Reduce Hiring Friction.</span>
        </h1>

        {/* Subtitle - Body text per design system */}
        <p className="body-text max-w-2xl mb-10 text-balance">
          Premium remote staffing solutions from the Philippines. We provide structured evaluation, dedicated account management, and managed onboarding for a long-term partnership model.
        </p>

        {/* CTA Buttons - Per design system specs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-16">
          <a
            href="#connect"
            className="btn-primary w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
          <a
            href="#open-roles"
            className="btn-secondary w-full sm:w-auto"
          >
            Apply for a Job
          </a>
        </div>

        {/* Stats / Trust Indicators - Per design system */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-white/10 w-full max-w-5xl">
          {[
            { label: 'Leadership', value: '15+ Yrs' },
            { label: 'Facility Type', value: 'Micro-Center' },
            { label: 'Max Cost Savings', value: '80%' },
            { label: 'Talent Vetting', value: 'Multi-Stage' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 whitespace-nowrap">{stat.value}</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider text-center">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
