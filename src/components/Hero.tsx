export function Hero() {
  return (
    <div className="relative min-h-[600px] lg:h-[700px] w-full overflow-hidden bg-white">
      {/* Main Hero Image */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <img
            src="https://1hairstop.in/cdn/shop/files/Sale-banner-desktop_4_b4237c1e-7537-42a8-a288-1d79d90787db.jpg"
            alt="Two women showing hair transformation"
            className="h-full w-full object-contain object-center scale-100 bg-gray-50" // Added scale-110 and object-center
          />
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
         </div>
      </div>
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-end justify-center pb-12">
          <div className="max-w-xl pt-20 lg:pt-0 flex justify-center flex-col">
            <div className="text-sm tracking-wider text-white mb-4">
              TRANSFORM WITH US
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              HAIR THINNING SOLUTIONS
            </h1>
            <button className="bg-white w-32  text-gray-900 px-3 py-2 hover:bg-gray-100 transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}