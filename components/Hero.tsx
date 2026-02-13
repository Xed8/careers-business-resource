import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Welcome to Caliber Business Resource</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="text-accent block mt-2">Caliber Business Resource</span>
            <span className="text-2xl sm:text-3xl md:text-4xl block mt-4 font-normal text-white/90">Incorporated</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-4 mb-8">
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Are you burdened with the diminishing quality of your remote teams?
            </p>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Or are you just about to start your small business and seeking a viable option for growth?
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-accent font-semibold mb-8">
            Let&apos;s build your back office and team NOW
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-roles"
              className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 flex items-center gap-2"
            >
              Explore Careers
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/20 hover:border-white/40"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '9+', label: 'Open Positions' },
            { value: '100+', label: 'Team Members' },
            { value: '50+', label: 'Happy Clients' },
            { value: '$27B', label: 'Industry Size' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
