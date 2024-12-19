import { ProductCard, Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  hoverButtonText : string;
}

export function ProductGrid({ products , hoverButtonText}: ProductGridProps) { 

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 font-gill">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} hoverButtonText={ hoverButtonText} />
      ))} 


      
    </div>
  );
}