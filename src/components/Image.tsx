import NImage from "next/image";
import { ComponentProps } from "react";

export default function Image({
  src,
  ...props
}: ComponentProps<typeof NImage>) {
  const source =
    typeof src === "string"
      ? `${process.env.NODE_ENV === "production" ? "/yeaung" : ""}${src}`
      : src;
  return <NImage src={source} {...props} />;
}
