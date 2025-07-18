import { GeneratorBanner } from "@/components/GeneratorBanner";
import { Link } from "@/components/Link";
import {
  ResourceContainer,
  ResourceContent,
  ResourceHeader,
  ResourceParagraph,
  ResourceH2,
  ResourceFooter,
} from "@/components/Resource";
import { Code } from "@/components/Code";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'The Squircle Portal — "Squircles — JavaScript Implementation"',
};

export default function JavaScriptImplementation(): React.JSX.Element {
  return (
    <ResourceContainer>
      <ResourceHeader title="Squircles — JavaScript Implementation" />
      <ResourceContent>
        <ResourceParagraph>
          As mentioned in the introduction, creating a true squircle with only
          CSS is not possible. We need to use SVG paths or other methods.
          Here is a simple implementation using a CSS `clip-path` with an SVG
          path.
        </ResourceParagraph>
        <Code language="css">{
`.squircle {
  clip-path: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 50,0 C 10,0 0,10 0,50 S 10,100 50,100 100,90 100,50 90,0 50,0 Z" /></svg>');
}`
        }</Code>
        <ResourceH2>Using JavaScript</ResourceH2>
        <GeneratorBanner />
        <ResourceParagraph>
          For more dynamic squircles, you can generate the SVG path using
          JavaScript. This allows you to change the roundness of the
          squircle on the fly.
        </ResourceParagraph>
        <Code language="javascript">{
          `function squirclePath(w, h, n) {
  return \`M \${w/2},0 C \${10*w/50},0 0,\${10*h/50} 0,\${h/2} S \${10*w/50},\${h} \${w/2},\${h} \${w - 10*w/50},\${h} \${w},\${h - 10*h/50} \${w},\${h/2} \${w - 10*w/50},0 \${w/2},0 Z\`;
}

const element = document.querySelector('.squircle');
const path = squirclePath(100, 100, 4);
const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="\${path}" /></svg>\`;
element.style.clipPath = \`url('data:image/svg+xml;utf8,\${encodeURIComponent(svg)}')\`;`
        }</Code>
      </ResourceContent>
      <ResourceFooter>
        <span>
          Up next:{" "}
          <Link href="/learn/python-implementation">
            Squircles - Python Implementation
          </Link>
        </span>
      </ResourceFooter>
    </ResourceContainer>
  );
}
