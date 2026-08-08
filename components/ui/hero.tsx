import { type ReactNode } from "react";

type HeroProps = {
  badge?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function Hero({ badge, title, description, actions, aside }: HeroProps) {
  return (
    <section className="grid gap-10 pb-20 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-28 lg:pt-24">
      <div>
        {badge ? (
          <p className="mb-5 inline-flex rounded-full border border-brand-400/40 bg-brand-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            {badge}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          {description}
        </p>
        {actions ? (
          <div className="mt-9 flex flex-wrap gap-3">{actions}</div>
        ) : null}
      </div>
      {aside ? <div>{aside}</div> : null}
    </section>
  );
}
