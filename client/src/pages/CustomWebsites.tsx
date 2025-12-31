import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Smartphone, Zap, Shield, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Service Page: Custom Websites
 */

export default function CustomWebsites() {
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
                Custom Website <span className="text-accent">Development</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Build stunning, responsive websites tailored to your brand. From concept to deployment, we create digital experiences that convert visitors into customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/images/custom-websites.jpg"
              alt="Custom Websites"
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
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions designed for performance and user engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Code className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Modern Technology Stack</h3>
              <p className="text-muted-foreground">
                Built with React, Next.js, and latest frameworks for optimal performance and scalability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Smartphone className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Fully Responsive Design</h3>
              <p className="text-muted-foreground">
                Perfect display across all devices - mobile, tablet, and desktop with optimized user experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Lightning Fast Performance</h3>
              <p className="text-muted-foreground">
                Optimized for speed with lazy loading, CDN integration, and advanced caching strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground">
                SSL/TLS encryption, secure authentication, and compliance with industry standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">SEO Optimized</h3>
              <p className="text-muted-foreground">
                Built-in SEO best practices, meta tags, structured data, and sitemap generation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Easy Maintenance</h3>
              <p className="text-muted-foreground">
                Content management systems and admin dashboards for easy updates and content management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Services Included
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Website Design</h3>
                  <p className="text-gray-300">
                    Custom UI/UX design that reflects your brand identity and engages your audience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">E-Commerce Solutions</h3>
                  <p className="text-gray-300">
                    Complete online store setup with payment integration and inventory management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">CMS Integration</h3>
                  <p className="text-gray-300">
                    WordPress, Headless CMS, or custom solutions for easy content management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Third-Party Integration</h3>
                  <p className="text-gray-300">
                    Connect with payment gateways, analytics, CRM, and other business tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Performance Optimization</h3>
                  <p className="text-gray-300">
                    Image optimization, code splitting, and advanced caching for blazing-fast load times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Mobile App Development</h3>
                  <p className="text-gray-300">
                    Progressive Web Apps (PWA) and native mobile apps for iOS and Android.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                  <p className="text-gray-300">
                    Maintenance, updates, security patches, and technical support included.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Analytics & Reporting</h3>
                  <p className="text-gray-300">
                    Track user behavior, conversions, and ROI with comprehensive analytics dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-3">Startups</h3>
              <p className="text-muted-foreground mb-4">
                Launch your MVP quickly with a professional web presence that attracts investors and customers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Rapid deployment</li>
                <li>✓ Cost-effective solutions</li>
                <li>✓ Scalable architecture</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-3">Enterprises</h3>
              <p className="text-muted-foreground mb-4">
                Complex, mission-critical applications built with enterprise-grade security and performance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Custom solutions</li>
                <li>✓ High availability</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-3">E-Commerce</h3>
              <p className="text-muted-foreground mb-4">
                Powerful online stores with conversion optimization and seamless payment processing.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Payment integration</li>
                <li>✓ Inventory management</li>
                <li>✓ Marketing tools</li>
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
              <p className="text-muted-foreground mb-6">Perfect for small projects</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$2,999</span>
                <p className="text-muted-foreground">One-time</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 5 pages</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Responsive design</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Basic SEO</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">3 months support</span>
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
              <p className="text-muted-foreground mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$7,999</span>
                <p className="text-muted-foreground">One-time</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 20 pages</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced SEO</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">CMS integration</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">12 months support</span>
                </li>
              </ul>
              <Button className="w-full bg-accent text-foreground hover:bg-accent/90">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border hover:border-accent transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Custom solutions</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">Custom</span>
                <p className="text-muted-foreground">Contact for quote</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Unlimited pages</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Custom features</span>
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
              Ready to Build Your Website?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project requirements and create a stunning web presence for your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Schedule Consultation
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
                <li><a href="#" className="hover:text-accent transition-colors">Web Scraping</a></li>
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
