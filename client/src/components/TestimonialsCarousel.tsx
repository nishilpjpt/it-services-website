import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechVenture Inc.",
    role: "CEO",
    content:
      "CYLOES transformed our data infrastructure. Their web scraping solution helped us gather market intelligence 10x faster. Exceptional team and outstanding support!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "DataFlow Systems",
    role: "CTO",
    content:
      "The custom website they built for us is not only beautiful but also incredibly fast. Their attention to detail and understanding of our needs was remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "CloudScale Solutions",
    role: "Operations Manager",
    content:
      "We migrated to their cloud services and saw immediate improvements in performance and cost savings. Their team guided us through every step of the process.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    company: "FinTech Innovations",
    role: "Product Lead",
    content:
      "The API development services were exactly what we needed. Clean, well-documented, and production-ready. CYLOES is now our go-to partner for technical solutions.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    company: "SecureNet Corp",
    role: "Security Director",
    content:
      "Their security solutions gave us peace of mind. Comprehensive audits, professional recommendations, and seamless implementation. Highly recommended!",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-foreground to-foreground/90 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by leading companies worldwide. Here's what they have to say about working with CYLOES.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 md:p-12 min-h-96 flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
              "{currentTestimonial.content}"
            </p>

            {/* Author Info */}
            <div className="border-t border-white/20 pt-6">
              <p className="font-bold text-lg text-white">{currentTestimonial.name}</p>
              <p className="text-sm text-gray-300">
                {currentTestimonial.role} at {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">500+</p>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">98%</p>
            <p className="text-gray-300">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">10+</p>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
