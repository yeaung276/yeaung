"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "./Link";

export default function BreadCrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  return (
    <div className="text-lg">
      {paths.map((x, i) => (
        <Link key={x} href={`/${paths.slice(1, i + 1).join("/")}`}>
          <span className="cursor-pointer">
            {" "}
            <b>{x}</b> /{" "}
          </span>
        </Link>
      ))}
    </div>
  );
}
