import {
  Headphones,
  Database,
  Calculator,
  Users,
  Mic,
  Megaphone,
  Wrench,
  UserSearch,
  Filter,
  Code2 // Added for Web Developer
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Senior Web Developer',
    description: 'Expert developers to build and scale your web applications using modern technologies like React, Next.js, and Node.js. They ensure high performance, search engine optimization, and a seamless user experience for your digital products.',
    highlight: true // New property to highlight this card
  },
  {
    icon: Users,
    title: 'Sales Support',
    description: 'Agents in sales support roles assist in generating revenue by nurturing leads, following up on inquiries, and closing sales. They possess strong communication and persuasion skills to effectively convey product or service benefits.'
  },
  {
    icon: Database,
    title: 'Data Entry/Admin Support',
    description: 'Agents in data entry and admin support roles play a vital role in maintaining organizational efficiency by managing data entry tasks, processing documents, and providing administrative support.'
  },
  {
    icon: Calculator,
    title: 'Accounting and Bookkeeping',
    description: 'Comprehensive financial management services. Our skilled professionals handle everything from day-to-day transactions to financial reporting and analysis, ensuring accuracy and compliance.'
  },
  {
    icon: Headphones,
    title: 'Customer Service',
    description: 'Dedicated agents ensuring customer satisfaction by addressing inquiries, resolving issues, and providing support across various channels with empathy and problem-solving abilities.'
  },
  {
    icon: Mic,
    title: 'Podcast Editors',
    description: 'Skilled editors who enhance audio quality, clarity, and coherence. They use professional software and storytelling flair to produce engaging podcasts that resonate with listeners.'
  },
  {
    icon: Megaphone,
    title: 'Marketing Specialists',
    description: 'Strategists who develop and execute marketing campaigns. They analyze trends, identify audiences, and manage content/social media to promote your brand and drive growth.'
  },
  {
    icon: Wrench,
    title: 'Tech Support',
    description: 'Specialists who assist customers with technical issues, troubleshooting problems and guiding users through processes to deliver effective support and enhance customer experience.'
  },
  {
    icon: UserSearch,
    title: 'Recruiters',
    description: 'Experts in sourcing, screening, and selecting qualified candidates. They manage the entire recruitment process to find top talent aligned with your organization\'s culture and goals.'
  },
  {
    icon: Filter,
    title: 'PreQualifiers',
    description: 'Sales prequalifiers identify and qualify potential leads before they reach the sales team, assessing budget, needs, and readiness to ensure efficient sales pipelines.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Services We Can <span className="text-primary">Provide For You</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            At Caliber Business Resource, we offer a comprehensive suite of outsourcing solutions.
            From specialized technical roles to essential operational support, we build the team you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                group relative p-8 rounded-2xl transition-all duration-300
                ${service.highlight
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-[0_0_30px_-10px_rgba(255,193,7,0.15)]'
                  : 'bg-card/40 backdrop-blur-sm border border-white/5 hover:bg-card/60 hover:border-white/10 hover:shadow-xl hover:-translate-y-1'
                }
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110
                ${service.highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'}
              `}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-primary' : 'text-white group-hover:text-primary transition-colors'}`}>
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
