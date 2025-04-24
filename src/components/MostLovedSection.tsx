
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "./ProductCard";

const lovedProducts: Product[] = [
  {
    id: 1,
    name: "Classic Shirt Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true
  },
  {
    id: 2,
    name: "Linen Blend Pants",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true
  },
  {
    id: 3,
    name: "Essential Blouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true
  },
  {
    id: 4,
    name: "Weekend Comfort Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true
  },
];

export default function MostLovedSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 300;
    const scrollPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="section-padding container mx-auto px-4">
      <h2 className="section-title">Most-Loved by You</h2>
      <p className="section-subtitle">
        Our bestselling styles that have won the hearts of our community
      </p>

      <div className="relative">
        <Button 
          onClick={() => scroll('left')}
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm hidden md:flex"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </Button>

        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:flex md:gap-6 md:overflow-x-auto md:scrollbar-none md:pb-4 px-1"
        >
          {lovedProducts.map((product) => (
            <div key={product.id} className="md:w-72 flex-shrink-0">
              <ProductCard product={product} />
              <div className="mt-3 bg-fashion-light p-4 rounded-md">
                <p className="text-sm text-fashion-secondary italic">
                  "This is perfect for everyday wear. The quality is amazing and it feels so comfortable!"
                </p>
                <p className="text-xs text-fashion-primary font-medium mt-2">
                  - Sarah T.
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button 
          onClick={() => scroll('right')}
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm hidden md:flex"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86513 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86513 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </Button>
      </div>
      
      <div className="flex justify-center mt-10">
        <Button className="button-secondary">View All Bestsellers</Button>
      </div>
    </section>
  );
}
