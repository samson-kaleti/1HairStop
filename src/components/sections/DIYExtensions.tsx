import { useEffect, useState } from 'react';
import { MobileSlider } from '../ui/MobileSlider'; // Adjust the import path

export const DIYExtensions = () => {
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    { title: 'Coloured Streaks', image: 'https://1hairstop.in/cdn/shop/files/Hair-thinning-solution-using-toppers-patches_8.jpg' },
    { title: 'Clip-in Bangs & Buns', image: 'https://1hairstop.in/cdn/shop/files/Hair-thinning-solution-using-toppers-patches_6.jpg' },
    { title: 'Volumizers', image: 'https://1hairstop.in/cdn/shop/files/Hair-thinning-solution-using-toppers-patches_9.jpg' },
    { title: 'Hair Toppers & Patches', image: 'https://1hairstop.in/cdn/shop/files/Hair-thinning-solution-using-toppers-patches_5.jpg' },
  ];

  useEffect(() => {
    const updateView = () => setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    updateView(); // Check initial width
    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-2">BE YOUR OWN HAIR STYLIST</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            DIY HAIR EXTENSIONS FOR ALL
          </h2>
        </div>

        {isMobile ? (
          <MobileSlider
            items={categories.map((category, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                {/* Image with Black Shade Overlay */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>

                {/* Title with Animated Underline */}
                <div className="absolute bottom-4 left-4 bg-opacity-90 text-white px-4 py-2 rounded">
                  <p className="text-xl font-medium relative">
                    {category.title}
                    {/* Underline Animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </p>
                </div>
              </div>
            ))}
            autoPlay={true}
            interval={5000}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                {/* Image with Black Shade Overlay */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>

                {/* Title with Animated Underline */}
                <div className="absolute bottom-4 left-4 bg-opacity-90 text-white px-4 py-2 rounded">
                  <p className="text-xl font-medium relative">
                    {category.title}
                    {/* Underline Animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
