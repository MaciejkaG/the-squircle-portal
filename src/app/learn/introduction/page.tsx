import { Link } from "@/components/Link";
import {
  ResourceContainer,
  ResourceContent,
  ResourceHeader,

  ResourceParagraph,
  ResourceH2,
  ResourceFooter
} from "@/components/Resource";

export default function Introduction(): React.JSX.Element {
  return (
    <ResourceContainer>
      <ResourceHeader title="Squircles — Introduction" />
      <ResourceContent>
        <ResourceParagraph>
          Have you ever noticed how certain shapes just feel more pleasing to
          the eye than others? The squircle—a delightful hybrid between a square
          and a circle—represents one of design's most elegant solutions to a
          fundamental visual problem. While rectangles can feel rigid and
          circles might seem too soft, squircles strike that perfect balance
          between structure and smoothness that makes them irresistibly
          appealing.
        </ResourceParagraph>

        <ResourceParagraph>
          You encounter squircles more often than you might realize. Apple has
          famously embraced this shape for their app icons, creating that
          distinctive rounded-yet-structured look that has become synonymous
          with modern iOS design. Many Android implementations have followed suit,
          and you'll find squircle-inspired designs in everything from user
          interface elements to architectural features in contemporary
          buildings.
        </ResourceParagraph>

        <ResourceH2>What Makes a Squircle Special?</ResourceH2>

        <ResourceParagraph>
          Think of a squircle as occupying the sweet spot on a spectrum between
          geometric extremes. At one end, you have the sharp, angular precision
          of a perfect square—authoritative and structured, but sometimes harsh.
          At the other end lies the gentle, flowing curve of a circle—soft and
          organic, but perhaps lacking the stability that corners provide. The
          squircle takes the best of both worlds, maintaining the fundamental
          structure of a square while softening its edges with curves that feel
          natural and inviting.
        </ResourceParagraph>

        <ResourceParagraph>
          This isn't just about aesthetics, though visual appeal certainly plays
          a major role. Squircles solve practical design problems too. They
          provide more usable area than circles of similar visual weight, while
          feeling less aggressive than sharp-cornered rectangles. For
          touchscreen interfaces, they offer generous target areas while
          maintaining clear visual boundaries—a crucial consideration in mobile
          design where finger-friendly interaction zones are essential.
        </ResourceParagraph>

        <ResourceH2>The Superellipse Family</ResourceH2>

        <ResourceParagraph>
          Squircles belong to a broader family of shapes called superellipses,
          each with its own personality and use cases. Imagine having a dial
          that lets you gradually transform a diamond shape into a square, then
          into a squircle, and finally into a circle. That's essentially what
          the superellipse family offers—a continuous spectrum of shapes that
          bridge the gap between angular and curved forms.
        </ResourceParagraph>

        <ResourceParagraph>
          Different members of this family appear throughout design and
          architecture. Some lean more toward the square side, maintaining crisp
          corners with just a hint of curvature. Others embrace more dramatic
          curves while still preserving that essential four-sided structure.
          This flexibility makes superellipses incredibly versatile tools for
          designers who need shapes that can adapt to different contexts and
          aesthetic requirements.
        </ResourceParagraph>

        <ResourceH2>The HTML Challenge</ResourceH2>

        <ResourceParagraph>
          Here's where things get interesting from a technical perspective.
          Creating a perfect squircle in HTML and CSS is surprisingly tricky.
          You might think you could simply use the <code>border-radius</code>{" "}
          property to round the corners of a square, but that approach only gets
          you partway there. Standard CSS border-radius creates circular arcs at
          the corners, which can look somewhat squircle-like but doesn't produce
          the mathematically precise curves that define a true squircle.
        </ResourceParagraph>

        <ResourceParagraph>
          The challenge lies in the nature of the curves themselves. A proper
          squircle requires curves that follow specific mathematical
          relationships—curves that seamlessly blend the straight edges with
          rounded corners in a way that maintains visual harmony throughout the
          entire perimeter. Achieving this level of precision typically requires
          more advanced techniques like SVG paths, CSS clip-path properties, or
          even custom graphics generated through canvas elements or external
          image files.
        </ResourceParagraph>

        <img
          src="/placeholder-squircle-comparison.png"
          alt="Comparison showing regular rounded rectangle vs true squircle"
        />

        <ResourceH2>Beyond Digital Design</ResourceH2>

        <ResourceParagraph>
          The appeal of squircles extends far beyond screen-based design.
          Architects have incorporated superelliptical shapes into building
          facades, creating structures that feel both modern and timeless.
          Product designers use these forms for everything from furniture to
          consumer electronics, taking advantage of their ability to suggest
          both stability and approachability.
        </ResourceParagraph>

        <ResourceParagraph>
          Even in nature, we find forms that echo the squircle's balanced
          proportions. Certain leaves, fruits, and even the cross-sections of
          some tree trunks display similar characteristics—that perfect tension
          between structure and softness that makes squircles feel so
          fundamentally right to our visual system.
        </ResourceParagraph>

        <ResourceH2>The Psychology of Shape</ResourceH2>

        <ResourceParagraph>
          There's something deeply satisfying about the way squircles resolve
          the visual tension between geometric precision and organic flow. Our
          brains seem to appreciate shapes that suggest both stability and
          movement, structure and flexibility. This might explain why squircles
          have become so prevalent in interface design—they communicate
          reliability while remaining visually approachable.
        </ResourceParagraph>

        <ResourceParagraph>
          Consider how different a grid of app icons feels when they're perfect
          squares versus squircles. The square versions can feel rigid and
          institutional, while circular icons might seem too playful or
          unstable. Squircles thread this needle perfectly, creating interfaces
          that feel both professional and friendly, organized yet organic.
        </ResourceParagraph>

        <ResourceH2>Looking Forward</ResourceH2>

        <ResourceParagraph>
          As design tools continue to evolve and mathematical shape generation
          becomes more accessible, we're likely to see even more creative
          applications of squircles and their superelliptical relatives. The
          principles that make these shapes appealing— their balance of
          structure and flow, their visual harmony, their practical
          advantages—suggest they'll remain relevant across many design
          contexts.
        </ResourceParagraph>

        <ResourceParagraph>
          Understanding squircles means appreciating how mathematical precision
          can serve aesthetic and functional goals simultaneously. They
          represent a perfect example of how the most elegant design solutions
          often emerge from the intersection of technical capability and human
          perception, creating forms that are both mathematically beautiful and
          intuitively satisfying.
        </ResourceParagraph>
      </ResourceContent>
      <ResourceFooter>
        <span>
          Up next: <Link href="mathematical-definition">Squircles - Mathematical definition</Link>
        </span>
      </ResourceFooter>
    </ResourceContainer>
  );
}
