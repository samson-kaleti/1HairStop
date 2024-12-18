import { Star } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  rating: number;
  reviews: number;
  tag?: string;
  soldOut?: boolean;
}

interface ProductCardProps extends Product {
  hoverButtonText?: string; // New prop for hover button text
}

export function ProductCard({
  name,
  price,
  image,
  hoverImage,
  rating,
  reviews,
  tag,
  soldOut,
  hoverButtonText = "Add to Cart", // Default value
}: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
        {tag && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-red-700 text-white px-3 py-1 text-xs font-medium rounded">
              {tag}
            </span>
          </div>
        )}

        {/* Default Image */}
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Hover Image */}
        <img
          src={hoverImage}
          alt={name}
          className="h-full w-full object-cover object-center absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Hover Button */}
        <div
          className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
        >
          <button className="w-full bg-gray-900 text-white py-2 text-sm font-medium">
            {hoverButtonText}
          </button>
        </div>

        {/* Sold Out Overlay */}
        {soldOut && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium">
              SOLD OUT
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({reviews})</span>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}
