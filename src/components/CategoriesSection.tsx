
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef } from "react";

type Category = {
  id: number;
  name: string;
  image: string;
  items: number;
};

const categories: Category[] = [
  {
    id: 1,
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    items: 24,
  },
  {
    id: 2,
    name: "Best Sellers",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    items: 18,
  },
  {
    id: 3,
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    items: 32,
  },
  {
    id: 4,
    name: "Travel Sets",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    items: 16,
  },
  {
    id: 5,
    name: "Co-ord Sets",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    items: 21,
  },
];

export default function CategoriesSection() {
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
      <h2 className="section-title">Shop by Category</h2>
      <p className="section-subtitle">
        Explore our curated collections designed for every occasion
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
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 px-1"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card flex-shrink-0 w-60 h-80"
            >
              <div className="relative h-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-medium mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{category.items} items</p>
                  <Button 
                    variant="outline" 
                    className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-fashion-primary transition-all"
                  >
                    Shop Now
                  </Button>
                </div>
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
    </section>
  );
}
