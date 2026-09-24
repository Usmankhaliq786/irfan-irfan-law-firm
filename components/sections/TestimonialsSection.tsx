"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/data/cases";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal-900">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-charcoal-50 mb-6">
              Client <span className="text-gold-500">Testimonials</span>
            </h2>
            <p className="body-large text-charcoal-300">
              Trusted by industry leaders and general counsels worldwide
            </p>
          </div>

          <div className="relative">
            <div className="testimonial-content">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gold-500/10 rounded-full">
                  <Quote className="w-8 h-8 text-gold-500" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-display text-charcoal-50 text-center mb-12 leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="text-charcoal-50 font-semibold text-lg mb-1">
                  {current.author}
                </div>
                <div className="text-gold-500 text-sm">
                  {current.position}, {current.company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="p-3 border border-charcoal-700 rounded-full hover:border-gold-500 hover:text-gold-500 text-charcoal-300 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gold-500"
                        : "w-2 bg-charcoal-700 hover:bg-charcoal-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 border border-charcoal-700 rounded-full hover:border-gold-500 hover:text-gold-500 text-charcoal-300 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
