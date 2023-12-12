import NLink from "next/link";
import { ComponentProps } from "react";

export default function Link({ href, ...props }: ComponentProps<typeof NLink>) {
  const url = `${
    process.env.NODE_ENV === "production" ? "/yeaung" : ""
  }${href}`;
  return <NLink href={url} {...props} />;
}
