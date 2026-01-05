import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Database, Zap, Shield, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Header from "@/components/Header";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Color Palette: Deep Slate (#1a2332) + Vibrant Cyan (#00d9ff)
 * Typography: Sora (headings) + Inter (body)
 * Layout: Asymmetric with geometric clarity
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();



  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />

        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Transform Your Business with{" "}
                <span className="text-accent">Cutting-Edge IT</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Custom websites, web scraping, cloud solutions, and comprehensive IT services designed to accelerate your digital transformation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/images/hero-tech-abstract.jpg"
              alt="Tech Abstract"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Websites */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Custom Websites</h3>
              <p className="text-muted-foreground mb-4">
                Responsive, modern websites built with the latest technologies to showcase your brand and engage customers.
              </p>
              <img
                src="/images/custom-websites.jpg"
                alt="Custom Websites"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <a href="/custom-websites" className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Web Scraping */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Web Scraping</h3>
              <p className="text-muted-foreground mb-4">
                Extract and aggregate data from websites efficiently. Automate data collection for market research and analysis.
              </p>
              <img
                src="/images/web-scraping-service.jpg"
                alt="Web Scraping"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <a href="/web-scraping" className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Cloud Services */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Cloud className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Cloud Services</h3>
              <p className="text-muted-foreground mb-4">
                Scalable cloud infrastructure solutions. Deploy, manage, and optimize your applications in the cloud.
              </p>
              <img
                src="/images/cloud-services.jpg"
                alt="Cloud Services"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <a href="/cloud-services" className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* API Development */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">API Development</h3>
              <p className="text-muted-foreground mb-4">
                Build robust, scalable APIs that power your applications. RESTful and GraphQL solutions for seamless integration.
              </p>
              <a href="/api-development" className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Security Solutions */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Security Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive security audits and implementations. Protect your digital assets with enterprise-grade solutions.
              </p>
              <a href="/security-solutions" className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Development */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Mobile Development</h3>
              <p className="text-muted-foreground mb-4">
                Native and cross-platform mobile applications. Deliver exceptional user experiences on iOS and Android.
              </p>
              <a href="/mobile-development" className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Why Choose Our Services?
                </h2>
                <p className="text-lg text-gray-300">
                  We combine technical expertise with strategic thinking to deliver solutions that drive real business value.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                    <p className="text-gray-300">
                      Agile development methodology ensures quick turnaround without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Secure & Reliable</h3>
                    <p className="text-gray-300">
                      Enterprise-grade security practices and 99.9% uptime guarantee for all services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                    <p className="text-gray-300">
                      Highly skilled developers and architects with years of industry experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg blur-2xl" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-lg border border-white/10 backdrop-blur">
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-accent mb-2">10+</p>
                    <p className="text-gray-300">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent mb-2">500+</p>
                    <p className="text-gray-300">Successful Projects</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent mb-2">100+</p>
                    <p className="text-gray-300">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent mb-2">24/7</p>
                    <p className="text-gray-300">Dedicated Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our IT services can help you achieve your goals. Contact us today for a free consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Schedule a Call
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
                <li><a href="/custom-websites" className="hover:text-accent transition-colors">Custom Websites</a></li>
                <li><a href="/web-scraping" className="hover:text-accent transition-colors">Web Scraping</a></li>
                <li><a href="/cloud-services" className="hover:text-accent transition-colors">Cloud Services</a></li>
                <li><a href="/api-development" className="hover:text-accent transition-colors">API Development</a></li>
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
