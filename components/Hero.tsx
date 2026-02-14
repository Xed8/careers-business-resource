import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Premium Global Outsourcing Solutions</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="animate-slide-up opacity-0 max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 sm:mb-8" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Empower Your</span>
          <br />
          <span className="text-gradient-gold">Business Growth</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-slide-up opacity-0 max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
          Stop compromising on quality. Build a world-class remote team with Caliber Business Resource.
          We connect you with top-tier talent to scale your operations efficiently.
        </p>

        {/* CTA Buttons */}
        <div className="animate-slide-up opacity-0 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-12 sm:mb-16 w-full sm:w-auto px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
          <a
            href="#services"
            className="btn-press group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-xl overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(255,193,7,0.5)] transition-shadow duration-300"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Start Building Your Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#about"
            className="btn-press w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-white font-medium text-base sm:text-lg rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
          >
            Learn More
          </a>
        </div>

        {/* Stats / Trust Indicators */}
        <div className="animate-slide-up opacity-0 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-16 pt-6 sm:pt-8 border-t border-white/10 w-full max-w-5xl px-4 sm:px-0" style={{ animationDelay: '0.6s' }}>
          {[
            { label: 'Cost Savings', value: '70%' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Talent Pool', value: 'Top 1%' },
            { label: 'Time Zone', value: '24/7' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider text-center">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
