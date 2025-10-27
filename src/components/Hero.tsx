import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBrownie from "@/assets/hero-brownie.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    const menuElement = document.getElementById("menu");
    const navbarElement = document.querySelector('nav');
    
    if (menuElement) {
      // Get actual navbar height
      const navbarHeight = navbarElement?.getBoundingClientRect().height || 96;
      const elementPosition = menuElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 16; // Extra 16px for breathing room

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBrownie})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-gold">
          Brownie Bae Co.
        </h1>
        <p className="text-xl md:text-3xl text-foreground/90 mb-12 font-serif italic">
          Taste the Love in Every Bite
        </p>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={handleOrderClick}
          className="text-lg px-8 py-6 rounded-full"
        >
          Order Now
          <ArrowDown className="ml-2 animate-bounce" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
