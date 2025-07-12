'use client';

import { Link } from "@/components/Link";
import { Button } from "@/components/ui/button";

export function GeneratorBanner() {
  return (
    <div className="p-6 my-6 bg-card rounded-xl border">
      <h2 className="text-2xl font-bold font-display">Try out Squircle Generator!</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Want to create squircles quickly and intuitively? Check out our interactive squircle
        generator. Experiment with different parameters and create the
        perfect shape for your project.
      </p>
      <Button asChild variant="link" className="mt-4">
        <Link href="/generator">Go to Generator</Link>
      </Button>
    </div>
  );
}
