import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Squircle Portal — Squircle Generator",
};

export default function Generator({ children }: PropsWithChildren) {
  return <>{children}</>;
}