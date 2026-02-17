import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import JobListings from "@/components/JobListings";
import About from "@/components/About";
import SocialConnect from "@/components/SocialConnect";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Statistics />
      <Services />

      {/* Company Culture Section */}
      <div className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Culture</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Experience what makes Caliber Business Resource a great place to work
            </p>
          </div>
          
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-4xl mx-auto bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-2xl" />
            
            <video
              src="/video/company_culture.mp4"
              className="w-full aspect-video object-cover"
              poster="/images/our-story-main.png"
              controls
              preload="metadata"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          
          {/* Culture Details */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of working together. Our collaborative environment fosters innovation and shared success.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth & Development</h3>
              <p className="text-gray-400">
                Continuous learning is at our core. We invest in our people's professional development and career advancement.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <path d="M9 9h.01"></path>
                  <path d="M15 9h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Work-Life Balance</h3>
              <p className="text-gray-400">
                We understand the importance of balance. Our flexible work arrangements support both professional and personal well-being.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <blockquote className="text-xl text-gray-300 italic border-l-4 border-primary pl-6 py-2 ml-4">
              "At Caliber, we don't just work together, we grow together. Every team member brings unique talents that contribute to our collective success."
            </blockquote>
            <p className="mt-4 text-primary font-bold">- Chrissa B. Ranis, Founder & CEO</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <JobListings />
      </div>

      <About />
      
      <SocialConnect />

      {/* Google Maps Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Located in the heart of Tagbilaran City, Bohol
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.876!2d123.8528!3d9.6467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9ef2ff7e1b3f7%3A0x8c9c9c9c9c9c9c9c!2sVenancio+P.+Inting+Ave%2C+Tagbilaran+City%2C+Bohol!5e0!3m2!1sen!2sph!4v1600000000000!5m2!1sen!2sph"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Caliber Business Resource - Venancio P. Inting Avenue, Tagbilaran City, Bohol"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 1.621.497 3.142 1.358 4.412l-.78 3.538a.5.5 0 0 0 .654.654l3.538-.78A7.96 7.96 0 0 0 12 18c4.418 0 8-3.582 8-8z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-white">Ruberen Complex, Venancio P. Inting Avenue, Tagbilaran City, Bohol</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingContact />
    </main>
  );
}
