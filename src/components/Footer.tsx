import { Link } from "./Link";

export function Footer() {
  return (
    <footer className="relative bg-background border-t py-8 mt-8 flex flex-col gap-4 justify-center text-sm">
      {/* BackgroundGrid fade out */}
      <div className="absolute bg-gradient-to-b from-transparent to-background h-24 -top-24 -z-10 w-full"></div>

      {/* Footer content */}
      <p className="text-center">
        The Squircle Portal is developed and maintained independently. Please
        consider{" "}
        <Link targetBlank href="https://ko-fi.com/maciejkag">
          donating
        </Link>
        .
      </p>
      <div className="mx-auto w-3xl max-w-full flex flex-col sm:grid sm:grid-cols-3 sm:gap-2 text-center">
        <span>
          Copyright © 2025 <Link href="https://mcjk.cc/" targetBlank>mcjk</Link>
        </span>
        <Link href="mailto:contact@squircle.site">contact@squircle.site</Link>
        <Link href="https://github.com/MaciejkaG/the-squircle-portal" targetBlank>
          GitHub
        </Link>
      </div>
    </footer>
  );
}