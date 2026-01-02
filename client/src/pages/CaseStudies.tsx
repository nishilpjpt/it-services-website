import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Page: Case Studies
 */

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Price Monitoring System",
    client: "Global Retail Chain",
    industry: "E-Commerce",
    service: "Web Scraping",
    description: "Built a real-time price monitoring system that tracks competitor prices across 50+ e-commerce platforms.",
    challenge: "The client needed to monitor competitor pricing across multiple platforms in real-time to stay competitive. Manual monitoring was time-consuming and error-prone.",
    solution: "We developed a scalable web scraping solution using Scrapy that automatically collects pricing data from 50+ competitors every hour. The system uses intelligent proxy rotation to avoid detection and handles dynamic JavaScript-rendered content.",
    results: [
      "Reduced pricing analysis time by 95%",
      "Enabled dynamic pricing strategy adjustments",
      "Increased competitive market share by 23%",
      "Saved $500K annually in manual labor",
    ],
    technologies: ["Python", "Scrapy", "PostgreSQL", "AWS Lambda", "Redis"],
    testimonial: {
      author: "Sarah Johnson",
      role: "VP of Operations",
      text: "CYLOES transformed how we approach competitive pricing. The automated system gives us real-time insights that have directly impacted our bottom line.",
      image: "/images/hero-tech-abstract.jpg",
    },
  },
  {
    id: 2,
    title: "Cloud Migration for Financial Services",
    client: "Regional Bank",
    industry: "Financial Services",
    service: "Cloud Services",
    description: "Successfully migrated legacy banking infrastructure to AWS with zero downtime and improved security compliance.",
    challenge: "The bank's on-premises infrastructure was aging, expensive to maintain, and didn't meet modern compliance requirements. Migration had to happen with zero downtime.",
    solution: "We executed a phased cloud migration strategy, moving databases, applications, and services to AWS. We implemented multi-region redundancy, automated backups, and enhanced security controls including encryption and VPC isolation.",
    results: [
      "40% reduction in infrastructure costs",
      "99.99% uptime achieved",
      "Full HIPAA compliance",
      "Deployment time reduced from hours to minutes",
    ],
    technologies: ["AWS", "RDS", "EC2", "S3", "CloudFormation", "Terraform"],
    testimonial: {
      author: "Michael Chen",
      role: "CTO",
      text: "The migration was seamless. CYLOES's expertise in financial services and cloud architecture gave us confidence throughout the process.",
      image: "/images/cloud-services.jpg",
    },
  },
  {
    id: 3,
    title: "Custom SaaS Platform for Project Management",
    client: "Digital Agency",
    industry: "Software as a Service",
    service: "Custom Websites",
    description: "Developed a full-featured SaaS platform for project management with real-time collaboration features.",
    challenge: "The agency needed a custom project management tool tailored to their workflow. Existing solutions didn't meet their specific requirements.",
    solution: "We built a modern SaaS platform using React, Node.js, and PostgreSQL. Features include real-time collaboration, task management, time tracking, reporting, and integrations with popular tools like Slack and GitHub.",
    results: [
      "Reduced project overhead by 30%",
      "Improved team productivity by 40%",
      "Generated $2M in new revenue",
      "Onboarded 500+ clients in first year",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WebSockets", "Docker", "AWS"],
    testimonial: {
      author: "Emily Rodriguez",
      role: "Founder & CEO",
      text: "CYLOES didn't just build software—they understood our business and created a platform that scales with us. Highly recommended.",
      image: "/images/custom-websites.jpg",
    },
  },
  {
    id: 4,
    title: "Real Estate Data Aggregation Platform",
    client: "Real Estate Investment Firm",
    industry: "Real Estate",
    service: "Web Scraping & API Development",
    description: "Created a comprehensive data aggregation platform that collects and analyzes real estate listings from multiple sources.",
    challenge: "The firm needed to aggregate real estate data from dozens of sources to identify investment opportunities. Manual data collection was inefficient.",
    solution: "We built a web scraping system that collects data from MLS, Zillow, Redfin, and other sources. We developed a REST API that provides normalized data access and built a dashboard for analysis and reporting.",
    results: [
      "Automated data collection from 50+ sources",
      "Identified investment opportunities 3x faster",
      "Reduced research time by 80%",
      "Enabled data-driven investment decisions",
    ],
    technologies: ["Python", "Scrapy", "Node.js", "MongoDB", "React", "AWS"],
    testimonial: {
      author: "David Park",
      role: "Investment Director",
      text: "The platform has been instrumental in our investment strategy. We're now able to identify opportunities that competitors miss.",
      image: "/images/web-scraping-service.jpg",
    },
  },
];

export default function CaseStudies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (selectedStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="container flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">IT</span>
              </div>
              <span className="font-bold text-xl text-foreground hidden sm:inline">
                CYLOES
              </span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm font-medium hover:text-accent transition-colors">
                Home
              </a>
              <a href="/case-studies" className="text-sm font-medium hover:text-accent transition-colors">
                Case Studies
              </a>
              <a href="/contact-us" className="text-sm font-medium hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Case Study Details */}
        <article className="pt-32 md:pt-40 pb-20 md:pb-32">
          <div className="container max-w-4xl">
            <button
              onClick={() => setSelectedStudy(null)}
              className="text-accent font-semibold mb-8 hover:gap-2 inline-flex items-center gap-1 transition-all"
            >
              ← Back to Case Studies
            </button>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedStudy.service}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                  {selectedStudy.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {selectedStudy.client} • {selectedStudy.industry}
                </p>
              </div>

              <img
                src={selectedStudy.testimonial.image}
                alt={selectedStudy.title}
                className="w-full h-96 object-cover rounded-lg"
              />

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-foreground">Impact</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {selectedStudy.results[0]}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-foreground">Solution</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {selectedStudy.technologies.slice(0, 2).join(", ")}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-foreground">Client</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {selectedStudy.client}
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedStudy.challenge}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedStudy.solution}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Results</h2>
                  <ul className="space-y-3">
                    {selectedStudy.results.map((result, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg border border-accent/20">
                <div className="flex gap-4 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-lg text-foreground mb-4 italic">
                  "{selectedStudy.testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{selectedStudy.testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{selectedStudy.testimonial.role}</p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <Button
                  onClick={() => setSelectedStudy(null)}
                  className="bg-accent text-foreground hover:bg-accent/90"
                >
                  Back to Case Studies
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">CYLOES</h3>
                <p className="text-gray-400 text-sm">
                  Intelligence That Accelerates. Transforming data into actionable insights.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                  <li><a href="/#services" className="hover:text-accent transition-colors">Services</a></li>
                  <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/about-us" className="hover:text-accent transition-colors">About Us</a></li>
                  <li><a href="/careers" className="hover:text-accent transition-colors">Careers</a></li>
                  <li><a href="/contact-us" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
                  <li><a href="/faq" className="hover:text-accent transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-center text-sm text-gray-400">&copy; 2024 CYLOES. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold text-lg">IT</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">
              CYLOES
            </span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </a>
            <a href="/#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="/contact-us" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
            <Button className="bg-accent text-foreground hover:bg-accent/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />

        <div className="container space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Case <span className="text-accent">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how we've helped businesses transform their operations with intelligent technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedStudy(study)}
              >
                <img
                  src={study.testimonial.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-8">
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {study.service}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {study.client} • {study.industry}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {study.description}
                  </p>
                  <button className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how CYLOES can help transform your business with intelligent technology solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">CYLOES</h3>
              <p className="text-gray-400 text-sm">
                Intelligence That Accelerates. Transforming data into actionable insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">All Services</a></li>
                <li><a href="/custom-websites" className="hover:text-accent transition-colors">Custom Websites</a></li>
                <li><a href="/web-scraping" className="hover:text-accent transition-colors">Web Scraping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about-us" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="/careers" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="/contact-us" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="/faq" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 CYLOES. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-accent transition-colors">Twitter</a>
                <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-accent transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
