import { useEffect, useState } from 'react';
import { MobileSlider } from '../ui/MobileSlider'; // Adjust the import path
import { SectionTitle } from '../ui/SectionTitle';
import { ProductCard } from '../product/ProductCard';
import { ProductGrid } from '../product/ProductGrid';
import type { Product } from '../product/ProductCard';

const favoriteProducts: Product[] = [
  {
    id: 1,
    name: "Hair Powder - 15 grams",
    price: "₹1,500.00",
    image: "https://1hairstop.in/cdn/shop/files/Fillmein_d4e344e3-a2ef-4523-bbb0-b0d456702982.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/files/Fillmein_1.jpg?v=1724940469&width=165",
    rating: 4.5,
    reviews: 146,
  },
  {
    id: 2,
    name: "Invisible Cover-Up Patch - Wavy",
    price: "₹1,600.00 – ₹2,400.00",
    image: "https://1hairstop.in/cdn/shop/products/Invisible-Cover-up-patch.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/products/Invisible-Cover-up-patch_1.jpg",
    rating: 5,
    reviews: 6,
  },
  {
    id: 3,
    name: "Quick Fix | Hair Powder",
    price: "₹1,500.00",
    image: "https://1hairstop.in/cdn/shop/files/Hair-powder_1.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/files/Hair-powder_2.jpg",
    rating: 4.5,
    reviews: 3,
  },
  {
    id: 4,
    name: "Messy Bun Scrunchie",
    price: "₹2,400.00 – ₹2,600.00",
    image: "https://1hairstop.in/cdn/shop/products/messy-buns_-1.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/products/Messy-bun-scruchie-3.jpg",
    rating: 5,
    reviews: 11,
  },
];

export function FavoriteFinds() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    updateView(); // Check initial width
    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Favourite Finds"
          subtitle="Customer-Approved 1 Hair Stop Essentials"
          className="text-center mb-12"
        />
        {isMobile ? (
          <MobileSlider
            items={favoriteProducts.map((product) => (
              <ProductCard key={product.id} {...product} hoverButtonText="CHOOSE OPTION" />
            ))}
            autoPlay={true}
            interval={5000}
          />
        ) : (
          <ProductGrid products={favoriteProducts} hoverButtonText="CHOOSE OPTION" />
        )}
      </div>
    </section>
  );
}
