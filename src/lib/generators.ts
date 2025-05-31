interface SquircleProperties {
  a: number;
  b: number;
  nX: number;
  nY: number;
  steps: number;
}

export function squircleClipPath(props: SquircleProperties): string {
  const pointsRaw = squirclePointsRaw(props);

  const points: string[] = pointsRaw.map(
    ({ x, y }) => `${(50 + 50 * x).toFixed(3)}% ${(50 + 50 * y).toFixed(3)}%`
  );

  return `polygon(${points.join(", ")})`;
}

function squirclePointsRaw({ a, b, nX, nY, steps }: SquircleProperties) {
  const points = [];

  // Find the maximum dimension to normalize against
  const maxDim = Math.max(a, b);

  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI;
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    // Calculate raw coordinates with separate nX and nY
    const rawX = a * Math.sign(cos) * Math.pow(Math.abs(cos), 2 / nX);
    const rawY = b * Math.sign(sin) * Math.pow(Math.abs(sin), 2 / nY);

    // Normalize coordinates to preserve aspect ratio
    const x = rawX / maxDim;
    const y = rawY / maxDim;

    points.push({ x, y });
  }

  return points;
}
