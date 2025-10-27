import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export const MenuSection = () => {
  const brownies = products.filter((p) => p.category === "brownie");
  const boxes = products.filter((p) => p.category === "box");
  const tubs = products.filter((p) => p.category === "tub");

  return (
    <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24 md:scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Individual Brownies */}
        <div id="individual-brownies" className="mb-20 scroll-mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl"></div>
          <div className="relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
                Individual Brownies
              </h2>
              <p className="text-muted-foreground">
                Handcrafted perfection in every piece
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {brownies.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Boxes */}
        <div id="brownie-boxes" className="mb-20 scroll-mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-transparent rounded-3xl"></div>
          <div className="relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
                Brownie Boxes
              </h2>
              <p className="text-muted-foreground">
                Perfect for gifting or sharing
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {boxes.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Tubs */}
        <div id="brownie-tubs" className="scroll-mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>
          <div className="relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
                Brownie Tubs
              </h2>
              <p className="text-muted-foreground">
                Bite-sized indulgence
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {tubs.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
