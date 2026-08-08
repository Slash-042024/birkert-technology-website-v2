import Link from "next/link";
import { type Product } from "@/data/site";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group h-full transition duration-300 hover:border-brand-400/50 hover:bg-brand-500/[0.07]">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
        {product.tagline}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {product.description}
      </p>
      <Link
        href={product.href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-brand-300 transition hover:text-brand-200"
      >
        Explore product
      </Link>
    </Card>
  );
}
