import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Database, Zap, Shield, BarChart3, Clock } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Service Page: Web Scraping
 */

export default function WebScraping() {
  const [isScrolled, setIsScrolled] = useState(false);

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
              IT Services
            </span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="/#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
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

        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Web Scraping & <span className="text-accent">Data Extraction</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Automate data collection from websites. Extract, aggregate, and analyze data at scale with our intelligent scraping solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/images/web-scraping-service.jpg"
              alt="Web Scraping"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Powerful Scraping Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced tools and techniques for reliable, scalable data extraction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Database className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Large-Scale Data Extraction</h3>
              <p className="text-muted-foreground">
                Extract millions of records efficiently with optimized algorithms and distributed processing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">
                Continuous scraping with automated alerts for price changes, inventory updates, and more.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Ethical & Legal Compliance</h3>
              <p className="text-muted-foreground">
                Respects robots.txt, rate limiting, and terms of service while maximizing data quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Data Processing & Cleaning</h3>
              <p className="text-muted-foreground">
                Automatic data validation, deduplication, and transformation into structured formats.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Scheduled Automation</h3>
              <p className="text-muted-foreground">
                Set up recurring scraping jobs that run automatically on your schedule.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Database className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Multiple Data Formats</h3>
              <p className="text-muted-foreground">
                Export to CSV, JSON, XML, SQL databases, or directly to your data warehouse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Real-World Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Price Monitoring</h3>
                  <p className="text-gray-300">
                    Track competitor pricing in real-time and adjust your strategy dynamically.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Market Research</h3>
                  <p className="text-gray-300">
                    Gather insights on market trends, competitor offerings, and customer sentiment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Lead Generation</h3>
                  <p className="text-gray-300">
                    Extract business contact information and build targeted prospect lists.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Real Estate Data</h3>
                  <p className="text-gray-300">
                    Collect property listings, prices, and market data for analysis and investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Job Postings Aggregation</h3>
                  <p className="text-gray-300">
                    Collect job listings from multiple sources for career platforms and analytics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Social Media Monitoring</h3>
                  <p className="text-gray-300">
                    Track brand mentions, sentiment, and engagement across social platforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">News & Content Aggregation</h3>
                  <p className="text-gray-300">
                    Automatically collect and organize news articles and content from multiple sources.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">SEO & Link Analysis</h3>
                  <p className="text-gray-300">
                    Extract SEO data, backlinks, and competitor analysis for optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Our Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Scraping Technologies</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>BeautifulSoup & Scrapy</strong> - Python-based scraping frameworks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Selenium & Puppeteer</strong> - JavaScript rendering and automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Playwright</strong> - Cross-browser automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Proxy Networks</strong> - Rotating IPs for large-scale scraping</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Data Management</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>PostgreSQL & MongoDB</strong> - Structured and unstructured storage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Apache Kafka</strong> - Real-time data streaming</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>AWS S3 & Data Lakes</strong> - Scalable cloud storage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Elasticsearch</strong> - Fast data indexing and search</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Pricing Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border hover:border-accent transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Small-scale projects</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$1,999</span>
                <p className="text-muted-foreground">/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 10K records/month</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">1 data source</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">CSV export</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Email support</span>
                </li>
              </ul>
              <Button className="w-full border-accent text-accent hover:bg-accent/10" variant="outline">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-accent shadow-lg">
              <div className="bg-accent text-white px-3 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
              <p className="text-muted-foreground mb-6">Growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$4,999</span>
                <p className="text-muted-foreground">/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 100K records/month</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 5 data sources</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Database integration</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-accent text-foreground hover:bg-accent/90">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border hover:border-accent transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Large-scale operations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">Custom</span>
                <p className="text-muted-foreground">Contact for quote</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Unlimited records</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Unlimited sources</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 support</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Dedicated team</span>
                </li>
              </ul>
              <Button className="w-full border-accent text-accent hover:bg-accent/10" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Start Extracting Data Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your data extraction needs and build a custom scraping solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">IT Services</h3>
              <p className="text-gray-400 text-sm">
                Transforming businesses through innovative IT solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">All Services</a></li>
                <li><a href="/custom-websites" className="hover:text-accent transition-colors">Custom Websites</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cloud Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 IT Services. All rights reserved.</p>
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
