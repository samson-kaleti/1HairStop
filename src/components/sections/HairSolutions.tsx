import { ArrowRight} from 'lucide-react';

const HairSolutions = () => {
  const solutions = [
    { title: 'Scalp Like Toppers', isActive: true },
    { title: 'Undetectable Patches', isActive: false },
    { title: 'Seamless Extensions', isActive: false },
    { title: 'Luxury Wigs', isActive: false },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#f0e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Industry-leading Solutions For Your Hair
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center ">
          <div className="space-y-8 ">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`text-xl cursor-pointer transition-colors ${
                  solution.isActive ? 'text-black' : 'text-gray-400'
                }`}
              >
                {solution.title}
              </div>
            ))}
            <p className="text-gray-600 mt-6">
              Designed specifically for women struggling with hair thinning in the front and crown areas, 
              these toppers offer a simple and effective solution. Each topper is handcrafted with utmost care, 
              with every strand carefully knotted onto the lace to mimic the appearance of a natural scalp.
            </p>
            <button className="flex items-center space-x-2 text-black">
              <span>View All Toppers</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://1hairstop.in/cdn/shop/files/scalp-hair-toppers.jpg" 
              alt="Hair Extension Product" 
              className="w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default  HairSolutions