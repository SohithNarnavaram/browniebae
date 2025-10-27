import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { Heart, Award, Sparkles, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
              About Brownie Bae Co.
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic">
              Where passion meets perfection in every bite
            </p>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-foreground/90 leading-relaxed text-lg mb-6">
              Welcome to Brownie Bae Co., where every brownie is handcrafted with love and 
              premium ingredients. Our journey began with a simple mission: to create the 
              most indulgent, fudgy, and irresistible brownies that bring joy to every moment.
            </p>
            <p className="text-foreground/90 leading-relaxed text-lg mb-6">
              We believe that the best brownies come from the finest ingredients and 
              meticulous attention to detail. Each batch is made fresh, ensuring that 
              when you take that first bite, you experience pure chocolate bliss.
            </p>
          </div>

          {/* Founders */}
          <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl p-8 md:p-12 mb-16 border border-primary/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
                Meet the Founders
              </h2>
              <p className="text-muted-foreground">
                Passionate bakers with a sweet dream
              </p>
            </div>
            <p className="text-center text-foreground/90 leading-relaxed text-lg max-w-2xl mx-auto">
              Founded by <span className="font-bold text-primary">Sameera & Safia</span>, 
              Brownie Bae Co. is the result of countless late-night baking experiments, 
              endless recipe testing, and an unwavering commitment to quality. What started 
              as a shared passion for creating the perfect brownie has grown into a beloved 
              local bakery bringing joy to chocolate lovers across Bengaluru.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-lift bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every brownie is crafted with passion and care
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest ingredients make it into our brownies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Daily</h3>
                <p className="text-muted-foreground">
                  Made fresh to order for maximum flavor
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover-lift bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-foreground/90 mb-4 italic">
                    "These brownies are absolutely divine! The Belgian Chocolate Stuffed brownie 
                    was a game-changer. Perfectly fudgy and rich - exactly what I was looking for. 
                    Highly recommend!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">PS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Priya S.</p>
                      <p className="text-sm text-muted-foreground">Bengaluru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-foreground/90 mb-4 italic">
                    "Ordered the Assorted Box of 6 for my daughter's birthday and it was a huge hit! 
                    Every flavor was amazing. The delivery was prompt and the packaging was beautiful. 
                    Will definitely order again!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">RM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Rahul M.</p>
                      <p className="text-sm text-muted-foreground">Bengaluru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-foreground/90 mb-4 italic">
                    "The best brownies in Bangalore! I've tried multiple flavors and they're all 
                    fantastic. The walnut brownie with crunchy walnuts is my favorite. Great 
                    quality and worth every rupee."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">AS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Ananya S.</p>
                      <p className="text-sm text-muted-foreground">Bengaluru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-foreground/90 mb-4 italic">
                    "Ordered the Belgian Choco Overload Tub for a weekend treat and it exceeded 
                    all expectations! Generous portions and incredibly decadent. Brownie Bae Co. 
                    has become our go-to for all celebrations!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">KK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Karan K.</p>
                      <p className="text-sm text-muted-foreground">Bengaluru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-secondary/50 rounded-2xl p-12 border border-border">
            <h2 className="text-3xl font-bold text-gradient-gold mb-4">
              Ready to taste the difference?
            </h2>
            <p className="text-muted-foreground mb-6">
              Experience the love in every bite
            </p>
            <a href="/">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:scale-105 duration-300 h-11 px-8">
                Order Now
              </button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
