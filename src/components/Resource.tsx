import type { PropsWithChildren } from "react";

export function ResourceContainer({ children }: PropsWithChildren) {
  return (
    <div className="w-3xl max-w-full mx-auto px-4 flex flex-col ">
      {children}
    </div>
  )
}

export function ResourceHeader({ title }: { title: string; }) {
  return (
    <div className="border-b pb-4">
      <h1 className="text-5xl font-display font-bold">{title}</h1>
    </div>
  )
}

export function ResourceFooter({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-between border-t mt-4 pt-4 text-xs text-muted-foreground">
      <p>Written by: Maciej &quot;mcjk&quot; Gomoła</p>
      {children}
    </div>
  );
}

export function ResourceContent({ children }: PropsWithChildren) {
  return (
    <div className="text-justify mt-4">{children}</div>
  )
}

export function ResourceParagraph({ children }: PropsWithChildren) {
  return (
    <p className="my-4">
      {children}
    </p>
  )
}

export function ResourceH2({ children }: PropsWithChildren) {
  return (
    <h2 className="border-b mt-6 py-2 text-3xl font-display font-semibold">{children}</h2>
  );
}