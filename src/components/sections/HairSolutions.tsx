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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 font-gill ">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 font-gill">
          Industry-leading Solutions For Your Hair
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center font-gill ">
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
            <p className="text-gray-600 mt-6 font-gill">
              Designed specifically for women struggling with hair thinning in the front and crown areas, 
              these toppers offer a simple and effective solution. Each topper is handcrafted with utmost care, 
              with every strand carefully knotted onto the lace to mimic the appearance of a natural scalp.
            </p>
            <button className="flex items-center space-x-2 text-black font-gill">

              <span>View All Toppers</span>
              <ArrowRight size={20}  /> 

            </button>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>

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