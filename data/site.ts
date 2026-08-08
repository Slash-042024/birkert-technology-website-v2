export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
};

export const siteName = "Birkert Technology";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const products: Product[] = [
  {
    slug: "towcontrol",
    name: "TowControl",
    tagline: "Smart towing operations dashboard",
    description:
      "A modern command center for dispatch flow, fleet coordination, and operational visibility.",
    href: "/products/towcontrol",
  },
  {
    slug: "homebalance",
    name: "HomeBalance",
    tagline: "Intelligent home budget planning",
    description:
      "A focused financial planning experience that helps households understand spending and plan ahead.",
    href: "/products/homebalance",
  },
];
