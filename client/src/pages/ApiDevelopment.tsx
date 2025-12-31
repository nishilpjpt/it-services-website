import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Zap, Shield, BarChart3, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Service Page: API Development
 */

export default function ApiDevelopment() {
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
                API Development & <span className="text-accent">Integration</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Build robust, scalable APIs that power your applications. RESTful, GraphQL, and real-time solutions for seamless integration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
                Start Your API <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                View Documentation
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/images/hero-tech-abstract.jpg"
              alt="API Development"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* API Types Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              API Solutions We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern API architectures for every use case and scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Code className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">RESTful APIs</h3>
              <p className="text-muted-foreground">
                Standard REST APIs with proper HTTP methods, status codes, and resource-oriented design patterns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">GraphQL APIs</h3>
              <p className="text-muted-foreground">
                Flexible GraphQL APIs that allow clients to request exactly the data they need.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <GitBranch className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Real-Time APIs</h3>
              <p className="text-muted-foreground">
                WebSocket and Server-Sent Events for real-time data streaming and notifications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Microservices</h3>
              <p className="text-muted-foreground">
                Distributed microservices architecture with service mesh and API gateway patterns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Third-Party Integrations</h3>
              <p className="text-muted-foreground">
                Seamless integration with payment gateways, CRM, analytics, and other services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Code className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Mobile Backend APIs</h3>
              <p className="text-muted-foreground">
                Optimized APIs for mobile applications with offline support and data sync.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Best Practices */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What We Include
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">API Design & Architecture</h3>
                  <p className="text-gray-300">
                    RESTful principles, API versioning, and scalable architecture patterns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Authentication & Authorization</h3>
                  <p className="text-gray-300">
                    OAuth 2.0, JWT, API keys, and role-based access control (RBAC).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Rate Limiting & Throttling</h3>
                  <p className="text-gray-300">
                    Protect your API from abuse with intelligent rate limiting strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Error Handling</h3>
                  <p className="text-gray-300">
                    Comprehensive error responses with proper HTTP status codes and messages.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">API Documentation</h3>
                  <p className="text-gray-300">
                    Interactive Swagger/OpenAPI documentation with code examples.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Testing & Quality Assurance</h3>
                  <p className="text-gray-300">
                    Unit tests, integration tests, and load testing for reliability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Monitoring & Analytics</h3>
                  <p className="text-gray-300">
                    Real-time monitoring, logging, and performance analytics dashboards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">CI/CD Integration</h3>
                  <p className="text-gray-300">
                    Automated testing and deployment pipelines for continuous delivery.
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
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Backend Frameworks</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Node.js/Express</strong> - Fast, scalable JavaScript APIs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Python/FastAPI</strong> - High-performance Python APIs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Go/Gin</strong> - Lightweight, concurrent APIs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Java/Spring Boot</strong> - Enterprise-grade APIs</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Databases</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>PostgreSQL</strong> - Relational database</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>MongoDB</strong> - NoSQL document database</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Redis</strong> - Caching and real-time data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Elasticsearch</strong> - Search and analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">DevOps & Tools</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Docker & Kubernetes</strong> - Containerization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Jenkins/GitLab CI</strong> - CI/CD pipelines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Prometheus & Grafana</strong> - Monitoring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>ELK Stack</strong> - Logging and analysis</span>
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
              <p className="text-muted-foreground mb-6">Simple APIs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$3,999</span>
                <p className="text-muted-foreground">One-time</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 5 endpoints</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Basic authentication</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Documentation</span>
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
              <p className="text-muted-foreground mb-6">Production APIs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$8,999</span>
                <p className="text-muted-foreground">One-time</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Up to 20 endpoints</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">OAuth 2.0 & JWT</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Rate limiting</span>
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
                  <span className="text-muted-foreground">Unlimited endpoints</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced security</span>
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
              Build Your Next API with Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's create a robust, scalable API that powers your application and integrates seamlessly with your ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              View API Docs
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
                <li><a href="/cloud-services" className="hover:text-accent transition-colors">Cloud Services</a></li>
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
