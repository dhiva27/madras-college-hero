import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Truck, Shield } from "lucide-react";
import shopHeroBg from "@/assets/shop-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={shopHeroBg} 
          alt="Shopping Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/80" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                New Collection 2024
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              Discover Your
              <br />
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg leading-relaxed animate-fade-in-up animation-delay-200">
              Explore our curated collection of premium products. Quality meets affordability in every purchase.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-400">
              <Button size="lg" variant="hero" className="group shadow-xl">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="heroOutline" className="shadow-xl">
                View Collections
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-white/70">On orders $50+</p>
              </div>
              
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="text-sm font-semibold">Secure Payment</p>
                <p className="text-xs text-white/70">100% Protected</p>
              </div>
              
              <div className="text-center">
                <Sparkles className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="text-sm font-semibold">Premium Quality</p>
                <p className="text-xs text-white/70">Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Product Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in animation-delay-400">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="aspect-square bg-white/20 rounded-2xl mb-4" />
              <h3 className="text-white font-bold text-lg mb-1">Premium Collection</h3>
              <p className="text-white/70 text-sm mb-3">Starting at $99</p>
              <Button variant="heroOutline" size="sm" className="w-full">
                Explore
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer mt-8">
              <div className="aspect-square bg-white/20 rounded-2xl mb-4" />
              <h3 className="text-white font-bold text-lg mb-1">Trending Now</h3>
              <p className="text-white/70 text-sm mb-3">Hot Deals</p>
              <Button variant="heroOutline" size="sm" className="w-full">
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
