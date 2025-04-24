
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Flowing Maxi Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isNew: true
  },
  {
    id: 2,
    name: "Elegant Blouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    discountedPrice: 39.99,
    isBestseller: true
  },
  {
    id: 3,
    name: "Classic Lady Kurta",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 4,
    name: "Summer Co-ord Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    discountedPrice: 64.99
  },
  {
    id: 5,
    name: "Linen Shirt Dress",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isNew: true
  },
  {
    id: 6,
    name: "Travel Comfort Set",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isBestseller: true
  },
  {
    id: 7,
    name: "Floral Maxi Skirt",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 8,
    name: "Essential White Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    discountedPrice: 24.99
  },
];

export default function ProductsSection() {
  return (
    <section className="section-padding container mx-auto px-4">
      <h2 className="section-title">New Arrivals</h2>
      <p className="section-subtitle">
        Discover our latest styles just in time for the season
      </p>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center">
          <TabsList className="bg-fashion-light">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="dresses">Dresses</TabsTrigger>
            <TabsTrigger value="coords">Co-ord Sets</TabsTrigger>
            <TabsTrigger value="travel">Travel Sets</TabsTrigger>
            <TabsTrigger value="tops">Tops</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="dresses" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id % 2 === 0).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="coords" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id % 3 === 0).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="travel" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id % 4 === 0).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tops" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id % 5 === 0).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-center mt-8">
        <Button className="button-secondary">View All Products</Button>
      </div>
    </section>
  );
}
