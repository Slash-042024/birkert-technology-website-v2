import { type ReactNode } from "react";
import { MainNavigation } from "@/components/navigation/main-navigation";
import { SiteFooter } from "@/components/layout/site-footer";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="background-grid" aria-hidden="true" />
      <div className="background-logo" aria-hidden="true" />
      <MainNavigation />
      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-6 lg:px-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
