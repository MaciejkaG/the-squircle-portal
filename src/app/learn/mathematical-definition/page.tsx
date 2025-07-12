import { Link } from "@/components/Link";
import {
  ResourceContainer,
  ResourceContent,
  ResourceHeader,
  ResourceParagraph,
  ResourceH2,
  ResourceFooter,
} from "@/components/Resource";
import { Equation } from "@/components/Equation";

export default function MathematicalDefinition(): React.JSX.Element {
  return (
    <ResourceContainer>
      <ResourceHeader title="Squircles — Mathematical definition" />
      <ResourceContent>
        <ResourceParagraph>
          The squircle is a specific case of a superellipse, a family of
          curves defined by the following equation:
        </ResourceParagraph>
        <Equation>{`|x/a|^n + |y/b|^n = 1`}</Equation>
        <ResourceParagraph>
          In this equation, `a` and `b` are the semi-diameters of the shape,
          and `n` is a positive number that determines the shape&apos;s
          &quot;roundness&quot;. For a squircle, we have the special case where a = b
          and n = 4.
        </ResourceParagraph>
        <ResourceH2>The Lamé Curve</ResourceH2>
        <ResourceParagraph>
          The superellipse equation is also known as the Lamé curve, named
          after the French mathematician Gabriel Lamé. He was the one who
          generalized the equation for the ellipse.
        </ResourceParagraph>

        <ResourceH2>Understanding the Parameters</ResourceH2>
        <ResourceParagraph>
          The beauty of the superellipse equation lies in its versatility.
          By adjusting the parameters `a`, `b`, and `n`, you can create a
          wide variety of shapes:
        </ResourceParagraph>
        <ul>
          <li>
            <strong>a and b:</strong> These parameters control the width and
            height of the shape, just like in a regular ellipse. When `a` and
            `b` are equal, the superellipse is symmetrical.
          </li>
          <li>
            <strong>n:</strong> This is the most interesting parameter. It
            controls the &quot;pointiness&quot; of the corners. As `n` increases, the
            shape becomes more square-like. For `n = 2`, the equation
            describes a regular ellipse. For `n = 4`, we get the squircle.
            As `n` approaches infinity, the shape approaches a perfect
            square.
          </li>
        </ul>
      </ResourceContent>
      <ResourceFooter>
        <span>
          Up next:{" "}
          <Link href="/learn/javascript-implementation">
            Squircles - JavaScript Implementation
          </Link>
        </span>
      </ResourceFooter>
    </ResourceContainer>
  );
}
