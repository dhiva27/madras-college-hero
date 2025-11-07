import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">MADRAS</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Engineering College</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-accent" />
              <span className="font-medium text-foreground">+91 70020 80020</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Chennai, India</span>
            </div>
            <Button variant="default" size="sm" className="shadow-md">
              TNEA Code 1203
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
