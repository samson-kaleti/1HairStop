import { SectionTitle } from '../ui/SectionTitle';

export function StudioSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
           
            <SectionTitle title="THE HUMAN HAIR EXTENSIONS STUDIO"
              className="mb-6"/> 

<span className="text-sm uppercase tracking-wider text-[#1A1B188C]">
              JUBILEE HILLS, HYDERABAD
            </span>
            
            
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            We at 1 Hair Stop are thrilled to announce our biggest leap outside of e-commerce,
            with our first offline human hair extensions studio located in the heart of the city,
            Hyderabad. Come down for an in-person consult, try and buy natural hair extensions,
            wigs, and toppers that suit your hair needs.
          </p>
          
          <button className="bg-[#C5B4A9] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#b3a194] transition-colors">
            Visit Us
          </button>
        </div>

        {/* Image Grid */}
        <div className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
          <div className="col-span-4 row-span-3 col-start-1 row-start-1">
            <img 
              src="https://1hairstop.in/cdn/shop/files/studio-1.jpg" 
              alt="Hair styling session"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-3 row-span-3 col-start-3 row-start-3">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df" 
              alt="Studio models"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-4">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" 
              alt="Studio space"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}