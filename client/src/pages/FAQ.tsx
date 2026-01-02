import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Page: FAQ
 */

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        q: "What is CYLOES?",
        a: "CYLOES is a forward-thinking technology startup dedicated to unlocking the power of data through intelligent, scalable, and future-ready solutions. We specialize in web scraping, cloud services, custom software development, API development, security solutions, and mobile app development.",
      },
      {
        q: "What is your company slogan?",
        a: "Our slogan is 'Intelligence That Accelerates' - reflecting our commitment to creating solutions that not only solve today's challenges but also drive tomorrow's possibilities.",
      },
      {
        q: "How long has CYLOES been in business?",
        a: "CYLOES was founded with a clear purpose to solve real-world data challenges. We've grown from a passion project into a forward-thinking startup serving clients across various industries.",
      },
    ],
  },
  {
    category: "Web Scraping",
    questions: [
      {
        q: "What is web scraping and why do I need it?",
        a: "Web scraping is the automated extraction of data from websites. It's valuable for price monitoring, market research, lead generation, real estate data collection, job posting aggregation, and competitive intelligence.",
      },
      {
        q: "Is web scraping legal?",
        a: "Web scraping legality depends on the website's terms of service and local laws. We ensure all our scraping solutions respect robots.txt, rate limiting, and terms of service while maximizing data quality and compliance.",
      },
      {
        q: "What technologies do you use for web scraping?",
        a: "We use industry-leading tools including BeautifulSoup, Scrapy, Selenium, Puppeteer, and Playwright. Our solutions handle everything from static HTML parsing to JavaScript-rendered content.",
      },
      {
        q: "How much data can you scrape?",
        a: "Our solutions are designed for large-scale data extraction. We can handle millions of records efficiently with optimized algorithms and distributed processing. Custom solutions available for enterprise-scale needs.",
      },
    ],
  },
  {
    category: "Cloud Services",
    questions: [
      {
        q: "Which cloud providers do you work with?",
        a: "We have deep expertise with all major cloud providers: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We can help you choose the right platform for your needs.",
      },
      {
        q: "What is cloud migration and why should I do it?",
        a: "Cloud migration is moving your infrastructure and applications from on-premises to the cloud. Benefits include cost savings, improved scalability, better security, and access to advanced services.",
      },
      {
        q: "How long does a cloud migration take?",
        a: "Timeline depends on your current infrastructure complexity and data volume. We typically follow a phased approach: assessment (2-4 weeks), planning (2-4 weeks), execution (4-12 weeks), and optimization (ongoing).",
      },
      {
        q: "Will there be downtime during migration?",
        a: "We design migration strategies to minimize downtime. Our approach includes parallel running, failover mechanisms, and careful sequencing to ensure business continuity.",
      },
    ],
  },
  {
    category: "API Development",
    questions: [
      {
        q: "What's the difference between REST and GraphQL APIs?",
        a: "REST uses standard HTTP methods and resource-based URLs, offering simplicity and maturity. GraphQL allows clients to request exactly the data they need, offering flexibility and efficiency. The choice depends on your specific use case.",
      },
      {
        q: "How do you ensure API security?",
        a: "We implement OAuth 2.0, JWT authentication, API keys, rate limiting, encryption (TLS/SSL), and role-based access control. We also conduct security audits and follow OWASP guidelines.",
      },
      {
        q: "Can you integrate with third-party services?",
        a: "Yes, we specialize in seamless integration with payment gateways, CRM systems, analytics platforms, and other services. We handle authentication, data mapping, and error handling.",
      },
      {
        q: "What documentation do you provide?",
        a: "We provide comprehensive interactive Swagger/OpenAPI documentation with code examples, endpoint descriptions, authentication details, and error responses.",
      },
    ],
  },
  {
    category: "Security",
    questions: [
      {
        q: "What security services do you offer?",
        a: "We offer security audits, penetration testing, encryption implementation, threat monitoring, compliance management (GDPR, HIPAA, PCI-DSS), and incident response services.",
      },
      {
        q: "What compliance standards do you support?",
        a: "We support ISO 27001, NIST Cybersecurity Framework, CIS Controls, GDPR, HIPAA, PCI-DSS, and SOC 2. We can help you achieve and maintain compliance.",
      },
      {
        q: "How often should we conduct security audits?",
        a: "We recommend annual comprehensive audits at minimum, with quarterly vulnerability scans and continuous monitoring. Frequency may increase based on your industry and risk profile.",
      },
      {
        q: "What happens if we experience a security breach?",
        a: "We provide rapid incident response services including forensic analysis, containment, recovery, and post-incident reporting to help you understand what happened and prevent future incidents.",
      },
    ],
  },
  {
    category: "Mobile Development",
    questions: [
      {
        q: "Should I build native or cross-platform apps?",
        a: "Native apps (Swift for iOS, Kotlin for Android) offer best performance and platform features. Cross-platform (React Native, Flutter) saves development time and cost. We help you choose based on your requirements.",
      },
      {
        q: "How long does it take to develop a mobile app?",
        a: "Timeline varies: MVP (3-4 months), full-featured app (6-9 months), enterprise app (9-12+ months). Factors include complexity, features, platforms, and testing requirements.",
      },
      {
        q: "Do you handle app store submission?",
        a: "Yes, we provide complete guidance through App Store and Google Play submission processes, including app review preparation, compliance checks, and optimization for app store algorithms.",
      },
      {
        q: "What's included in post-launch support?",
        a: "We offer bug fixes, performance optimization, feature enhancements, OS updates compatibility, analytics integration, and user support.",
      },
    ],
  },
  {
    category: "Pricing & Engagement",
    questions: [
      {
        q: "How do you price your services?",
        a: "We offer flexible pricing models: fixed-price projects, time-and-materials, retainer agreements, and custom enterprise contracts. We provide detailed quotes after understanding your requirements.",
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes, we offer free initial consultations to understand your needs, discuss solutions, and provide recommendations.",
      },
      {
        q: "What's your typical project engagement process?",
        a: "Process: Initial consultation → Requirements gathering → Proposal & quote → Project kickoff → Development with regular updates → Testing & QA → Deployment → Post-launch support.",
      },
      {
        q: "Can we start with a pilot project?",
        a: "Absolutely. Many clients prefer starting with a pilot or MVP to validate the approach before full-scale implementation. We can structure engagements this way.",
      },
    ],
  },
];

export default function FAQ() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services, pricing, and engagement process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-3xl font-bold text-foreground mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, qIdx) => {
                    const globalIndex = catIdx * 100 + qIdx;
                    const isExpanded = expandedIndex === globalIndex;

                    return (
                      <div
                        key={qIdx}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-lg border border-border hover:border-accent transition-all"
                      >
                        <button
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : globalIndex)
                          }
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-bold text-foreground text-lg">
                            {item.q}
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-accent transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-6 py-4 border-t border-border bg-white">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
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
              Didn't Find Your Answer?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team. We're here to help answer any questions you have.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Schedule Call
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
