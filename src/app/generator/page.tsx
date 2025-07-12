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
import { Copy, Link, Unlink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { squircleClipPath } from "@/lib/generators";

export default function ClipPathGenerator() {
  const [a, setA] = useState(100);
  const [b, setB] = useState(100);
  const [nX, setNX] = useState(4);
  const [nY, setNY] = useState(4);
  const [steps, setSteps] = useState(64);
  const [isLinked, setIsLinked] = useState(true);

  const [clipPath, setClipPath] = useState<string | null>(null);

  useEffect(() => {
    const squirclePath = squircleClipPath({ a, b, nX, nY, steps });
    setClipPath(squirclePath);
  }, [a, b, nX, nY, steps]);

  const copyToClipboard = async () => {
    if (clipPath) {
      await navigator.clipboard.writeText(`clip-path: ${clipPath};`);
    }
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
          <h1 className="font-display text-4xl font-bold-800 mb-2">
            Superellipse Generator
          </h1>
          <p>
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
              {/* Dimensions */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  Dimensions
                </h3>

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
                        onChange={(e) => setA(parseFloat(e.target.value) || 0)}
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
                        onChange={(e) => setB(parseFloat(e.target.value) || 0)}
                        className="text-center"
                        min="10"
                        max="300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Curvature */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
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
                      className={isLinked ? "text-accent-foreground" : "text-muted-foreground"}
                    >
                      {isLinked ? <Link className="w-5 h-5" /> : <Unlink className="w-5 h-5" />}
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
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Quality */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
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
                  <p className="text-muted-foreground text-sm">Steps are the amount of points the end polygon will consist of. More steps will result in a smoother shape at the cost of performance.</p>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide">
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
                <div className="flex items-center justify-center p-8 border bg-accent rounded-lg min-h-[300px]">
                  <div
                    className="bg-theme shadow-lg transition-all duration-300"
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

                <div className="mt-4 text-center text-sm">
                  <p>Aspect Ratio: {(a / b).toFixed(2)}:1</p>
                  <p>
                    Dimensions: {a} × {b}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  CSS Output
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </Button>
                </CardTitle>
                <CardDescription>
                  Use this CSS clip-path in your projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                {clipPath && (
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <div className="text-slate-400 mb-1">{"/* CSS */"}</div>
                    <div className="text-blue-300">clip-path</div>
                    <span className="text-slate-300">: </span>
                    <span className="text-green-300 break-all">{clipPath}</span>
                    <span className="text-slate-300">;</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
