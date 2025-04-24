
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section 
      className="relative h-[80vh]"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-[#F8F3F0]">
        <div className="h-full w-full flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium text-fashion-primary mb-6 leading-tight font-inter">
              Elevate Your Style With Our Latest Collection
            </h1>
            <p className="text-lg md:text-xl text-fashion-secondary mb-8 font-inter">
              Discover timeless elegance and contemporary designs crafted for the modern woman
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="button-primary"
                aria-label="Shop new arrivals"
                onClick={() => {
                  // Track engagement
                  console.log('Shop New Arrivals clicked');
                }}
              >
                Shop New Arrivals
              </Button>
              <Button 
                className="button-secondary"
                aria-label="Explore collection"
                onClick={() => {
                  // Track engagement
                  console.log('Explore Collection clicked');
                }}
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
