"use client";
import Header from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Page() {
  const [collipse, setCollipse] = useState(true);
  return (
    <>
      <Header onIconClicked={() => setCollipse(!collipse)} />
      <div className="flex">
        <Sidebar collipse={collipse} />
        <main className="grow">
          <div className="h-[90vh] bg-red-100">content</div>
        </main>
      </div>
    </>
  );
}
