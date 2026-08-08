import Link from "next/link";
import { navItems, siteName } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="text-lg font-semibold text-white">{siteName}</h2>
          <p className="mt-2 max-w-md text-sm leading-7 text-zinc-400">
            Building practical digital products with reliable engineering and
            modern user experiences.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="lg:justify-self-end">
          <ul className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {year} {siteName}. All rights reserved.
      </div>
    </footer>
  );
}
