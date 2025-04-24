
import { PackageCheck, Leaf, RefreshCw, Shield } from "lucide-react";

const promises = [
  {
    id: 1,
    icon: <PackageCheck className="w-8 h-8 text-fashion-accent" />,
    title: "Premium Quality",
    description: "Carefully selected fabrics and expert craftsmanship ensure lasting comfort and style."
  },
  {
    id: 2,
    icon: <Leaf className="w-8 h-8 text-fashion-accent" />,
    title: "Eco-Friendly Packaging",
    description: "All orders are shipped in recyclable packaging to minimize environmental impact."
  },
  {
    id: 3,
    icon: <RefreshCw className="w-8 h-8 text-fashion-accent" />,
    title: "Hassle-Free Returns",
    description: "Not satisfied? Return within 30 days for a full refund or exchange."
  },
  {
    id: 4,
    icon: <Shield className="w-8 h-8 text-fashion-accent" />,
    title: "Secure Shopping",
    description: "Your personal information is protected with industry-leading encryption."
  }
];

export default function PromiseSection() {
  return (
    <section className="section-padding container mx-auto px-4">
      <h2 className="section-title">Our Promise to You</h2>
      <p className="section-subtitle">
        We're committed to providing the best shopping experience
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {promises.map((promise) => (
          <div 
            key={promise.id}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-100 shadow-sm"
          >
            <div className="mb-4">{promise.icon}</div>
            <h3 className="text-xl font-medium text-fashion-primary mb-2">{promise.title}</h3>
            <p className="text-fashion-secondary">{promise.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
