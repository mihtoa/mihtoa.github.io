'use client';

import { usePathname } from "next/navigation";

import PageTransition from "../components/PageTransition";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <PageTransition pathname={pathname}>
      {children}
    </PageTransition>
  );
}
