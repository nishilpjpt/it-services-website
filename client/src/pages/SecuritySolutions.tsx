import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Lock, AlertTriangle, BarChart3, Eye } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Service Page: Security Solutions
 */

export default function SecuritySolutions() {
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
                Cybersecurity & <span className="text-accent">Security Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Protect your digital assets with comprehensive security audits, penetration testing, and enterprise-grade security implementations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
                Schedule Security Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/images/hero-tech-abstract.jpg"
              alt="Security Solutions"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Security Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions to protect your business from evolving threats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Security Audits</h3>
              <p className="text-muted-foreground">
                Comprehensive security assessments of your infrastructure, applications, and processes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <AlertTriangle className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Penetration Testing</h3>
              <p className="text-muted-foreground">
                Simulate real-world attacks to identify vulnerabilities before malicious actors do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Lock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Encryption & Data Protection</h3>
              <p className="text-muted-foreground">
                End-to-end encryption, secure key management, and data protection strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Eye className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Threat Monitoring</h3>
              <p className="text-muted-foreground">
                24/7 monitoring and threat detection with real-time alerts and response.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Compliance Management</h3>
              <p className="text-muted-foreground">
                GDPR, HIPAA, PCI-DSS, and SOC 2 compliance implementation and auditing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Incident Response</h3>
              <p className="text-muted-foreground">
                Rapid response to security incidents with forensic analysis and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Security Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Network Security</h3>
                  <p className="text-gray-300">
                    Firewalls, intrusion detection, VPNs, and network segmentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Application Security</h3>
                  <p className="text-gray-300">
                    Secure coding practices, code reviews, and vulnerability scanning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Identity & Access Management</h3>
                  <p className="text-gray-300">
                    Multi-factor authentication, single sign-on, and role-based access control.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Data Security</h3>
                  <p className="text-gray-300">
                    Encryption at rest and in transit, secure backups, and data classification.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Cloud Security</h3>
                  <p className="text-gray-300">
                    Secure cloud configurations, identity management, and data protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Security Training</h3>
                  <p className="text-gray-300">
                    Employee awareness training and phishing simulations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Vulnerability Management</h3>
                  <p className="text-gray-300">
                    Regular scanning, assessment, and remediation of vulnerabilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Security Policies</h3>
                  <p className="text-gray-300">
                    Development and implementation of security policies and procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Compliance Standards
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Industry Standards</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>ISO 27001</strong> - Information Security Management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>NIST Cybersecurity Framework</strong> - Security guidelines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>CIS Controls</strong> - Critical security controls</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>OWASP Top 10</strong> - Web application security</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>GDPR</strong> - General Data Protection Regulation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>HIPAA</strong> - Healthcare data protection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>PCI-DSS</strong> - Payment card industry standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>SOC 2</strong> - Service organization controls</span>
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
            Security Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border hover:border-accent transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Small organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$2,999</span>
                <p className="text-muted-foreground">/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Security audit</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Vulnerability scanning</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Monthly reporting</span>
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
              <p className="text-muted-foreground mb-6">Mid-size organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$6,999</span>
                <p className="text-muted-foreground">/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Penetration testing</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 monitoring</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Incident response</span>
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
              <p className="text-muted-foreground mb-6">Large organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">Custom</span>
                <p className="text-muted-foreground">Contact for quote</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Full security suite</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Compliance audits</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 dedicated team</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Custom solutions</span>
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
              Secure Your Business Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't wait for a security breach. Let's assess your current security posture and implement comprehensive protection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Schedule Audit
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Download Security Guide
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
                <li><a href="/api-development" className="hover:text-accent transition-colors">API Development</a></li>
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
