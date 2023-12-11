
import Link from "next/link";
import Image from "./Image";

export default function Certification() {
  return (
    <div className="bg-slate-100 rounded p-3 mx-4 my-4">
      <h3 className="text-2xl font-bold">Certifications</h3>
      <ul className="mt-3">
        <li className="my-4 md:flex gap-1 items-center">
          <Image src="/gcp.jpg" alt="gcp-logo" width={80} height={80} />
          <div>
            <Link
              className="hover:underline"
              href="https://google.accredible.com/d1833073-9cef-4b56-a5e5-0cd7699407d6"
            >
              <b>Google Cloud Professional Machine Learning Engineer</b>
            </Link>
            <div>Google - 2023</div>
          </div>
        </li>
        <li className="my-4 md:flex gap-1 items-center">
          <Image
            src="/deep-ai.png"
            alt="deeplearning-ai-logo"
            width={80}
            height={80}
          />
          <div>
            <Link
              className="hover:underline"
              href="https://coursera.org/share/ce9a7fe6625e2b45938c13af43b69c1a"
            >
              <b>Machine Learning Engineering For Production(MLOP)</b>
            </Link>
            <div>DeepLearning.Ai - 2023</div>
          </div>
        </li>
        <li className="my-4 md:flex gap-1 items-center">
          <Image src="/workera.png" alt="workera-logo" width={80} height={80} />
          <div>
            <Link
              className="hover:underline"
              href="https://app.workera.ai/public/candidate/certificate?code=EKO1LXWE"
            >
              <b>Machine Learning Engineering Core</b>
            </Link>
            <div>Workera - 2023</div>
          </div>
        </li>
        <li className="my-4 md:flex gap-1 items-center">
          <Image src="/udacity.png" alt="udacity-logo" width={80} height={80} />
          <div>
            <Link
              className="hover:underline"
              href="http://confirm.udacity.com/X6ZCG5HZ"
            >
              <b>
                AI programming with python(AWS DeepRacer Student League
                Scholarship)
              </b>
            </Link>
            <div> Udacity - 2022</div>
          </div>
        </li>
        <li className="my-4 md:flex gap-1 items-center">
          <Image
            src="/deep-ai.png"
            alt="deeplearning-ai-logo"
            width={80}
            height={80}
          />
          <div>
            <Link
              className="hover:underline"
              href="https://coursera.org/share/acdd3891ca37e47d04e253eaaf65ad9c"
            >
              <b>
                DeepLearning(Neural networks, CNN, Sequence Models and
                Hyperparameter tuning)
              </b>
            </Link>
            <div> DeepLearning.Ai- 2022</div>
          </div>
        </li>
        <li className="my-4 md:flex gap-1 items-center">
          <Image
            src="/stanford.png"
            alt="stanford-online-logo"
            width={80}
            height={80}
          />
          <div>
            <Link
              className="hover:underline"
              href="https://coursera.org/share/b6fc95e73af7c72927c173b50f9a2843"
            >
              <b>Machine Learning</b>
            </Link>
            <div> Stanford-online - 2020</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
