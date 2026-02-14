import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import JobListings from "@/components/JobListings";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Statistics />
      <Services />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <JobListings />
      </div>

      <About />

      <Footer />
      <ScrollToTop />
    </main>
  );
}
