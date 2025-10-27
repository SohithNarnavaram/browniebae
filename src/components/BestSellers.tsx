import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const BestSellers = () => {
  const bestSellers = products.filter(
    (p) =>
      p.id === "triple-chocolate" ||
      p.id === "belgian-stuffed" ||
      p.id === "nutella"
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="gold" className="mb-4">
            <Star className="w-4 h-4 mr-1" />
            Customer Favorites
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
            Best Sellers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most loved brownies, handcrafted with premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
