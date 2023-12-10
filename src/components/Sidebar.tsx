import Email from "@/icons/Email";
import Github from "@/icons/Github";
import Phone from "@/icons/Phone";
import Linkedin from "@/icons/linkedin";
import Image from "next/image";
import Link from "next/link";
import Contact from "./Contact";
import Profile from "./Profile";
import Skills from "./Skills";

interface SidebarProps {
  collipse?: boolean;
}
export default function Sidebar({ collipse = false }: SidebarProps) {
  return (
    <nav
      className={`transition-all duration-300 ease-in-out md:min-w-[25rem] py-4 bg-side overflow-hidden ${
        collipse ? "min-w-0 w-0" : "min-w-[25rem] w-[25rem]"
      }`}
    >
      <Profile />
      <Skills />
      <Contact />
    </nav>
  );
}
