"use client";
import Item from "@/components/Item";
import Header from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { PropsWithChildren, useState } from "react";

export default function SidebarHandler({children}: PropsWithChildren) {
  const [collipse, setCollipse] = useState(true);
  return (
    <>
      <Header onIconClicked={() => setCollipse(!collipse)} />
      <div className="flex overflow-hidden">
        <Sidebar collipse={collipse} />
        <main className="grow">
          <div className="h-[90vh] bg-zinc-200 overflow-y-scroll overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
