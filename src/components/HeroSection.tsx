import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent-foreground text-sm font-semibold mb-6 backdrop-blur-sm">
              🎓 India's Premier Engineering Institution
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Your Tech Journey
            <br />
            <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
              Begins Here
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Specializing in IT, Computer Science, Data Science, Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <Button size="lg" variant="hero" className="group shadow-lg">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="heroOutline" className="shadow-lg">
              Explore Programs
            </Button>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-white font-semibold text-lg">Paid Internship</p>
              <p className="text-white/70 text-sm">Opportunities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-white font-semibold text-lg">Modern Lab</p>
              <p className="text-white/70 text-sm">Facilities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-white font-semibold text-lg">Industry-Ready</p>
              <p className="text-white/70 text-sm">Curriculum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
