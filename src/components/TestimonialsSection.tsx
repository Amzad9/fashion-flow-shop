
import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  message: string;
  rating: number;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily R.",
    message: "I'm obsessed with the quality of every piece I've ordered. The fabrics are luxurious and the fit is always perfect. This has become my go-to brand for work and weekend wear!",
    rating: 5,
    date: "March 15, 2023"
  },
  {
    id: 2,
    name: "Jessica T.",
    message: "The travel sets are a game-changer for my business trips. Comfortable yet professional, and they pack so well without wrinkling. Couldn't be happier with my purchase.",
    rating: 5,
    date: "February 22, 2023"
  },
  {
    id: 3,
    name: "Michelle K.",
    message: "Customer service is exceptional. Had an issue with sizing and they made the exchange process incredibly easy. The dress I eventually got fits like a dream!",
    rating: 5,
    date: "April 8, 2023"
  },
  {
    id: 4,
    name: "Sophia L.",
    message: "The co-ord sets have transformed my morning routine. I look put-together with zero effort. The fabric quality is excellent and washes well without losing shape.",
    rating: 4,
    date: "January 30, 2023"
  },
  {
    id: 5,
    name: "Olivia P.",
    message: "I've received so many compliments on my new dress! The design is unique yet timeless. Will definitely be ordering more from this collection.",
    rating: 5,
    date: "May 12, 2023"
  },
  {
    id: 6,
    name: "Natalie W.",
    message: "Shipping was fast and the packaging was beautiful. The clothes inside were even better than the pictures online. Really impressed with the attention to detail.",
    rating: 5,
    date: "March 3, 2023"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const displayedTestimonials = testimonials.slice(
    activeIndex * testimonialsPerPage, 
    (activeIndex + 1) * testimonialsPerPage
  );

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="section-padding bg-fashion-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Your Words, Our Pride</h2>
        <p className="section-subtitle">
          Hear what our customers have to say about their experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card animate-fade-in">
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-fashion-secondary mb-4 italic">"{testimonial.message}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-fashion-primary">{testimonial.name}</p>
                  <p className="text-xs text-fashion-secondary">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {Array(pageCount).fill(0).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-fashion-accent' : 'bg-gray-300'}`}
                aria-label={`Go to page ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
