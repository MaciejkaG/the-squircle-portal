import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

const linkStyles = "text-theme hover:opacity-80 transition-opacity";

type NextLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
  targetBlank?: false | undefined;
};

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children: React.ReactNode;
  targetBlank: true;
};

export function Link(props: NextLinkProps | ExternalLinkProps) {
  if (props?.targetBlank) {
    const { targetBlank, ...anchorProps } = props as ExternalLinkProps;
    return (
      <a
        {...anchorProps}
        className={cn(linkStyles, props.className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <NextLink
      {...(props as NextLinkProps)}
      className={cn(linkStyles, props.className)}
    >
      {props.children}
    </NextLink>
  );
}
