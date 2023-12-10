"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
