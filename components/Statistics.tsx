import { TrendingUp, Shield, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: '$27',
    label: 'Billion',
    description: 'Industry',
    detail: 'The Philippines outsourcing industry revenue reached $27 billion USD in 2023. (Source: Statista)'
  },
  {
    icon: Shield,
    value: '65%',
    label: 'Quality Issues Fixed',
    description: 'Quality Improvement',
    detail: 'According to Harvard Business Review, 65% of businesses cite quality issues in remote/virtual outsourcing as a significant challenge.'
  },
  {
    icon: TrendingUp,
    value: '80%',
    label: 'Cost Reduction',
    description: 'Savings Achieved',
    detail: 'Deloitte reports that businesses can achieve up to 80% cost savings by using micro call centers. (Source: Deloitte)'
  }
];

const approaches = [
  {
    title: 'SUPER SAVER OVERHEAD COST',
    points: [
      'Achieve up to 80% savings on labor costs through strategic and affordable outsourcing.',
      'Strategic Location for our Staff avoiding rising cost of living in the bigger cities and fast turn-over of Staff due to tough competitors in saturated regular BPO companies'
    ]
  },
  {
    title: 'ENHANCE PROFIT THROUGH FOCUSED AND QUALITY SERVICE',
    points: [
      'Bridge skill gaps and optimize internal processes with our on-site remote staffing',
      'Access global talent pools to elevate service quality and operational efficiency, boosting profitability and brand reputation.',
      'Redirect resources towards innovation and core activities for enhanced competitiveness and profitability.'
    ]
  },
  {
    title: 'SCALE FASTER',
    points: [
      'Tailor offshore operations to quickly meet market demand and scale operations.',
      'Combat rising labor costs and access specialized talent without additional overhead expenses.'
    ]
  }
];

export default function Statistics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-foreground/60 mb-4">{stat.description}</div>
              <p className="text-xs text-foreground/50">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Our Unique Approach */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Unique Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div
                key={approach.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-primary mb-4">{approach.title}</h3>
                <ul className="space-y-3">
                  {approach.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Did You Know */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold mb-6">Did you know?</h3>
          <div className="space-y-4 text-white/90">
            <p>
              The Philippines is a hub for the booming Call Center Industry, known for its skilled workforce 
              and cost-effective solutions. In 2023, the Philippines outsourcing industry revenue reached 
              <span className="font-bold text-accent"> $27 billion USD</span>. (Source: Statista)
            </p>
            <p>
              Many businesses struggle due to insufficient leveraging and lack of quality control, which our 
              services address directly. According to Harvard Business Review, 
              <span className="font-bold text-accent"> 65% of businesses</span> cite quality issues in 
              remote/virtual outsourcing as a significant challenge with the lack of proper monitoring and support.
            </p>
            <p>
              Micro call centers offer optimal operational efficiency, making them ideal for small and medium 
              businesses seeking to streamline their processes. Deloitte reports that businesses can achieve up to 
              <span className="font-bold text-accent"> 80% cost savings</span> by using micro call centers. 
              (Source: Deloitte)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
