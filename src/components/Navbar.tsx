import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown, Sparkles, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    
    // Small delay to ensure page has loaded/rendered
    setTimeout(() => {
      const element = document.getElementById(sectionId);
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
  };

  const categories = [
    { name: "Individual Brownies", id: "individual-brownies" },
    { name: "Brownie Boxes", id: "brownie-boxes" },
    { name: "Brownie Tubs", id: "brownie-tubs" },
  ];

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Cookie className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-gradient-gold">
                Brownie Bae
              </h1>
              <p className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-wider">
                CO.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 px-5 py-2.5 rounded-full ${
                isActive("/")
                  ? "text-foreground bg-gradient-to-r from-primary/20 to-accent/20 shadow-md"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {isActive("/") && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 -z-10 blur-sm"></span>
              )}
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium tracking-wide transition-all duration-300 px-5 py-2.5 rounded-full flex items-center gap-1.5 text-foreground/70 hover:text-foreground hover:bg-foreground/5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Brownies</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-card/95 backdrop-blur-lg border border-border/50 shadow-xl rounded-xl p-1">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className="cursor-pointer rounded-lg px-3 py-2 mx-1 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-200"
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 px-5 py-2.5 rounded-full ${
                  isActive(link.path)
                    ? "text-foreground bg-gradient-to-r from-primary/20 to-accent/20 shadow-md"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {isActive(link.path) && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 -z-10 blur-sm"></span>
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-card">
                <div className="flex flex-col gap-6 mt-8">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive("/")
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    Home
                  </Link>
                  
                  {/* Brownies Section */}
                  <div>
                    <div className="text-lg font-semibold mb-3 text-primary">
                      Brownies
                    </div>
                    <div className="flex flex-col gap-3 pl-4">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setIsOpen(false);
                            scrollToSection(category.id);
                          }}
                          className="text-base font-medium transition-colors text-left text-foreground/80 hover:text-primary"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Other Links */}
                  <div className="border-t border-border pt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors block mb-3 ${
                        isActive(link.path)
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
