import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card className="group overflow-hidden bg-card border-border hover-lift h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 right-2 px-2 py-0.5 md:px-3 md:py-1 bg-primary rounded-full">
          <span className="text-primary-foreground font-bold text-xs md:text-sm">Rs. {product.price}</span>
        </div>
      </div>
      
      <CardContent className="p-3 md:p-4 flex-1 flex flex-col">
        <h3 className="text-sm md:text-base font-serif font-bold text-foreground mb-1 line-clamp-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-xs text-muted-foreground mb-2 md:mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
      </CardContent>

      <CardFooter className="p-3 md:p-4 pt-0 flex items-center gap-2">
        <div className="flex items-center gap-0.5 md:gap-1 border border-border rounded-md bg-background/50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="hover:bg-muted h-7 w-7 md:h-8 md:w-8"
          >
            <Minus className="w-3 h-3" />
          </Button>
          <span className="w-6 md:w-8 text-center font-semibold text-xs md:text-sm">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
            className="hover:bg-muted h-7 w-7 md:h-8 md:w-8"
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
        <Button
          variant="default"
          onClick={handleAddToCart}
          className="flex-1 bg-primary hover:bg-primary/90 h-7 md:h-8 text-xs px-2 md:px-4"
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};
