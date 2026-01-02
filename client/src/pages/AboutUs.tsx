import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Page: About Us - CYLOES Company Story
 */

export default function AboutUs() {
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
              About <span className="text-accent">CYLOES</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Intelligence That Accelerates
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CYLOES was founded with a clear purpose: to unlock the true power of data through intelligent, scalable, and future-ready technology. What began as a passion for solving real-world data challenges has grown into a forward-thinking startup dedicated to helping businesses make smarter decisions—faster.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                From Data to Transformation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the start, CYLOES has focused on transforming raw information into structured, meaningful insights. We began by building advanced data scraping and data mapping solutions designed to deliver accuracy and efficiency at scale. As industries evolved, so did we, expanding into cloud services and custom software development to help organizations modernize, automate, and grow.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Our Philosophy
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At the heart of our journey is our belief that innovation should simplify, accelerate, and empower. Guided by our slogan, <span className="font-semibold text-accent">"Intelligence That Accelerates,"</span> we create solutions that not only solve today's challenges but also drive tomorrow's possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To bridge the gap between data and action, helping businesses harness intelligence that fuels progress. From automated data pipelines to secure cloud architecture and tailored software systems, CYLOES is committed to delivering technology that moves you forward fast.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                With a foundation built on curiosity, craftsmanship, and trust, CYLOES continues to evolve, pushing boundaries and shaping smarter digital futures. We envision a world where every organization has access to intelligent technology that accelerates their growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously push boundaries to create solutions that are ahead of the curve and deliver real value to our clients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Partnership</h3>
              <p className="text-muted-foreground">
                We believe in building long-term relationships with our clients, understanding their unique challenges and growing together.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Quality is non-negotiable. We deliver solutions that are robust, scalable, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Accelerate Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's explore how CYLOES can transform your data into actionable intelligence.
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
