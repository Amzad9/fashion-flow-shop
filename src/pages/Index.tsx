
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import StylePicksSection from "@/components/StylePicksSection";
import PromiseSection from "@/components/PromiseSection";
import MostLovedSection from "@/components/MostLovedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col" role="document">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4">
        Skip to main content
      </a>
      
      <header role="banner">
        <Navbar />
      </header>

      <main id="main-content" className="flex-1" role="main">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoriesSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductsSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading style picks...</div>}>
          <StylePicksSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading promise section...</div>}>
          <PromiseSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading most loved products...</div>}>
          <MostLovedSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading testimonials...</div>}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading newsletter...</div>}>
          <NewsletterSection />
        </Suspense>
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}
