import { MobileSlider } from "../ui/MobileSlider";

const transformations = [
  {
    image: 'https://1hairstop.in/cdn/shop/files/4x5-silk--hair-topper_174.jpg',
  },
  {
    image: 'https://1hairstop.in/cdn/shop/files/7-set-seamless-wavy-transformation.jpg',
  },
  {
    image: 'https://1hairstop.in/cdn/shop/files/messy-bun-scrunchie_67.jpg',
  },
  {
    image: 'https://1hairstop.in/cdn/shop/files/3-set-clip-in-extensions_6.jpg',
  },
  {
    image: 'https://1hairstop.in/cdn/shop/files/invisible-cover-uo-patch_155.jpg',
  },
];

export function Transformations() {
  // Prepare slider items for MobileSlider
  const sliderItems = transformations.map((transform, index) => (
    <div key={index} className="relative">
      <img
        src={transform.image}
        alt={`Transformation ${index + 1}`}
        className="w-full aspect-[3/4] object-cover"
      />
    </div>
  ));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  mb-4 font-gill">
            Real Life Hair Transformations With 1 Hair Stop Human Hair Extensions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto font-gill">
            Take a peek at the journeys of our incredible customers who have found a renewed sense
            of self with the help of our hair extension solutions.
          </p>
        </div>

        {/* Desktop Grid (visible on md and above) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 font-gill">
          {transformations.map((transform, index) => (
            <div key={index} className="relative">
              <img
                src={transform.image}
                alt={`Transformation ${index + 1}`}
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Mobile Slider (visible on sm and below) */}
        <div className="md:hidden">
          <MobileSlider items={sliderItems} autoPlay={true} interval={4000} />
        </div>
      </div>
    </section>
  );
}
