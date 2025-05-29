import { ReactNode } from 'react';

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="size-full relative px-4 sm:px-10 md:px-26 xl:px-52 pb-10 mt-16 md:mt-24">
      {children}
    </section>
  );
}
