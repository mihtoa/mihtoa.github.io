"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Experiments", href: "/experiments" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header flex w-full justify-center sticky top-0 z-10">
      <nav className="p-3 pr-6 pl-6 bg-white relative rounded-2xl negative-border-right">
        <ul className="flex gap-4 list-none m-0 p-0 relative">
          {navItems.map((item) => {
            const isActive = item.href !== "#" && pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={isActive ? { color: "var(--color-red)" } : { color: "inherit" }}
                  className="transition-colors duration-200 no-underline"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
