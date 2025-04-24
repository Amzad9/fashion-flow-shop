
import { Button } from "@/components/ui/button";

const styleCategories = [
  {
    id: 1,
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Sophisticated styles for any occasion"
  },
  {
    id: 2,
    name: "Co-ord Sets",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Perfectly paired pieces for effortless style"
  },
  {
    id: 3,
    name: "Travel Sets",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Comfortable yet elegant travel companions"
  },
  {
    id: 4,
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "From casual to formal, find your perfect dress"
  }
];

export default function StylePicksSection() {
  return (
    <section className="py-16 md:py-24 bg-fashion-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Style Picks Just for You</h2>
        <p className="section-subtitle">
          Curated collections to match your unique style preferences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {styleCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-52 md:h-auto">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-medium text-fashion-primary mb-2">{category.name}</h3>
                  <p className="text-fashion-secondary mb-6">{category.description}</p>
                  <Button className="button-primary self-start">Explore Collection</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
