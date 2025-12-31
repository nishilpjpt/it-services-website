import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Cloud, Zap, Shield, BarChart3, Lock } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Service Page: Cloud Services
 */

export default function CloudServices() {
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
                Cloud Infrastructure & <span className="text-accent">DevOps Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Scalable, secure cloud solutions on AWS, Azure, and Google Cloud. Deploy, manage, and optimize your applications with enterprise-grade infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
                Start Your Migration <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/images/cloud-services.jpg"
              alt="Cloud Services"
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
              Cloud Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cloud solutions for every stage of your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Cloud className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Cloud Migration</h3>
              <p className="text-muted-foreground">
                Seamless migration of your on-premises applications and data to the cloud with zero downtime.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Infrastructure as Code</h3>
              <p className="text-muted-foreground">
                Automated infrastructure provisioning and management using Terraform and CloudFormation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Security & Compliance</h3>
              <p className="text-muted-foreground">
                Implement security best practices, encryption, and compliance frameworks (SOC 2, HIPAA, GDPR).
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Monitoring & Optimization</h3>
              <p className="text-muted-foreground">
                Real-time monitoring, alerting, and cost optimization to maximize cloud efficiency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Lock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Disaster Recovery</h3>
              <p className="text-muted-foreground">
                Backup, replication, and disaster recovery solutions for business continuity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg border border-border hover:border-accent transition-all">
              <Cloud className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Containerization & Kubernetes</h3>
              <p className="text-muted-foreground">
                Docker containerization and Kubernetes orchestration for scalable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Multi-Cloud Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Amazon Web Services</h3>
              <p className="text-gray-300 mb-6">
                EC2, S3, RDS, Lambda, CloudFront, and more. We're AWS certified partners with deep expertise.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ EC2 & Auto Scaling</li>
                <li>✓ S3 & Storage Solutions</li>
                <li>✓ RDS & Database Services</li>
                <li>✓ Lambda & Serverless</li>
                <li>✓ CloudFront CDN</li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Microsoft Azure</h3>
              <p className="text-gray-300 mb-6">
                Virtual Machines, App Services, SQL Database, and enterprise integration solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Virtual Machines</li>
                <li>✓ App Services</li>
                <li>✓ SQL Database</li>
                <li>✓ Azure DevOps</li>
                <li>✓ Azure Synapse</li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-lg border border-white/20 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Google Cloud Platform</h3>
              <p className="text-gray-300 mb-6">
                Compute Engine, App Engine, BigQuery, and data analytics solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Compute Engine</li>
                <li>✓ App Engine</li>
                <li>✓ Cloud SQL</li>
                <li>✓ BigQuery</li>
                <li>✓ Cloud Storage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Why Choose Our Cloud Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Cost Optimization</h3>
                  <p className="text-muted-foreground">
                    Reduce cloud spending by 30-40% through resource optimization and reserved instances.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">High Availability</h3>
                  <p className="text-muted-foreground">
                    99.99% uptime SLA with multi-region redundancy and automatic failover.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Security First</h3>
                  <p className="text-muted-foreground">
                    Encryption, firewalls, VPCs, and compliance with industry standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Scalability</h3>
                  <p className="text-muted-foreground">
                    Auto-scaling to handle traffic spikes without manual intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Certified cloud architects with 10+ years of experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock monitoring and support for your cloud infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">DevOps Automation</h3>
                  <p className="text-muted-foreground">
                    CI/CD pipelines, automated testing, and continuous deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Performance Tuning</h3>
                  <p className="text-muted-foreground">
                    Optimization for speed, latency, and resource utilization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's assess your current infrastructure and create a cloud strategy tailored to your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Schedule Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Download Whitepaper
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
                <li><a href="/web-scraping" className="hover:text-accent transition-colors">Web Scraping</a></li>
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
