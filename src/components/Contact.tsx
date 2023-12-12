import Email from "@/icons/Email";
import Github from "@/icons/Github";
import Phone from "@/icons/Phone";
import Linkedin from "@/icons/linkedin";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mt-10">
      <h4 className="mx-10 font-bold">Contact detail</h4>
      <ul className="ml-14 mt-5 leading-8">
        <li className="flex items-center gap-2">
          <Linkedin />
          <Link
            className="hover:underline text-sky-700"
            href="https://www.linkedin.com/in/yeaung276/"
          >
            linkedin
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Github />
          <Link
            className="hover:underline text-sky-700"
            href="https://github.com/yeaung276"
          >
            github
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Email />
          <Link
            className="hover:underline text-sky-700"
            href="mailto:yeyintaung.ya276@gmail.com"
          >
            yeyintaung.ya276@gmail.com
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Phone />
          <Link
            className="hover:underline text-sky-700"
            href="tel:+660634407578"
          >
            +660634407578
          </Link>
        </li>
      </ul>
    </div>
  );
}
