"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { portfolioProjects } from "@/data/portfolio";
import { navItems, siteName } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MainNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const desktopPortfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        desktopPortfolioRef.current &&
        !desktopPortfolioRef.current.contains(target)
      ) {
        setIsPortfolioOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPortfolioOpen(false);
        setIsMobilePortfolioOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-white"
        >
          {siteName}
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 transition hover:border-white/30 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.href === "/portfolio") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  ref={desktopPortfolioRef}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className={`rounded-lg px-3 py-2 text-sm transition ${
                        active
                          ? "bg-brand-500/20 text-brand-200"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isPortfolioOpen}
                      aria-haspopup="menu"
                      aria-label="Toggle portfolio projects menu"
                      className="rounded-lg px-2 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      onClick={() => setIsPortfolioOpen((prev) => !prev)}
                    >
                      <span aria-hidden="true">▾</span>
                    </button>
                  </div>

                  {isPortfolioOpen ? (
                    <ul
                      role="menu"
                      aria-label="Portfolio projects"
                      className="absolute right-0 top-[calc(100%+0.4rem)] z-50 w-72 rounded-xl border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl"
                    >
                      <li>
                        <Link
                          href="/portfolio"
                          role="menuitem"
                          className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                          onClick={() => setIsPortfolioOpen(false)}
                        >
                          All Portfolio Work
                        </Link>
                      </li>
                      {portfolioProjects.map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={project.href}
                            role="menuitem"
                            className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            onClick={() => setIsPortfolioOpen(false)}
                          >
                            {project.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active
                    ? "bg-brand-500/20 text-brand-200"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {isMenuOpen ? (
        <nav
          className="border-t border-white/10 px-6 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-1 pt-3">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              if (item.href === "/portfolio") {
                return (
                  <li key={item.href}>
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        className={`block flex-1 rounded-lg px-3 py-2 text-sm transition ${
                          active
                            ? "bg-brand-500/20 text-brand-200"
                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={isMobilePortfolioOpen}
                        aria-label="Toggle portfolio projects menu"
                        className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        onClick={() =>
                          setIsMobilePortfolioOpen((prev) => !prev)
                        }
                      >
                        <span aria-hidden="true">
                          {isMobilePortfolioOpen ? "-" : "+"}
                        </span>
                      </button>
                    </div>

                    {isMobilePortfolioOpen ? (
                      <ul className="mt-1 grid gap-1 pl-3">
                        <li>
                          <Link
                            href="/portfolio"
                            className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                            onClick={() => {
                              setIsMobilePortfolioOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            All Portfolio Work
                          </Link>
                        </li>
                        {portfolioProjects.map((project) => (
                          <li key={project.slug}>
                            <Link
                              href={project.href}
                              className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                              onClick={() => {
                                setIsMobilePortfolioOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {project.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      active
                        ? "bg-brand-500/20 text-brand-200"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
