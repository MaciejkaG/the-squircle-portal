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

export default function PythonImplementation(): React.JSX.Element {
  return (
    <ResourceContainer>
      <ResourceHeader title="Squircles — Python Implementation" />
      <ResourceContent>
        <ResourceParagraph>
          Squircles can also be generated using Python. Here is an example
          using the Turtle graphics library to draw a squircle.
        </ResourceParagraph>
        <Code language="python">{
`import turtle

def squircle(t, x, y, w, h, n):
    t.penup()
    t.goto(x + w / 2, y)
    t.pendown()
    for i in range(4):
        t.left(90)
        for _ in range(n):
            t.forward(w / n)
            t.left(90 / n)

t = turtle.Turtle()

squircle(t, 0, 0, 100, 100, 4)

turtle.done()`
        }</Code>

        <ResourceH2>Explanation</ResourceH2>
        <ResourceParagraph>
          This script uses the `turtle` module to draw a squircle. The
          `squircle` function takes the turtle object, the position, the
          width, height, and the `n` parameter as input. It then draws the
          squircle by moving the turtle in a series of small steps, turning
          slightly at each step to create the curved corners.
        </ResourceParagraph>
      </ResourceContent>
      <ResourceFooter>
        <span>
          Up next: <Link href="/generator">Squircle generator</Link>
        </span>
      </ResourceFooter>
    </ResourceContainer>
  );
}
