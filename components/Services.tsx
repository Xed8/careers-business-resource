import { 
  Headphones, 
  Database, 
  Calculator, 
  Users, 
  Mic, 
  Megaphone, 
  Wrench, 
  UserSearch,
  Filter
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Sales Support',
    description: 'Agents in sales support roles assist in generating revenue by nurturing leads, following up on inquiries, and closing sales. They possess strong communication and persuasion skills to effectively convey product or service benefits, ultimately contributing to the growth and profitability of the organization.'
  },
  {
    icon: Database,
    title: 'Data Entry/Admin Support',
    description: 'Agents in data entry and admin support roles play a vital role in maintaining organizational efficiency by managing data entry tasks, processing documents, and providing administrative support. Their attention to detail, organizational skills, and proficiency in office software ensure accurate data management and streamlined administrative processes.'
  },
  {
    icon: Calculator,
    title: 'Accounting and Bookkeeping',
    description: 'A comprehensive Accounting and Bookkeeping services tailored to meet the financial management needs of businesses. Our skilled professionals handle everything from day-to-day transactions to financial reporting and analysis, ensuring accuracy and compliance. By leveraging their expertise, Caliber Business Resource supports businesses in maintaining clear financial records and making informed decisions to drive growth and success.'
  },
  {
    icon: Headphones,
    title: 'Customer Service',
    description: 'Customer service agents are dedicated to ensuring customer satisfaction by addressing inquiries, resolving issues, and providing support across various channels. They embody the brand\'s values through empathy, problem-solving abilities, and a customer-centric approach, fostering loyalty and positive relationships with clients.'
  },
  {
    icon: Mic,
    title: 'Podcast Editors',
    description: 'Podcast editors are skilled in editing audio content to enhance quality, clarity, and coherence. They possess technical proficiency in audio editing software, creative flair for storytelling, and attention to detail to produce engaging and professional podcasts that resonate with listeners.'
  },
  {
    icon: Megaphone,
    title: 'Marketing Specialists',
    description: 'A full-time Caliber Marketing Specialist can be responsible for developing and executing marketing strategies to promote products, services, or brands. They analyze market trends, identify target audiences, create marketing campaigns, and monitor performance to optimize results. Their tasks often include content creation, social media management, market research, and coordinating with sales teams to ensure alignment with business goals.'
  },
  {
    icon: Wrench,
    title: 'Tech Support',
    description: 'Tech support agents specialize in assisting customers with technical issues related to products or services. They troubleshoot problems, offer solutions, and guide users through technical processes, leveraging their expertise in technology and communication to deliver effective support and enhance customer experience.'
  },
  {
    icon: UserSearch,
    title: 'Recruiters',
    description: 'Recruiters are responsible for sourcing, screening, and selecting qualified candidates to fill job openings within the organization. They manage the recruitment process from start to finish, including job posting, candidate sourcing, interviewing, and onboarding. Recruiters leverage their expertise in talent acquisition and relationship-building to attract top talent aligned with the organization\'s culture and objectives.'
  },
  {
    icon: Filter,
    title: 'PreQualifiers',
    description: 'A Prequalifier in sales is responsible for identifying and qualifying potential leads before they are passed on to the sales team. Their role involves assessing whether leads meet specific criteria, such as budget, needs, and readiness to purchase. This ensures that sales representatives focus their efforts on leads that are more likely to convert.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Services We Can Provide For You
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            At Caliber Business Resource, we offer a wide range of services to meet your operational needs. 
            From Sales Support to Customer Service, Tech Support to Email, Data Entry/Admin Support, and 
            even Recruitment – we handle all aspects of employing and retaining your team in the Philippines, 
            ensuring you can focus on your core strengths.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
