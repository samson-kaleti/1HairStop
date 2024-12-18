export const BrandStory = () => {
    return (
      <section className="py-16 px-4 md:px-8 bg-[#faf1eb]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="https://1hairstop.in/cdn/shop/files/Richa_Raina_e383266b-dfac-4e6b-945c-c53320f09549.webp" 
                alt="Brand Founders" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                SISTERS BEHIND THE HAIR EXTENSION BRAND
              </h2>
              <p className="text-gray-600">
                Elevating Beauty, Elevating Confidence: Our Mission at 1 Hair Stop.
              </p>
              <p className="text-gray-600">
                Inspired by the vision of two trailblazing female entrepreneurs, Richa and Raina, 
                1 Hair Stop was founded in 2019 with a mission to empower women through the transformative 
                power of affordable human hair extensions.
              </p>
              <button className="bg-[#d4beb0] text-white px-12 py-3 ">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };