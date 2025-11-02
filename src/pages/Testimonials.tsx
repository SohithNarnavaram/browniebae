import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Okay but like, the Triple Chocolate Brownie??? Literally obsessed. It's giving everything - fudgy, rich, and not overly sweet. Weekly orders are a must now fr fr 🤎",
      date: "November 2025",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      rating: 5,
      text: "Got the Belgian Chocolate Stuffed for my wife's bday and she went FERAL. No cap, these are the best brownies we've ever had. 10/10 would recommend!",
      date: "November 2025",
    },
    {
      id: 3,
      name: "Anjali Desai",
      rating: 5,
      text: "Mini Brownie Tub is our movie night staple now! The packaging? *chef's kiss* The taste? Immaculate. Brownie Bae stays winning 💯",
      date: "October 2025",
    },
    {
      id: 4,
      name: "Vikram Patel",
      rating: 5,
      text: "Nutella Brownie hit different tbh. So rich and gooey, I'm literally in love. Also makes a sick gift - the packaging slaps!",
      date: "October 2025",
    },
    {
      id: 5,
      name: "Neha Kapoor",
      rating: 5,
      text: "Ngl I'm lowkey addicted to the Walnut Brownies 😭 Perfect crunch meets perfect fudge. Plus their customer service? Elite tier for real",
      date: "October 2025",
    },
    {
      id: 6,
      name: "Arjun Singh",
      rating: 5,
      text: "Got the Assorted Box for a party and everyone was like 'WHERE DID YOU GET THESE??' Each flavor absolutely slaps. No misses, only hits ✨",
      date: "October 2025",
    },
    {
      id: 7,
      name: "Divya Reddy",
      rating: 5,
      text: "The Lotus Biscoff Brownie is unreal y'all. Always fresh, delivery is quick, and it tastes like a warm hug. Brownie Bae you're the GOAT! 🙌",
      date: "September 2025",
    },
    {
      id: 8,
      name: "Karan Malhotra",
      rating: 5,
      text: "The quality is insane, the taste is bussin, and they look so aesthetic. Been a regular for months and it's giving main character energy every time 📸",
      date: "September 2025",
    },
    {
      id: 9,
      name: "Meera Joshi",
      rating: 5,
      text: "Classic Brownie stays unmatched. Simple but make it bougie. Rich, fudgy, and absolutely slaying the brownie game. Will def order again!",
      date: "September 2025",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="gold" className="mb-4">
              <Star className="w-4 h-4 mr-1" />
              Customer Reviews
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy customers who love our handcrafted brownies
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift bg-card border-border relative overflow-hidden">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
              Ready to Experience the Magic?
            </h2>
            <p className="text-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of happy customers and taste the difference for yourself. Order your favorite brownies today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Browse Menu
              </a>
              <a 
                href="https://wa.me/916366322338"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary hover:bg-primary/10 h-11 px-8"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;

