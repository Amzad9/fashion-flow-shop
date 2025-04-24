
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Sale", href: "#" },
      { name: "Dresses", href: "#" },
      { name: "Co-ord Sets", href: "#" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Track Order", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-fashion-primary font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-fashion-secondary hover:text-fashion-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-fashion-secondary">
            © {currentYear} Fashion Flow. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-fashion-secondary hover:text-fashion-accent" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-fashion-secondary hover:text-fashion-accent" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-fashion-secondary hover:text-fashion-accent" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
