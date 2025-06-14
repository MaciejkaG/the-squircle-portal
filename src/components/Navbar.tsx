"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MenuElement {
  title: string;
  href: string;
  description: string;
}

type Menu = MenuElement[];

const learningResources: Menu = [
  {
    title: "Squircles — Introduction",
    href: "/learn/introduction",
    description: "Get to know superellipses and squircle basics.",
  },
  {
    title: "Squircles — Mathematical definition",
    href: "#",
    description: "Learn about the Lamé curve and it's mathematical definition.",
  },
  {
    title: "Squircles — JavaScript Implementation",
    href: "#",
    description: "Implement squircles on a website using JS and CSS.",
  },
  {
    title: "Squircles — Python Implementation",
    href: "#",
    description:
      "Create a squircle in Turtle graphics using Python.",
  },
];

export function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setIsAtTop(window.scrollY <= 0);
    };

    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full h-12 z-30 sm:h-14 transition-all flex items-center justify-between box-border px-8 text-xl sm:text-2xl",
        isAtTop ? "" : "backdrop-blur-xl border-b border-border"
      )}
    >
      <Link href="/">
        <img
          src="/tsp-logo-light.svg"
          className="h-7 hidden sm:block dark:hidden"
        />
        <img
          src="/tsp-logo-dark.svg"
          className="h-7 hidden dark:sm:block"
        />
        <span className="font-display font-bold inline sm:hidden">TSP</span>
      </Link>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {learningResources.map((n) => (
                  <ListItem key={n.title} title={n.title} href={n.href}>
                    {n.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/generator">Squircle generator</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
