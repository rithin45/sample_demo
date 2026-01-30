import React, { useState, useEffect } from "react";
import headImage from "../assets/background-2.jpg";
import prof1 from "../assets/profiles/imm1.png"
import prof2 from "../assets/profiles/imm2.png"
import prof3 from "../assets/profiles/imm3.png"


const Serv = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: "🎨",
      title: "Brand Strategy",
      description: "Develop comprehensive brand strategies that resonate with your target audience",
      features: ["Market Analysis", "Brand Positioning", "Identity Design"]
    },
    {
      icon: "🌐",
      title: "Digital Solutions",
      description: "Create powerful digital experiences that drive engagement and conversions",
      features: ["Web Design", "App Development", "Digital Marketing"]
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Unlock insights from your data to make informed business decisions",
      features: ["Analytics", "Reporting", "Optimization"]
    },
    {
      icon: "🎬",
      title: "Content Creation",
      description: "Produce engaging content that tells your brand story effectively",
      features: ["Video Production", "Photography", "Copywriting"]
    }
  ];
    const testimonials = [
    {
      client: "TechCorp Solutions",
      quote:
        "Outstanding service! They delivered beyond our expectations and increased our revenue by 45%.",
      author: "John Smith",
      role: "CEO",
      image: prof2,
    },
    {
      client: "Fashion Forward",
      quote:
        "Professional, creative, and detail-oriented. Best investment we made for our brand.",
      author: "Sarah Johnson",
      role: "Founder",
      image: prof1,
    },
    {
      client: "Global Marketing",
      quote:
        "Their strategic approach transformed our digital presence completely. Highly recommended!",
      author: "Mike Chen",
      role: "Director",
      image: prof3,
    },
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[200px] sm:h-[280px] md:h-[420px] flex items-end overflow-hidden w-full">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${headImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content with Motion */}
        <div 
          className="relative z-10 w-full"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0.3, 1 - scrollY / 500),
          }}
        >
          <div className="max-w-7xl mx-auto px-6 pb-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Services
            </h1>

            {/* Breadcrumb */}
            <nav className="mt-2">
              <ol className="flex space-x-2 text-sm md:text-base font-semibold">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>{">>"}</li>
                <li className="text-gray-200">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to elevate your business and achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-500 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-5xl md:text-6xl font-bold mb-3 animate-pulse">
                  {stat.number}
                </div>
                  <p className="text-lg text-amber-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology ensuring exceptional results every time
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { step: 1, title: "Consultation", desc: "Understand your needs and goals" },
              { step: 2, title: "Strategy", desc: "Develop tailored solutions" },
              { step: 3, title: "Execution", desc: "Deliver exceptional results" },
              { step: 4, title: "Support", desc: "Continuous optimization" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute ml-40 text-3xl text-blue-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl text-blue-500">✨</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Industry Expertise
                    </h3>
                    <p className="text-gray-600">
                      Decade of experience delivering results across diverse industries
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl text-blue-500">🎯</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Results-Driven
                    </h3>
                    <p className="text-gray-600">
                      Every strategy is focused on measurable outcomes and ROI
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl text-blue-500">🤝</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Partnership Approach
                    </h3>
                    <p className="text-gray-600">
                      We work closely with you as a true partner in your success
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-8">
                Let's discuss how our services can help you achieve your goals and exceed expectations.
              </p>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from clients who trusted us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-200"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 italic mb-6">
                  “{t.quote}”
                </p>

                {/* Client */}
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-slate-700">
                    {t.client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses achieve remarkable growth
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "E-commerce Transformation",
                company: "StyleHub Inc.",
                challenge: "Struggling with outdated website and low conversion rates",
                solution: "Complete website redesign with modern UX/UI and optimized checkout flow",
                result: "320% increase in conversion rate, $2.5M additional revenue in first year",
                image: "📈",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Brand Repositioning",
                company: "TechStart Innovations",
                challenge: "Lost market relevance due to unclear brand messaging",
                solution: "Strategic brand audit, new positioning, complete visual identity overhaul",
                result: "85% improvement in brand recognition, 150+ new clients acquired",
                image: "🎨",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Digital Marketing Success",
                company: "Global Services Ltd",
                challenge: "Low online visibility and poor lead generation",
                solution: "Integrated digital marketing strategy with SEO, PPC, and content marketing",
                result: "450% ROI on marketing spend, 5000+ qualified leads per month",
                image: "🚀",
                color: "from-green-500 to-teal-500"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div>
                  <div className={`bg-gradient-to-br ${caseStudy.color} text-white p-12 rounded-lg text-6xl flex items-center justify-center h-64 mb-6 md:mb-0`}>
                    {caseStudy.image}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">
                    Case Study
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h2>
                  <p className="text-gray-500 font-semibold mb-6">
                    {caseStudy.company}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-sm font-bold text-gray-600 mb-2">CHALLENGE</p>
                      <p className="text-gray-700">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-600 mb-2">SOLUTION</p>
                      <p className="text-gray-700">
                        {caseStudy.solution}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm font-bold text-gray-600 mb-2">RESULT</p>
                      <p className="text-lg font-bold text-blue-600">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven expertise across diverse sectors and business models
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏪", name: "E-Commerce", description: "Online retail and marketplace optimization" },
              { icon: "🏥", name: "Healthcare", description: "Medical practice and clinic services" },
              { icon: "💰", name: "Finance", description: "Banking and financial services" },
              { icon: "🎓", name: "Education", description: "EdTech and learning platforms" },
              { icon: "🏨", name: "Hospitality", description: "Hotels, restaurants, and tourism" },
              { icon: "⚙️", name: "Manufacturing", description: "Industrial and B2B solutions" }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-10px] group">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow with Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach ensuring optimal outcomes
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-500 to-gray-300"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  phase: "Discovery",
                  desc: "Deep dive into your business, goals, and challenges",
                  details: ["Market research", "Competitor analysis", "Goal setting"]
                },
                {
                  phase: "Strategy",
                  desc: "Develop comprehensive action plan and timeline",
                  details: ["Strategy workshop", "Roadmap creation", "Resource planning"]
                },
                {
                  phase: "Design",
                  desc: "Create visual concepts and prototypes",
                  details: ["Wireframing", "Design mockups", "User testing"]
                },
                {
                  phase: "Implementation",
                  desc: "Execute the plan with precision and care",
                  details: ["Development", "Content creation", "Quality assurance"]
                },
                {
                  phase: "Optimization",
                  desc: "Monitor, measure, and continuously improve",
                  details: ["Analytics review", "Performance tuning", "Ongoing support"]
                }
              ].map((phase, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {phase.phase}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {phase.desc}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {phase.details.map((detail, i) => (
                      <li key={i} className="flex justify-center items-center">
                        <span className="text-blue-500 mr-1">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { role: "Creative Directors", count: "8+", skill: "Brand & Design" },
              { role: "Tech Specialists", count: "12+", skill: "Development" },
              { role: "Strategists", count: "6+", skill: "Business Strategy" },
              { role: "Project Managers", count: "5+", skill: "Execution" }
            ].map((team, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-opacity-100 group">
                <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                  {team.count}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {team.role}
                </h3>
                <p className="text-gray-400">
                  {team.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. Typically, projects range from 2-12 weeks. We provide detailed timelines after the discovery phase."
              },
              {
                q: "How do you determine project costs?",
                a: "We provide custom quotes based on project requirements, scope, timeline, and team composition. We always offer transparent pricing with no hidden costs."
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes! We provide various support packages including maintenance, updates, monitoring, and optimization to ensure continued success."
              },
              {
                q: "Can you work with our existing team?",
                a: "Absolutely. We excel at collaborating with in-house teams and can seamlessly integrate into your existing workflow and processes."
              },
              {
                q: "What makes your approach different?",
                a: "We combine strategic thinking with creative excellence and technical expertise. Our client-centric approach ensures solutions that truly align with your business goals."
              }
            ].map((faq, index) => (
              <details key={index} className="group border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors duration-300 cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-gray-900 text-lg">
                  {faq.q}
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Join hundreds of satisfied clients who have transformed their business with our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .group:hover .animate-fade-in {
          animation: none;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Serv;
