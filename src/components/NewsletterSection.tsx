
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log("Subscribed email:", email);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset the submission state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-fashion-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-4">Join Our Community</h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter for exclusive offers, early access to new arrivals, and styling tips from our fashion experts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-fashion-accent"
              required
            />
            <Button 
              type="submit" 
              className="bg-fashion-accent hover:bg-fashion-accent-dark text-white"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Thank You!" : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-white/60 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
}
