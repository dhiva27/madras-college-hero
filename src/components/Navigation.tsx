import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">ShopHub</span>
              <span className="text-xs text-muted-foreground">Your Style Destination</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sale
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full text-xs text-white flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
