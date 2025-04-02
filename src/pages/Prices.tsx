
import Navbar from "../components/layout/Navbar";

const Prices = () => {
  const pricingCategories = [
    {
      title: "Original Paintings",
      items: [
        { size: "Small (8\" x 10\")", price: "$400 - $800" },
        { size: "Medium (16\" x 20\")", price: "$800 - $1,500" },
        { size: "Large (24\" x 36\")", price: "$1,500 - $3,000" },
        { size: "Extra Large (36\" x 48\")", price: "$3,000 - $6,000" },
      ]
    },
    {
      title: "Limited Edition Prints",
      items: [
        { size: "Small (8\" x 10\")", price: "$95" },
        { size: "Medium (12\" x 16\")", price: "$150" },
        { size: "Large (18\" x 24\")", price: "$250" },
      ]
    },
    {
      title: "Commissions",
      items: [
        { size: "Small (8\" x 10\")", price: "$600 - $1,000" },
        { size: "Medium (16\" x 20\")", price: "$1,000 - $2,000" },
        { size: "Large (24\" x 36\")", price: "$2,000 - $4,000" },
        { size: "Extra Large (36\" x 48\")", price: "$4,000 - $8,000" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-3 text-center animate-fade-in">
          Pricing
        </h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Below is a general pricing guide for my artwork. Prices may vary based on complexity, materials, and other factors.
        </p>
        
        {pricingCategories.map((category, idx) => (
          <div 
            key={category.title}
            className="mb-16 animate-fade-in" 
            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
          >
            <h2 className="text-xl md:text-2xl font-serif mb-6 pb-2 border-b border-gray-200">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.size} className="flex justify-between items-center py-2">
                  <span className="text-gray-800">{item.size}</span>
                  <span className="font-medium">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-20 p-8 bg-gray-50 border border-gray-100 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-xl font-serif mb-4">Commission Process</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Initial consultation to discuss vision, size, and medium</li>
            <li>• 50% deposit required to begin work</li>
            <li>• Progress updates with photos throughout the creation process</li>
            <li>• Remaining balance due upon completion</li>
            <li>• Shipping or local pickup arrangements made after final payment</li>
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center">
              To discuss a commission or purchase, please contact me at <span className="font-medium">artist@example.com</span>
            </p>
          </div>
        </div>
      </main>
      
      <footer className="mt-20 py-12 border-t border-gray-100 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          &copy; {new Date().getFullYear()} Artist Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Prices;
