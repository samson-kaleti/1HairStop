import { SectionTitle } from '../ui/SectionTitle';

export function StudioSection() {
  return (
    <section className="max-w-8xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="space-y-2">
            <SectionTitle
              title="THE HUMAN HAIR EXTENSIONS STUDIO"
              className="mb-6"
            />
            <span className="text-sm uppercase tracking-wider text-[#1A1B188C] font-gill">
              JUBILEE HILLS, HYDERABAD
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed font-gill text-xl   ">
            We at 1 Hair Stop are thrilled to announce our biggest leap outside of e-commerce,
            with our first offline human hair extensions studio located in the heart of the city,
            Hyderabad. Come down for an in-person consult, try and buy natural hair extensions,
            wigs, and toppers that suit your hair needs.
          </p>

          <button className="bg-[#C5B4A9] text-white font-bold px-8 font-gill py-3 uppercase text-sm tracking-wider hover:bg-[#b3a194] transition-colors">
            Visit Us
          </button>
        </div>

        {/* Image Collage */}
        <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2 mt-12">
          {/* Image 1 - Top Left */}
          <div className="absolute top-0 left-4 w-[40%] h-[30%] lg:top-0 lg:left-20 lg:w-[30%] lg:h-[34%]">
            <img
              src="https://1hairstop.in/cdn/shop/files/studio-1.jpg"
              alt="Hair styling session"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 2 - Center */}
          <div className="absolute top-[25%] left-[30%] w-[60%] h-[40%] lg:top-[15%] lg:left-[25%] lg:w-[45%] lg:h-[50%] z-10">
            <img
              src="https://1hairstop.in/cdn/shop/files/studio-7_2.jpg"
              alt="Models sitting"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 3 - Bottom Left */}
          <div className="absolute bottom-16 left-4 w-[35%] h-[30%] lg:bottom-36 lg:left-20 lg:w-[24%] lg:h-[30%] z--20">
            <img
              src="https://1hairstop.in/cdn/shop/files/studio-7.jpg"
              alt="Styling process"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 4 - Top Right */}
          <div className="absolute top-[10%] right-4 w-[40%] h-[30%] lg:top-0 lg:right-28 lg:w-[30%] lg:h-[40%] z-0">
            <img
              src="https://1hairstop.in/cdn/shop/files/studio-7_1.jpg"
              alt="Group photo"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
