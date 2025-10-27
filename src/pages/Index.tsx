import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { BestSellers } from "@/components/BestSellers";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to a specific section when navigating from other pages
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        const navbarElement = document.querySelector('nav');
        
        if (element) {
          const navbarHeight = navbarElement?.getBoundingClientRect().height || 96;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - 16;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      <Hero />
      <BestSellers />
      
      {/* All Flavors & Categories Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="gold" className="mb-4">
            All Flavors & Categories
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            Our Brownie Collection
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our handcrafted varieties - from classic favorites to premium specialties
          </p>
        </div>
      </section>

      <MenuSection />
      
      <Footer />
    </div>
  );
};

export default Index;
