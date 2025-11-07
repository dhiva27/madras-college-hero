import { Button } from "@/components/ui/button";
import { Phone, MapPin, ShoppingCart, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground uppercase tracking-wide">ShopHub</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Online Store</span>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">+91 99999 88888</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Mumbai, India</span>
            </div>
            <Button variant="default" size="sm" className="shadow-md font-semibold">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
