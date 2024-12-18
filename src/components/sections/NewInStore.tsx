import { ProductCard } from '../product/ProductCard';
import { ViewMoreButton } from '../ui/ViewMoreButton';
import { SectionTitle } from '../ui/SectionTitle';

const newProducts = [
  {
    id: 1,
    name: "Receding Hairline Band",
    price: "₹9,200.00",
    image: "https://1hairstop.in/cdn/shop/files/receding-hairline-topper.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/files/receding-hairline-topper_2.jpg",
    rating: 5,
    reviews: 1,
    tag: "DROP 2 - 20TH DECEMBER 9 PM IST",
    soldOut: true
  },
  {
    id: 2,
    name: "FILL ME IN | Hair Powder - 15 grams",
    price: "₹1,500.00",
    image: "https://1hairstop.in/cdn/shop/files/Varietypack_5.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/files/Varietypack.jpg",
    rating: 4.5,
    reviews: 146,
  },
  {
    id: 3,
    name: "INVISI-LIGHT Cover-Up Patch (2 Clips)",
    price: "₹3,500.00 – ₹5,000.00",
    image: "https://1hairstop.in/cdn/shop/files/Fillmein_d4e344e3-a2ef-4523-bbb0-b0d456702982.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/files/Fillmein_1.jpg", 
    rating: 5,
    reviews: 6,
  },
  {
    id: 4,
    name: "INVISI-LIGHT Cover-Up Patch",
    price: "₹3,500.00 – ₹5,000.00",
    image:"https://1hairstop.in/cdn/shop/files/2clip-Invisi-light-coverup-patch_1.jpg",
    hoverImage: "https://1hairstop.in/cdn/shop/files/2clip-Invisi-light-coverup-patch_2.jpg", // Hover Image
    rating: 5,
    reviews: 6,
  },
];


export function NewInStore() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="NEW IN STORE" className="mb-12" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} hoverButtonText="Add to Cart" />
          ))}
        </div>
        <ViewMoreButton href="/new-arrivals" className="mt-12" />
      </div>
    </section>
  );
}
