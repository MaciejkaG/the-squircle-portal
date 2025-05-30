import { BackgroundGrid } from "@/components/BackgroundGrid";

export default function Home() {
  return (
    <div>
      <BackgroundGrid />
      <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl mt-24 mb-12 text-center">
        The Squircle Portal
      </h1>
      <div className="w-3xl max-w-full mx-auto space-y-4 px-4">
        <h2 className="font-display font-bold text-3xl text-center">
          What really is a squircle?
        </h2>
        <p className="text-justify">
          Popularised by Apple, used by almost everyone. A squircle is a
          geometric shape that blends the characteristics of a square and a
          circle. Mathematically, it&apos;s a specific case of a{" "}
          <em>superellipse</em>, a curve defined by an equation that allows for
          a smooth transition between angular and circular forms. At first
          glance, a squircle might look like a square with rounded corners, but
          if you observe closely, you&apos;ll notice that the entire perimeter
          flows in a continuous, rounded curve—not just the corners. This makes
          squircles <em>amazing</em> as they look more organically smooth and
          visually balanced than a typical rounded square. Squircles are often
          used in modern design, user interfaces, and product shapes (like
          smartphones and app icons) because they provide the structural
          presence of a square with the softness and elegance of a circle.
        </p>
        <h2 className="font-display font-bold text-3xl text-center">
          Whats the point of this?
        </h2>
        <p className="text-justify">
          The Squircle Portal was made because we <em>love</em> squircles. They
          can really make a design feel much more premium and refined, but
          they&apos;re unfortunately not supported natively in many cases, CSS
          and HTML don&apos;t have a direct way of using mathematical
          expressions as element shapes. There hasn&apos;t been any practical
          squircle-related website - until now.
        </p>
        <h2 className="font-display font-bold text-3xl text-center">
          How does TSP help?
        </h2>
        <p className="text-justify">
          The Squircle Portal, or TSP for short is your ultimate resource for
          everything squircles. Here, you can read about the mathematical
          definitions of squircles and learn to create them yourself, or utilise
          our squircle generators that can output to SVG, CSS clip-path and
          more.
        </p>
      </div>
    </div>
  );
}
