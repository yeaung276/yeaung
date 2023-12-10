import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="bg-welcome bg-no-repeat bg-cover h-[30rem] r">
      <div className="flex items-center h-[25rem]">
        <div className="w-1/2 flex justify-center">
          <Image
            src="/welcome.avif"
            width={360}
            height={360}
            alt="title-image"
          />
        </div>
        <div>
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
