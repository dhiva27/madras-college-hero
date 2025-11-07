import { Button } from "@/components/ui/button";
import { Truck, Shield, Gift } from "lucide-react";
import shopCleanBg from "@/assets/shop-clean-bg.jpg";

const HeroSection = () => {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={shopCleanBg} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              Your Shopping Journey Begins @ ShopHub.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              India's Premier Online Store Specializing in Fashion, Electronics, Home & Living, Beauty Products, Sports Equipment & Lifestyle Essentials.
            </p>

            {/* CTA Button */}
            <div className="mb-16 animate-fade-in-up animation-delay-400">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl">
                Start Shopping
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Free Delivery</span>
                <span className="text-muted-foreground">On Orders Above ₹999</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">100% Secure</span>
                <span className="text-muted-foreground">Payment Gateway</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Exclusive Deals</span>
                <span className="text-muted-foreground">For Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Fashion Category */}
            <div className="group relative bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/40 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-4xl">👗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Fashion & Apparel
                </h3>
                <p className="text-gray-700 mb-6">
                  Discover the latest trends in clothing, footwear, and accessories for every style and occasion.
                </p>
                <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Electronics Category */}
            <div className="group relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/40 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Electronics & Gadgets
                </h3>
                <p className="text-gray-700 mb-6">
                  Explore cutting-edge smartphones, laptops, and smart devices with the best deals online.
                </p>
                <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Home & Living Category */}
            <div className="group relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/40 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-4xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Home & Living
                </h3>
                <p className="text-gray-700 mb-6">
                  Transform your space with premium furniture, decor, and essentials for modern living.
                </p>
                <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Beauty Category */}
            <div className="group relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/40 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-4xl">💄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Beauty & Personal Care
                </h3>
                <p className="text-gray-700 mb-6">
                  Pamper yourself with premium skincare, cosmetics, and wellness products for every need.
                </p>
                <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Sports Category */}
            <div className="group relative bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/40 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-4xl">⚽</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Sports & Fitness
                </h3>
                <p className="text-gray-700 mb-6">
                  Gear up for your active lifestyle with quality sports equipment and fitness essentials.
                </p>
                <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Lifestyle Category */}
            <div className="group relative bg-gradient-to-br from-rose-100 to-rose-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/40 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Lifestyle & Accessories
                </h3>
                <p className="text-gray-700 mb-6">
                  Complete your look with trending bags, watches, jewelry, and lifestyle essentials.
                </p>
                <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
