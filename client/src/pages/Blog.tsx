import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Modern Minimalism with Technical Precision
 * Page: Blog
 */

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Web Scraping: Best Practices and Tools",
    excerpt: "Learn how to extract data efficiently and ethically from websites. Discover the tools, techniques, and best practices that make web scraping scalable and reliable.",
    content: "Web scraping has become essential for businesses that need to gather competitive intelligence, monitor market trends, and automate data collection. In this comprehensive guide, we explore the fundamentals of web scraping, including HTTP requests, HTML parsing, and JavaScript rendering. We'll cover popular tools like Scrapy, BeautifulSoup, and Selenium, and discuss ethical considerations and legal compliance. Whether you're building a price monitoring system or aggregating market data, this guide provides the knowledge you need to implement web scraping effectively.",
    author: "Sarah Chen",
    date: "January 15, 2024",
    category: "Web Scraping",
    image: "/images/web-scraping-service.jpg",
  },
  {
    id: 2,
    title: "Cloud Migration Strategy: Moving Your Infrastructure to the Cloud",
    excerpt: "A step-by-step approach to planning and executing a successful cloud migration. Learn how to minimize downtime and maximize ROI.",
    content: "Cloud migration is a critical decision for modern businesses. This article walks through the entire migration process, from assessment and planning to execution and optimization. We discuss different migration strategies (lift-and-shift, re-platforming, refactoring), how to evaluate cloud providers (AWS, Azure, GCP), and best practices for ensuring security and compliance during the transition. Real-world case studies demonstrate how companies have successfully migrated to the cloud and achieved significant cost savings and improved scalability.",
    author: "Michael Rodriguez",
    date: "January 10, 2024",
    category: "Cloud Services",
    image: "/images/cloud-services.jpg",
  },
  {
    id: 3,
    title: "Building Scalable APIs: RESTful vs GraphQL",
    excerpt: "Compare two popular API architectures and learn which is best for your use case. Explore performance, flexibility, and developer experience.",
    content: "APIs are the backbone of modern applications. This deep dive compares RESTful and GraphQL architectures, examining their strengths and weaknesses. We explore how REST's simplicity and maturity compare to GraphQL's flexibility and efficiency. Through practical examples, we demonstrate how to design APIs for scalability, implement proper authentication and rate limiting, and optimize performance. Whether you're building a public API or internal microservices, this guide helps you make informed architectural decisions.",
    author: "David Park",
    date: "January 5, 2024",
    category: "API Development",
    image: "/images/hero-tech-abstract.jpg",
  },
  {
    id: 4,
    title: "Cybersecurity Essentials: Protecting Your Business from Modern Threats",
    excerpt: "An overview of critical security practices every organization should implement. From firewalls to encryption, learn how to build a robust security posture.",
    content: "Cybersecurity threats are evolving faster than ever. This article covers essential security practices including network security, application security, data protection, and incident response. We discuss common vulnerabilities (OWASP Top 10), security frameworks (NIST, ISO 27001), and compliance requirements (GDPR, HIPAA, PCI-DSS). Learn how to implement multi-factor authentication, encryption strategies, and security monitoring. Real-world breach case studies illustrate the importance of proactive security measures and rapid incident response.",
    author: "Emily Watson",
    date: "December 28, 2023",
    category: "Security Solutions",
    image: "/images/hero-tech-abstract.jpg",
  },
  {
    id: 5,
    title: "Mobile-First Design: Creating Apps That Users Love",
    excerpt: "Best practices for designing and developing mobile applications that deliver exceptional user experiences across iOS and Android.",
    content: "Mobile apps have become the primary way users interact with digital services. This guide covers mobile-first design principles, responsive layouts, and performance optimization. We explore native development (Swift for iOS, Kotlin for Android) versus cross-platform frameworks (React Native, Flutter), discussing the trade-offs between performance and development speed. Learn about app store optimization, user retention strategies, and analytics integration. Case studies showcase apps that have achieved millions of downloads through thoughtful design and continuous improvement.",
    author: "James Thompson",
    date: "December 20, 2023",
    category: "Mobile Development",
    image: "/images/custom-websites.jpg",
  },
  {
    id: 6,
    title: "Custom Website Development: From Concept to Launch",
    excerpt: "A comprehensive overview of building custom websites that align with your business goals. Learn about technology choices, design principles, and deployment strategies.",
    content: "Custom websites are powerful business tools when built with purpose and strategy. This article guides you through the entire development lifecycle: requirements gathering, technology selection, design and development, testing, and deployment. We discuss modern web technologies (React, Vue, Angular), backend frameworks (Node.js, Python, Java), and database choices. Learn about responsive design, accessibility standards, SEO best practices, and performance optimization. Real-world examples show how custom websites have transformed businesses by providing unique functionality and superior user experiences.",
    author: "Lisa Anderson",
    date: "December 15, 2023",
    category: "Custom Websites",
    image: "/images/custom-websites.jpg",
  },
];

export default function Blog() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (selectedPost) {
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
              <a href="/blog" className="text-sm font-medium hover:text-accent transition-colors">
                Blog
              </a>
              <a href="/contact-us" className="text-sm font-medium hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Article */}
        <article className="pt-32 md:pt-40 pb-20 md:pb-32">
          <div className="container max-w-3xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-accent font-semibold mb-8 hover:gap-2 inline-flex items-center gap-1 transition-all"
            >
              ← Back to Blog
            </button>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedPost.category}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                  {selectedPost.title}
                </h1>
              </div>

              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
              </div>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-lg"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedPost.content}
                </p>
              </div>

              <div className="border-t border-border pt-8 mt-12">
                <Button
                  onClick={() => setSelectedPost(null)}
                  className="bg-accent text-foreground hover:bg-accent/90"
                >
                  Back to Blog
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
              CYLOES <span className="text-accent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and best practices on web scraping, cloud services, APIs, security, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-8">
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="text-accent font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
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
              Ready to Learn More?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our blog for the latest insights on technology, data, and digital transformation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold">
              Subscribe Now
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
