import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sale", href: "#" },
  { name: "New Arrivals", href: "#" },
  { name: "Best Sellers", href: "#" },
  { name: "Travel Sets", href: "#" },
  { name: "Dresses", href: "#" },
  { name: "Co-ord Sets", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-fashion-primary hover:text-fashion-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-fashion-primary hover:text-fashion-accent"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-fashion-primary hover:text-fashion-accent"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-fashion-primary hover:text-fashion-accent"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-fashion-primary hover:text-fashion-accent"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  className="text-fashion-primary"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-lg font-medium text-fashion-primary hover:text-fashion-accent transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="absolute bottom-8 left-0 right-0 px-6">
                  <div className="flex flex-col gap-4">
                    <img
                      src="/lady-kurta.jpg"
                      alt="Lady Kurta Collection"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-fashion-secondary text-center">
                      Discover our new Lady Kurta Collection
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
