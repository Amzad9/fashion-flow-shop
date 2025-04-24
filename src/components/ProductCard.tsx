
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { useState } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  discountedPrice?: number;
  isNew?: boolean;
  isBestseller?: boolean;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const discountPercentage = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
    : 0;
  
  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        
        {(product.isNew || product.isBestseller) && (
          <div className="absolute top-2 left-2">
            {product.isNew && (
              <span className="bg-black text-white text-xs px-2 py-1 rounded-sm mr-2">
                NEW
              </span>
            )}
            {product.isBestseller && (
              <span className="badge-bestseller">BESTSELLER</span>
            )}
          </div>
        )}
        
        {product.discountedPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm">
            {discountPercentage}% OFF
          </div>
        )}
        
        <div className="product-card-overlay">
          <div className="flex justify-center space-x-2 p-3">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white/90 text-fashion-primary hover:bg-white"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white/90 text-fashion-primary hover:bg-white"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              className="bg-fashion-accent hover:bg-fashion-accent-dark text-white flex-1"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-fashion-primary font-medium">{product.name}</h3>
        <div className="flex items-center mt-2">
          {product.discountedPrice ? (
            <>
              <span className="text-fashion-accent font-medium">${product.discountedPrice.toFixed(2)}</span>
              <span className="ml-2 text-fashion-secondary text-sm line-through">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-fashion-primary font-medium">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
