import { Building2, Target, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: 'Chrissa B. Ranis',
    role: 'Founder & Chairman of the Board',
    image: 'https://static.wixstatic.com/media/f7febc_a1b792c3db914646a684e5977ef24079~mv2.png',
    description: 'With years of top-level executive experience, Chrissa has a proven track record of leading teams to achieve their strategic and growth objectives. She is recognized in the Philippine BPO Industry with her comprehensive understanding of business operations, strategic planning and being a naturally-balanced mix of an Integrator and Visionary.'
  },
  {
    name: 'Atty. Euchrissa Theresa Ladrera',
    role: 'Corporate Secretary',
    image: 'https://static.wixstatic.com/media/f7febc_e4043ffa488c4e8bb20e2161309c551a~mv2.png',
    description: 'A versatile young attorney with a diverse skill set, she is an invaluable part of Caliber Business Resource as Corporate Secretary. A graduate of the University of the Philippines - Cebu, Atty. Ladrera brings a robust legal background and experience as a Virtual Lawyer Associate for a prominent US law firm.'
  },
  {
    name: 'Bertch Ian Ranis',
    role: 'Director for Marketing',
    image: 'https://static.wixstatic.com/media/f7febc_6200886257be4ac3a3ae72b223447014~mv2.png',
    description: 'Bertch is an esteemed leader and visionary himself, in the realm of business and marketing. He is also currently serving as the Chairman and Managing Director of Fil-Global Immigration Services, which has been in the business for 10 years. He brings a wealth of experience and expertise to his role.'
  },
  {
    name: 'Laureen Lejarde',
    role: 'Director for Operations',
    image: 'https://static.wixstatic.com/media/f7febc_8ed0a335fcca45ca9d5d1c515396acc5~mv2.png',
    description: 'Laureen is a virtual powerhouse, with over 15 years of diverse experience in Customer Relationship Management, Training, Product Development, Technical Recruitment, Project Management, and BPO Operations. Currently serving as the Head of Customer Success for Fire Recruitment Services in Australia.'
  },
  {
    name: 'Joanne Apat',
    role: 'Business Development Partner',
    image: 'https://static.wixstatic.com/media/f7febc_0c5bfa96f23c45d289519e7c7ee9b9a6~mv2.png',
    description: 'Joanne has an extensive background in client and project management, technology, data privacy, and cybersecurity. Joanne is the third president of the Bohol ICT and served as a Board Trustee of the National ICT Confederation of the Philippines, showcasing her leadership in digital innovation.'
  }
];

const ethos = [
  { letter: 'R', text: 'Rise by lifting Entrepreneurs' },
  { letter: 'I', text: 'Inspire Ideals through Strategy and Efficiency' },
  { letter: 'S', text: 'Sustain Growth with Reliable Support' },
  { letter: 'E', text: 'Empower Businesses with Exceptional Service' }
];

const values = [
  {
    icon: Building2,
    title: 'Professional Excellence',
    description: 'We maintain the highest standards in everything we do, delivering exceptional service to our clients and creating a workplace where excellence thrives.'
  },
  {
    icon: Target,
    title: 'Growth & Development',
    description: 'We invest in our people through continuous training, mentorship programs, and clear career progression paths.'
  },
  {
    icon: Heart,
    title: 'Collaborative Culture',
    description: 'We foster a supportive environment where teamwork, respect, and open communication are valued by everyone.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  At Caliber Business Resource Incorporated, we are dedicated to transforming the way businesses 
                  approach remote staffing and operational support. CBR was founded not only from a passion for 
                  business innovation, but also from a God-given desire to be a blessing to our people and our nation.
                </p>
                <p>
                  We specialize in building high-performing, customized teams through our micro call center offices 
                  located in both the vibrant cities and the quieter, yet equally talented, heartlands of the Philippine Islands.
                </p>
                <p>
                  We live by the name CALIBER—not just in the level of our skill, but in the integrity of our character. 
                  Everything we do is done with excellence, with a servant heart, and with the understanding that this 
                  work is a stewardship entrusted to us.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://static.wixstatic.com/media/f7febc_763f8ee9df414938b21b295b1d2d4320f000.jpg"
                alt="Our Office"
                className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Message from CEO */}
        <div className="mb-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Message from the CEO</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Caliber Business Resource Incorporated (CBR) was born out of a deeper purpose—a calling placed 
                  in our hearts by God. What began as a business idea quickly became a mission: to give back to our 
                  fellow Filipinos and, above all, to glorify Him through our work.
                </p>
                <p>
                  Every decision we make and every partnership we build is rooted in that calling. We believe that 
                  when we put God first, everything else follows. We don&apos;t have to chase blessings—they will come 
                  running after us, because that&apos;s God&apos;s promise.
                </p>
                <blockquote className="border-l-4 border-accent pl-4 italic text-primary font-medium my-6">
                  &quot;But seek first the kingdom of God and his righteousness, and all these things will be added to you.&quot;
                  <span className="block mt-2 text-sm not-italic text-foreground/60">— Matthew 6:33 (ESV)</span>
                </blockquote>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://static.wixstatic.com/media/f7febc_c693a9a4ad8a4397a3c44a9d13967d5f~mv2.png"
                alt="CEO"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Our Awesome Team */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Awesome Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-[320px] w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-white/90">
              Our vision is to be a game-changer, leader in micro call center solutions, offering the simplest 
              business solutions and robust manpower resources tailored for thriving business enterprises.
            </p>
          </div>
          <div className="bg-accent text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-white/90">
              Driven by our vision, we aim to provide unparalleled micro call center and backend solutions, 
              enabling small to medium-sized businesses to achieve strategic clarity and expand their market 
              presence while we manage the operational intricacies.
            </p>
          </div>
        </div>

        {/* Our Ethos - RISE */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">Our Ethos</h2>
          <p className="text-center text-foreground/70 mb-8">At Caliber Business Resource, we embody the ethos of RISE:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethos.map((item) => (
              <div
                key={item.letter}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{item.letter}</span>
                </div>
                <p className="text-foreground/80 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join Us - Values */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Why Join Caliber Business Resource?
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  At Caliber Business Resource, we believe that our success is driven by our people. 
                  We&apos;re committed to creating an environment where talented individuals can thrive, 
                  grow their careers, and make a meaningful impact. Join us and be part of a team 
                  that values innovation, collaboration, and professional development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-xl md:text-2xl font-medium mb-4">&quot;You build your business, we build your team&quot;</p>
          <p className="text-white/90 max-w-3xl mx-auto">
            With our quality control system and agents reporting to on-site offices, we ensure your operations 
            run smoothly and efficiently according to your set standards.
          </p>
        </div>
      </div>
    </section>
  );
}
