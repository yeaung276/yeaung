import Link from "next/link";
import Image from "./Image";

interface HeaderProps {
  onIconClicked?: () => void;
}
export default function Header({ onIconClicked }: HeaderProps) {
  return (
    <header className="flex bg-nav h-[3rem] items-center">
      <div className="mx-2 md:hidden">
        <button onClick={onIconClicked}>
          <Image
            width={40}
            height={40}
            src="/profile.png"
            alt="profile"
            className="rounded-full"
          />
        </button>
      </div>
      <div className="mx-2 text-center w-full mr-10 font-bold">
        <Link href="/" className="p-3 hover:bg-cyan-200">
          Home
        </Link>
        <Link href="/projects" className="p-3 hover:bg-cyan-200">
          Projects
        </Link>
      </div>
    </header>
  );
}
