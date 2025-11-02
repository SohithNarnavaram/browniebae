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
      text: "Absolutely divine! The Triple Chocolate Brownie is my go-to dessert. Perfectly fudgy and not too sweet. I order from Brownie Bae every week!",
      date: "October 2024",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      rating: 5,
      text: "Ordered the Belgian Chocolate Stuffed Brownies for my wife's birthday. She was over the moon! The quality and taste are unmatched. Highly recommend!",
      date: "October 2024",
    },
    {
      id: 3,
      name: "Anjali Desai",
      rating: 5,
      text: "The Mini Brownie Tub is perfect for our family movie nights. Fresh, delicious, and beautifully packaged. Brownie Bae never disappoints!",
      date: "September 2024",
    },
    {
      id: 4,
      name: "Vikram Patel",
      rating: 5,
      text: "Best brownies in town! The Nutella Brownie is incredibly rich and decadent. Great for gifting too - the packaging is top-notch.",
      date: "September 2024",
    },
    {
      id: 5,
      name: "Neha Kapoor",
      rating: 5,
      text: "I'm completely addicted to the Walnut Brownies. The perfect balance of crunch and fudginess. Customer service is excellent too!",
      date: "August 2024",
    },
    {
      id: 6,
      name: "Arjun Singh",
      rating: 5,
      text: "Ordered the Assorted Box of 6 for a party. Every single flavor was amazing! Our guests couldn't stop asking where we got them from.",
      date: "August 2024",
    },
    {
      id: 7,
      name: "Divya Reddy",
      rating: 5,
      text: "The Lotus Biscoff Brownie is heaven on earth! I love how fresh they are and the delivery is always prompt. Thank you Brownie Bae!",
      date: "July 2024",
    },
    {
      id: 8,
      name: "Karan Malhotra",
      rating: 5,
      text: "Quality ingredients, amazing taste, beautiful presentation. These brownies make the perfect gift. I've been a regular customer for months now.",
      date: "July 2024",
    },
    {
      id: 9,
      name: "Meera Joshi",
      rating: 5,
      text: "The Classic Brownie is simple yet perfect. It's exactly what a brownie should be - rich, fudgy, and absolutely delicious. Will order again!",
      date: "June 2024",
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

