"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Link,
  Unlink,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Updated squircle generator that only uses nX and nY for the actual path
const squircleClipPath = ({ nX, nY, steps }: { nX: number, nY: number, steps: number }) => {
  const points = [];

  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * 2 * Math.PI;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    const x =
      50 + 50 * Math.sign(cosAngle) * Math.pow(Math.abs(cosAngle), 2 / nX);
    const y =
      50 + 50 * Math.sign(sinAngle) * Math.pow(Math.abs(sinAngle), 2 / nY);

    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }

  return `polygon(${points.join(", ")})`;
};

// Generate SVG path for the superellipse
const generateSVGPath = ({ nX, nY, steps, width = 200, height = 200 }: {  nX: number, nY: number, steps: number, width: number, height: number }) => {
  const points = [];
  const centerX = width / 2;
  const centerY = height / 2;
  const radiusX = width / 2;
  const radiusY = height / 2;

  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * 2 * Math.PI;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    const x =
      centerX +
      radiusX * Math.sign(cosAngle) * Math.pow(Math.abs(cosAngle), 2 / nX);
    const y =
      centerY +
      radiusY * Math.sign(sinAngle) * Math.pow(Math.abs(sinAngle), 2 / nY);

    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return `M ${points[0]} L ${points.slice(1).join(" L ")} Z`;
};

export default function ClipPathGenerator() {
  const [a, setA] = useState(100);
  const [b, setB] = useState(100);
  const [nX, setNX] = useState(4);
  const [nY, setNY] = useState(4);
  const [steps, setSteps] = useState(64);
  const [isLinked, setIsLinked] = useState(true);
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);

  const [clipPath, setClipPath] = useState<string | null>(null);

  useEffect(() => {
    const squirclePath = squircleClipPath({ nX, nY, steps });
    setClipPath(squirclePath);
  }, [nX, nY, steps]);

  // Sync nY to nX when linking is enabled
  useEffect(() => {
    if (isLinked && nX !== nY) {
      setNY(nX);
    }
  }, [isLinked, nX]);

  const copyToClipboard = async () => {
    if (clipPath) {
      await navigator.clipboard.writeText(`clip-path: ${clipPath};`);
    }
  };

  const downloadSVG = () => {
    const svgPath = generateSVGPath({ nX, nY, steps, width: a, height: b });
    const svg = `<svg width="${a}" height="${b}" viewBox="0 0 ${a} ${b}" xmlns="http://www.w3.org/2000/svg">
  <path d="${svgPath}" fill="currentColor" />
</svg>`;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `superellipse-${nX}-${nY}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getShapeDescription = () => {
    if (nX === nY) {
      if (nX === 2) return "Ellipse";
      if (nX === 4) return "Squircle";
      if (nX > 10) return "Rectangle";
      return "Superellipse";
    }
    return "Asymmetric Superellipse";
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            Superellipse Generator
          </h1>
          <p className="text-muted-foreground">
            Create beautiful squircles and superellipses with real-time preview
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Shape Parameters
                <Badge variant="outline">{getShapeDescription()}</Badge>
              </CardTitle>
              <CardDescription>
                Adjust the properties to create your perfect superellipse
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Preview Dimensions */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Preview Dimensions
                </h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="a-input" className="text-sm font-medium">
                        Width (a)
                      </Label>
                      <div className="space-y-3">
                        <Slider
                          value={[a]}
                          onValueChange={(value) => setA(value[0])}
                          min={10}
                          max={300}
                          step={5}
                          className="w-full"
                        />
                        <Input
                          id="a-input"
                          type="number"
                          value={a}
                          onChange={(e) =>
                            setA(parseFloat(e.target.value) || 0)
                          }
                          className="text-center"
                          min="10"
                          max="300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="b-input" className="text-sm font-medium">
                        Height (b)
                      </Label>
                      <div className="space-y-3">
                        <Slider
                          value={[b]}
                          onValueChange={(value) => setB(value[0])}
                          min={10}
                          max={300}
                          step={5}
                          className="w-full"
                        />
                        <Input
                          id="b-input"
                          type="number"
                          value={b}
                          onChange={(e) =>
                            setB(parseFloat(e.target.value) || 0)
                          }
                          className="text-center"
                          min="10"
                          max="300"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    These only affect the preview and SVG export, not the CSS
                    clip-path
                  </p>
                </div>
              </div>

              <Separator />

              {/* Curvature */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Curvature
                </h3>

                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nx-input" className="text-sm font-medium">
                      Horizontal (nX)
                    </Label>
                    <div className="space-y-3">
                      <Slider
                        value={[nX]}
                        onValueChange={(value) => {
                          const newNX = value[0];
                          setNX(newNX);
                          if (isLinked) {
                            setNY(newNX);
                          }
                        }}
                        min={0.5}
                        max={20}
                        step={0.1}
                        className="w-full"
                      />
                      <Input
                        id="nx-input"
                        type="number"
                        value={nX}
                        onChange={(e) => {
                          const newNX = parseFloat(e.target.value) || 0;
                          setNX(newNX);
                          if (isLinked) {
                            setNY(newNX);
                          }
                        }}
                        className="text-center"
                        min="0.5"
                        max="20"
                        step="0.1"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center pt-8">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsLinked(!isLinked)}
                      className={
                        isLinked
                          ? "text-accent-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {isLinked ? (
                        <Link className="w-5 h-5" />
                      ) : (
                        <Unlink className="w-5 h-5" />
                      )}
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ny-input" className="text-sm font-medium">
                      Vertical (nY)
                    </Label>
                    <div className="space-y-3">
                      <Slider
                        value={[nY]}
                        onValueChange={(value) => {
                          const newNY = value[0];
                          setNY(newNY);
                          if (isLinked) {
                            setNX(newNY);
                          }
                        }}
                        min={0.5}
                        max={20}
                        step={0.1}
                        className="w-full"
                        disabled={isLinked}
                      />
                      <Input
                        id="ny-input"
                        type="number"
                        value={nY}
                        onChange={(e) => {
                          const newNY = parseFloat(e.target.value) || 0;
                          setNY(newNY);
                          if (isLinked) {
                            setNX(newNY);
                          }
                        }}
                        className="text-center"
                        min="0.5"
                        max="20"
                        step="0.1"
                        disabled={isLinked}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Quality */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Quality
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="steps-input" className="text-sm font-medium">
                    Steps ({steps})
                  </Label>
                  <div className="space-y-3">
                    <Slider
                      value={[steps]}
                      onValueChange={(value) => setSteps(value[0])}
                      min={8}
                      max={200}
                      step={4}
                      className="w-full"
                    />
                    <Input
                      id="steps-input"
                      type="number"
                      value={steps}
                      onChange={(e) => setSteps(parseInt(e.target.value) || 0)}
                      className="text-center"
                      min="8"
                      max="200"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Higher values create smoother curves but increase CSS
                    complexity
                  </p>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Quick Presets
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setNX(2);
                      setNY(2);
                    }}
                  >
                    Ellipse
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setNX(4);
                      setNY(4);
                    }}
                  >
                    Squircle
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setNX(20);
                      setNY(20);
                    }}
                  >
                    Rectangle
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setNX(1);
                      setNY(1);
                    }}
                  >
                    Diamond
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  Real-time visualization of your superellipse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-8 border bg-accent/50 rounded-lg min-h-[300px]">
                  <div
                    className="bg-primary shadow-lg transition-all duration-300 ease-in-out"
                    style={
                      clipPath
                        ? {
                            clipPath,
                            width: "200px",
                            height: `${200 * (b / a)}px`,
                            maxHeight: "200px",
                          }
                        : { width: "200px", height: "200px" }
                    }
                  />
                </div>

                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <p>
                    Preview: {a} × {b} • Ratio: {(a / b).toFixed(2)}:1
                  </p>
                  <p>
                    Shape: nX={nX}, nY={nY}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Export Options
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadSVG}
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      SVG
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      CSS
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Export as SVG or copy the CSS clip-path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CSS Clip-path</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                      className="flex items-center gap-2"
                    >
                      {isCodeExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                      {isCodeExpanded ? "Collapse" : "Expand"}
                    </Button>
                  </div>

                  {isCodeExpanded && clipPath && (
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="text-slate-400 mb-1">{"/* CSS */"}</div>
                      <div className="text-blue-300">clip-path</div>
                      <span className="text-slate-300">: </span>
                      <span className="text-green-300 break-all">
                        {clipPath}
                      </span>
                      <span className="text-slate-300">;</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
