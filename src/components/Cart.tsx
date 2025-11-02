import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, X, Plus, Minus, Send, Trash2, ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
import { useCart } from "@/context/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, itemCount, clearCart } = useCart();
  const { toast } = useToast();
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const navigate = useNavigate();

  const handleDeleteClick = (itemId: string) => {
    setDeleteItemId(itemId);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (deleteItemId) {
      removeFromCart(deleteItemId);
      setIsDeleteDialogOpen(false);
      setDeleteItemId(null);
    }
  };

  const handleExploreItems = () => {
    setIsSheetOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const element = document.getElementById("menu");
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

  const handleCheckout = () => {
    setIsCheckoutDialogOpen(true);
  };

  const handleSubmitOrder = () => {
    if (!customerName || !mobileNumber || !address) {
      alert("Please fill in all required fields (Name, Mobile Number, and Address)");
      return;
    }

    let orderText = `*New Order from BrownieBae.co*\n\n*Customer Details:*\n👤 Name: ${customerName}\n📱 Phone: ${mobileNumber}\n📍 Address: ${address}`;
    
    if (customMessage.trim()) {
      orderText += `\n💬 Custom Message: ${customMessage}`;
    }
    
    orderText += `\n\n*Order Items:*\n${items
      .map((item) => `• ${item.name} x ${item.quantity} - Rs. ${item.price * item.quantity}`)
      .join("\n")}\n\n*Total:* Rs. ${total}`;

    const whatsappUrl = `https://wa.me/916366322338?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form and close dialogs
    setCustomerName("");
    setMobileNumber("");
    setAddress("");
    setCustomMessage("");
    setIsCheckoutDialogOpen(false);
    setIsSheetOpen(false);
    clearCart();
  };

  const handleInstagramCheckout = async () => {
    if (!customerName || !mobileNumber || !address) {
      alert("Please fill in all required fields (Name, Mobile Number, and Address)");
      return;
    }

    let orderText = `*New Order from BrownieBae.co*\n\n*Customer Details:*\n👤 Name: ${customerName}\n📱 Phone: ${mobileNumber}\n📍 Address: ${address}`;
    
    if (customMessage.trim()) {
      orderText += `\n💬 Custom Message: ${customMessage}`;
    }
    
    orderText += `\n\n*Order Items:*\n${items
      .map((item) => `• ${item.name} x ${item.quantity} - Rs. ${item.price * item.quantity}`)
      .join("\n")}\n\n*Total:* Rs. ${total}`;

    try {
      // Copy to clipboard
      await navigator.clipboard.writeText(orderText);
      
      toast({
        title: "Order details copied!",
        description: "Your order details have been copied. Paste and send in the Instagram DM.",
        duration: 3000,
      });
      
      // Open Instagram DM directly
      window.open("https://www.instagram.com/direct/t/browniebae_co/", "_blank");
      
      // Reset form and close dialogs
      setCustomerName("");
      setMobileNumber("");
      setAddress("");
      setCustomMessage("");
      setIsCheckoutDialogOpen(false);
      setIsSheetOpen(false);
      clearCart();
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      alert("Failed to copy to clipboard. Please try again.");
    }
  };

  return (
    <>
    <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove Item?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to remove this item from your cart? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <Dialog open={isCheckoutDialogOpen} onOpenChange={setIsCheckoutDialogOpen}>
      <DialogContent className="sm:max-w-[540px] max-h-[90vh] overflow-y-auto p-4 sm:p-6 gap-4">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl sm:text-2xl font-serif text-gradient-gold">
            Checkout Details
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Please fill in your details to complete your order
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold">Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="h-10 sm:h-11"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-sm font-semibold">Mobile Number *</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              className="h-10 sm:h-11"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-semibold">Delivery Address *</Label>
            <Textarea
              id="address"
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              required
              className="resize-none"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold">Custom Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any special instructions or preferences?"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows={2}
              className="resize-none"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="outline"
            onClick={() => setIsCheckoutDialogOpen(false)}
            className="w-full sm:w-auto order-last sm:order-first"
          >
            Cancel
          </Button>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full sm:w-auto sm:flex-1">
            <Button
              variant="default"
              onClick={handleInstagramCheckout}
              className="w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 h-10 sm:h-11"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
            <Button
              variant="hero"
              onClick={handleSubmitOrder}
              className="w-full rounded-full h-10 sm:h-11"
            >
              <Send className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 rounded-full w-16 h-16 shadow-2xl bg-primary hover:bg-primary/90"
        >
          <ShoppingCart className="w-6 h-6" />
          {itemCount > 0 && (
            <Badge
              variant="gold"
              className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center p-0 rounded-full"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg bg-card border-border">
        <SheetHeader>
          <SheetTitle className="text-2xl font-serif text-gradient-gold">
            Your Cart
          </SheetTitle>
          <SheetDescription>
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-280px)] mt-6 pr-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
              <ShoppingCart className="w-16 h-16 mb-4 opacity-50" />
              <p className="mb-6">Your cart is empty</p>
              <Button
                variant="hero"
                size="lg"
                onClick={handleExploreItems}
                className="rounded-full"
              >
                Explore Items
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="space-y-4 pb-28">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-background rounded-lg border border-border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-primary font-bold">Rs. {item.price}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(item.id)}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-card border-t border-border shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-primary">
                Rs. {total}
              </span>
            </div>
            <Button
              variant="hero"
              className="w-full rounded-full mb-3"
              size="lg"
              onClick={handleCheckout}
            >
              Checkout
              <Send className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full"
              size="lg"
              onClick={handleExploreItems}
            >
              Explore Items
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
    </>
  );
};
