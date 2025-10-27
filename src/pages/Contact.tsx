import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { Phone, Mail, MapPin, Instagram, MessageSquare, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [isCustomOrderDialogOpen, setIsCustomOrderDialogOpen] = useState(false);
  const [customOrderName, setCustomOrderName] = useState("");
  const [customOrderMobile, setCustomOrderMobile] = useState("");
  const [customOrderAddress, setCustomOrderAddress] = useState("");
  const [customOrderDetails, setCustomOrderDetails] = useState("");
  const [customOrderQuantity, setCustomOrderQuantity] = useState("");
  const [customOrderMessage, setCustomOrderMessage] = useState("");

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to know more about your brownies.";
    window.open(`https://wa.me/916366322338?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCustomOrderSubmit = () => {
    if (!customOrderName || !customOrderMobile || !customOrderAddress || !customOrderDetails) {
      alert("Please fill in all required fields (Name, Mobile Number, Address, and Custom Order Details)");
      return;
    }

    let orderText = `*Custom Order Request from BrownieBae.co*\n\n*Customer Details:*\n👤 Name: ${customOrderName}\n📱 Phone: ${customOrderMobile}\n📍 Address: ${customOrderAddress}`;
    
    orderText += `\n\n*Custom Order Details:*\n${customOrderDetails}`;
    
    if (customOrderQuantity.trim()) {
      orderText += `\n\n*Quantity:* ${customOrderQuantity}`;
    }
    
    if (customOrderMessage.trim()) {
      orderText += `\n\n*Special Instructions:*\n${customOrderMessage}`;
    }

    const whatsappUrl = `https://wa.me/916366322338?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setCustomOrderName("");
    setCustomOrderMobile("");
    setCustomOrderAddress("");
    setCustomOrderDetails("");
    setCustomOrderQuantity("");
    setCustomOrderMessage("");
    setIsCustomOrderDialogOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Cart />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you! Reach out for orders or inquiries
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover-lift bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Phone</h3>
                    <a
                      href="https://wa.me/916366322338"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 6366 322 338
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <a
                      href="mailto:hello@browniebae.co"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@browniebae.co
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Bengaluru, Karnataka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Instagram</h3>
                    <a
                      href="https://www.instagram.com/browniebae_co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @browniebae_co
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Custom Order CTA */}
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 mb-6">
            <CardContent className="pt-12 pb-12 text-center">
              <Palette className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h2 className="text-2xl font-bold mb-3">Place a Custom Order</h2>
              <p className="text-muted-foreground mb-6">
                Have something special in mind? Tell us your custom requirements
              </p>
              <Button
                onClick={() => setIsCustomOrderDialogOpen(true)}
                variant="hero"
                size="lg"
                className="rounded-full"
              >
                <Palette className="w-5 h-5 mr-2" />
                Request Custom Order
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-12 pb-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-3">Quick Order via WhatsApp</h2>
              <p className="text-muted-foreground mb-6">
                Get instant support and place your order directly
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:scale-105 duration-300 h-11 px-8"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Custom Order Dialog */}
      <Dialog open={isCustomOrderDialogOpen} onOpenChange={setIsCustomOrderDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-gradient-gold">
              Custom Order Request
            </DialogTitle>
            <DialogDescription>
              Fill in your details and describe your custom order requirements
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="custom-name">Name *</Label>
              <Input
                id="custom-name"
                placeholder="Enter your name"
                value={customOrderName}
                onChange={(e) => setCustomOrderName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-mobile">Mobile Number *</Label>
              <Input
                id="custom-mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={customOrderMobile}
                onChange={(e) => setCustomOrderMobile(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-address">Delivery Address *</Label>
              <Textarea
                id="custom-address"
                placeholder="Enter your delivery address"
                value={customOrderAddress}
                onChange={(e) => setCustomOrderAddress(e.target.value)}
                rows={3}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-details">Custom Order Details *</Label>
              <Textarea
                id="custom-details"
                placeholder="Describe your custom requirements (e.g., flavors, decorations, special occasions, dietary restrictions, etc.)"
                value={customOrderDetails}
                onChange={(e) => setCustomOrderDetails(e.target.value)}
                rows={4}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-quantity">Quantity (Optional)</Label>
              <Input
                id="custom-quantity"
                placeholder="e.g., 12 brownies, 2 boxes, etc."
                value={customOrderQuantity}
                onChange={(e) => setCustomOrderQuantity(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-message">Special Instructions (Optional)</Label>
              <Textarea
                id="custom-message"
                placeholder="Any additional notes or preferences?"
                value={customOrderMessage}
                onChange={(e) => setCustomOrderMessage(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setIsCustomOrderDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="hero"
              onClick={handleCustomOrderSubmit}
              className="rounded-full"
            >
              Send via WhatsApp
              <MessageSquare className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Contact;
