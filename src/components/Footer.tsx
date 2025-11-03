import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-gradient-gold mb-4">
              Brownie Bae Co.
            </h3>
            <p className="text-muted-foreground italic text-sm">
              Handcrafted with love, delivered with care
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Navigation
            </h4>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    navigate("/");
                  }
                  setTimeout(() => {
                    const element = document.getElementById("menu");
                    if (element) {
                      const navbarHeight = document.querySelector('nav')?.getBoundingClientRect().height || 96;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight - 16;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }, 100);
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
              >
                Menu
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Contact Us
            </h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/916366322338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 6366 322 338</span>
              </a>
              <a
                href="mailto:browniebae.co@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>browniebae.co@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/browniebae_co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 block"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@browniebae_co</span>
            </a>
            <Button
              variant="hero"
              size="sm"
              className="w-full"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/");
                }
                setTimeout(() => {
                  const element = document.getElementById("menu");
                  if (element) {
                    const navbarHeight = document.querySelector('nav')?.getBoundingClientRect().height || 96;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight - 16;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }, 100);
              }}
            >
              Order Now
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Brownie Bae Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
