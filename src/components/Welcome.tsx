import Link from "next/link";
import Image from "./Image";

export default function Welcome() {
  return (
    <div className="bg-welcome bg-no-repeat bg-cover h-[30rem] max-w-[100vw]">
      <div className="flex items-center h-[25rem]">
        <div className="w-1/2 flex justify-center">
          <Image
            src="/welcome.avif"
            width={360}
            height={360}
            alt="title-image"
          />
        </div>
        <div className="font-quote animate-welcome">
          <h1 className="text-5xl float-right w-[30rem] font-bold">Hello, </h1>
          <p className="text-4xl">
            {" "}
            My name is <strong>Ye Aung</strong> and <br /> I am an Software
            Engineer
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          className=" w-fit bg-slate-600 hover:bg-slate-700 text-white font-bold text-xl px-3 py-1 rounded-full"
          href="/projects"
        >
          Go to projects
        </Link>
      </div>
    </div>
  );
}
