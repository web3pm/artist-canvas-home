
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Index = () => {
  // Recent artworks from AliniahLunaris on DeviantArt
  const recentWorks = [
    {
      id: 1,
      title: "Lunaria",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28e91a6e-13a6-4952-b31d-d4306c5f78e7/dgpfp9u-2cd39e0e-c3c4-4ccd-950f-b5871d2d4a56.jpg",
      link: "https://www.deviantart.com/aluniahlunaris/art/Lunaria-1006658590"
    },
    {
      id: 2,
      title: "Lunaris",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28e91a6e-13a6-4952-b31d-d4306c5f78e7/dglcgdn-edddde09-16c9-4b5e-bac2-5ed6f2cbba22.jpg",
      link: "https://www.deviantart.com/aluniahlunaris/art/Lunaris-995682399"
    },
    {
      id: 3,
      title: "Aliniah",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28e91a6e-13a6-4952-b31d-d4306c5f78e7/dgdthnd-87bb7be1-8ea7-4a52-b4a8-92c5f8a4a3b9.jpg",
      link: "https://www.deviantart.com/aluniahlunaris/art/Aliniah-981071745"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
              AliniahLunaris
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Contemporary digital artist specializing in fantasy and character art. Creating vibrant worlds and characters that tell stories through color and form.
            </p>
            <Link 
              to="/prices" 
              className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={recentWorks[0].image} 
              alt={recentWorks[0].title} 
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section className="mt-24 md:mt-32">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">Recent Works</h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {recentWorks.map((artwork) => (
                <CarouselItem key={artwork.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <a 
                      href={artwork.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block aspect-square overflow-hidden group animate-fade-in" 
                      style={{ animationDelay: `${0.2 * artwork.id}s` }}
                    >
                      <img 
                        src={artwork.image} 
                        alt={artwork.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif">
                          {artwork.title}
                        </span>
                      </div>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </section>
        
        {/* About Section */}
        <section className="mt-24 md:mt-32 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">About the Artist</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-6">
              AliniahLunaris is a digital artist known for creating fantastical character portraits and scenes. Drawing inspiration from mythology, nature, and dreams, each artwork is crafted to transport viewers to magical realms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The artist's unique style combines vibrant colors with ethereal lighting to create a dreamlike quality that has become a signature element of their work.
            </p>
          </div>
        </section>
      </main>
      
      <footer className="mt-20 py-12 border-t border-gray-100 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          &copy; {new Date().getFullYear()} AliniahLunaris. All rights reserved.
          <div className="mt-2">
            <a 
              href="https://www.deviantart.com/aluniahlunaris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              View on DeviantArt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
