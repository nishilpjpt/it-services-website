import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, DollarSign, Clock } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Page: Careers
 */

const jobPostings = [
  {
    id: 1,
    title: "Web Scraping Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "We're looking for an experienced Web Scraping Engineer to join our data engineering team. You'll design and build scalable data extraction systems that power our clients' business intelligence.",
    responsibilities: [
      "Design and develop web scraping solutions using Python and Scrapy framework",
      "Build robust data pipelines that handle millions of records efficiently",
      "Implement error handling, logging, and monitoring for production systems",
      "Optimize scraping performance and manage proxy networks",
      "Collaborate with clients to understand data requirements and deliver solutions",
      "Maintain code quality through testing, documentation, and code reviews",
    ],
    requirements: [
      "5+ years of experience with Python programming",
      "Expert-level knowledge of Scrapy framework",
      "Experience with BeautifulSoup, Selenium, or similar scraping libraries",
      "Understanding of HTTP, HTML, and web technologies",
      "Experience with databases (PostgreSQL, MongoDB) and data warehouses",
      "Knowledge of distributed systems and cloud platforms (AWS, GCP, Azure)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork abilities",
    ],
    niceToHave: [
      "Experience with machine learning or NLP",
      "Knowledge of proxy management and rotating IPs",
      "Experience with Docker and Kubernetes",
      "Contributions to open-source projects",
      "Experience with Apache Kafka or similar streaming platforms",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health insurance (medical, dental, vision)",
      "Unlimited PTO and flexible work arrangements",
      "Remote work options",
      "Professional development budget",
      "Collaborative and innovative work environment",
      "Latest tools and technologies",
    ],
  },
];

export default function Careers() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobPostings[0] | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (selectedJob) {
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
              <a href="/careers" className="text-sm font-medium hover:text-accent transition-colors">
                Careers
              </a>
              <a href="/contact-us" className="text-sm font-medium hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Job Details */}
        <div className="pt-32 md:pt-40 pb-20 md:pb-32">
          <div className="container max-w-4xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="text-accent font-semibold mb-8 hover:gap-2 inline-flex items-center gap-1 transition-all"
            >
              ← Back to Careers
            </button>

            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                  {selectedJob.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {selectedJob.department}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Location</span>
                  </div>
                  <p className="font-semibold text-foreground">{selectedJob.location}</p>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">Type</span>
                  </div>
                  <p className="font-semibold text-foreground">{selectedJob.type}</p>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Salary</span>
                  </div>
                  <p className="font-semibold text-foreground">{selectedJob.salary}</p>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Posted</span>
                  </div>
                  <p className="font-semibold text-foreground">Recently</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About This Role</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h3>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">•</span>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Required Qualifications</h3>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">✓</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nice to Have</h3>
                  <ul className="space-y-3">
                    {selectedJob.niceToHave.map((nice, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">◆</span>
                        <span className="text-muted-foreground">{nice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    {selectedJob.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">★</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-8">
                  <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Help us build the future of intelligent data solutions. We're hiring talented engineers and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {jobPostings.map((job) => (
              <div
                key={job.id}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground">{job.department}</p>
                  </div>
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {job.type}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {job.description}
                </p>

                <button className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
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
              Don't See Your Role?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to CYLOES.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Send Your Resume
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
