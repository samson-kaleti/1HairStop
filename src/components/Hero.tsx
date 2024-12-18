export function Hero() {
  return (
    <div className="relative flex flex-col ">
      {/* Image Container */}
      <div className="relative w-full bg-gray-50">
        <img
          src="https://1hairstop.in/cdn/shop/files/Sale-banner-desktop_4_b4237c1e-7537-42a8-a288-1d79d90787db.jpg"
          alt="Two women showing hair transformation"
          className="w-full h-[400px] md:h-[600px] lg:h-[700px] lg:object-contain sm:object-cover    object-center"
        />
        {/* Gradient Overlay - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content - Positioned below image on mobile, overlay on desktop */}
      <div className="w-full bg-white md:absolute md:bottom-0 md:left-0 md:bg-transparent">
        <div className="container mx-auto px-4 py-8 md:py-12 text-center">
          <div className="text-gray-800 md:text-white text-sm tracking-wider mb-4">
            TRANSFORM WITH US
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 md:text-white mb-6">
            HAIR THINNING SOLUTIONS
          </h1>
          <button className="bg-[#c5b1a2] md:bg-white text-white md:text-gray-900 px-28 py-3 hover:bg-gray-800 md:hover:bg-gray-100 transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}