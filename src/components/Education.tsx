import Image from "./Image";


export default function Education() {
  return (
    <div className="bg-slate-100 rounded p-3 m-4">
      <h3 className="text-2xl font-bold">Education</h3>
      <ul className="mt-3">
        <li className="my-4 md:flex gap-1 items-center">
          <Image src="/uol-logo.png" alt="uol-logo" width="80" height="80" />
          <div className="grow">
            <div className="md:flex justify-between">
              <b>
                BSc Computer Science (Machine learning and Artificial
                intelligent)
              </b>
              <div>10/2022 - current</div>
            </div>
            <div>University of London</div>
          </div>
        </li>
        <li className="my-4 md:flex gap-1 items-center">
          <Image src="/ytu-logo.jpeg" alt="uol-logo" width={80} height={80} />
          <div className="grow">
            <div className="md:flex justify-between">
              <b>
              Bacholor of Engineering(Electronic and Communication)
              </b>
              <div>12/2015 - 02/2021</div>
            </div>
            <div>Yangon Technological University</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
