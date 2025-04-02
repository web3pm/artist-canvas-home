
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              Artist Name
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Contemporary artist specializing in abstract paintings that evoke emotion through color and form. Based in New York City.
            </p>
            <Link 
              to="/prices" 
              className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-gray-100 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* This is a placeholder for your featured artwork */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Featured Artwork
            </div>
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section className="mt-24 md:mt-32">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">Recent Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="aspect-square bg-gray-100 animate-fade-in" 
                style={{ animationDelay: `${0.2 * item}s` }}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Artwork {item}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* About Section */}
        <section className="mt-24 md:mt-32 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">About the Artist</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 10 years of experience in the art world, I've developed a unique style that combines traditional techniques with contemporary themes. My work has been featured in galleries across the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each piece is created with meticulous attention to detail and a deep connection to the emotional resonance of color and form.
            </p>
          </div>
        </section>
      </main>
      
      <footer className="mt-20 py-12 border-t border-gray-100 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          &copy; {new Date().getFullYear()} Artist Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
