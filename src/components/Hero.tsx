import { Button } from "@/components/ui/button";
import { Leaf, Heart, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {LOGOS} from "@/config/constants";

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/contact');
  };

  const handleBenefitsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/benefits');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-1 animate-fade-in relative w-full max-w-[400px] mx-auto aspect-[2/1]">
            <img 
              src={LOGOS.logo} 
              alt="Entocellular Logo" 
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
            Harnessing the Power of{' '}
            <span className="text-primary bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent">
              Insect Resiliency
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Creating sustainable, cost-effective, and ethical pet food ingredients that consumers and manufacturers will adopt.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center text-primary-600">
              <Leaf className="w-6 h-6 mr-2" />
              <span className="font-semibold">Sustainable</span>
            </div>
            <div className="flex items-center text-primary-600">
              <Shield className="w-6 h-6 mr-2" />
              <span className="font-semibold">Cost-Effective</span>
            </div>
            <div className="flex items-center text-primary-600">
              <Heart className="w-6 h-6 mr-2" />
              <span className="font-semibold">Ethical</span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg" 
              onClick={handleBenefitsClick}
            >
              Benefits
            </Button> */}

            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg" 
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
