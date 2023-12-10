export default function Experience() {
  return (
    <div className="bg-slate-100 rounded p-3 m-4">
      <h3 className="text-2xl font-bold my-3">Experiences</h3>
      <div className="my-5">
        <div className="flex justify-between">
          <h4 className="font-bold">Software Engineer</h4>
          <span>02/2022 - current</span>
        </div>
        <h5>
          <b>Rabbit Care</b> - Bangkok, Thailand
        </h5>
        <ul className="list-disc ml-10">
          <li>
            Collaborated on a React and gRPC project, focusing on React
            development with occasional backend tasks.
          </li>
          <li>
            Consolidated repositories into a monorepo using Turborepo which
            resulted in nearly 2 times acceleration of code delivery times.
          </li>
          <li>
            Improved testing efficiency by 400% with parallelized GitHub Actions
            for faster CI/CD.
          </li>
          <li>
            Authored a github action for annotating linting issues in the pull
            request as part of the CD pipeline.
          </li>
          <li>
            Developed an internal client library using WebRTC for real-time
            voice communication and connection monitoring.
          </li>
          <li>
            Enforced code style and linting standards for code consistency using
            eslint and sonor-cloud within the team.
          </li>
        </ul>
      </div>
      <div className="my-5">
        <div className="flex justify-between">
          <h4 className="font-bold">Fullstack Developer</h4>
          <span>03/2021 - 01/2022</span>
        </div>
        <h5>
          <b>Yinsein Hospital</b> - Myitkyina, Myanmar
        </h5>
        <ul className="list-disc ml-10">
          <li>
            Delivered ad-hoc user features in a hospital setting with FastAPI
            backend and jQuery web.
          </li>
          <li>
            Collaborated with end-users and project managers to gather
            requirements mainly focusing on inventory management.
          </li>
          <li>
            Resolved operational issues in a timely manner for seamless
            operations.
          </li>
          <li>
            Generate data for daily financial and accounting reports to support
            business operations and decision-making.
          </li>
        </ul>
      </div>
      <div className="my-5">
        <div className="flex justify-between">
          <h4 className="font-bold">Junior Software Developer</h4>
          <span>12/2019 - 02/2021</span>
        </div>
        <h5>
          <b>Thamardaw</b> - Yangon, Myanmar
        </h5>
        <ul className="list-disc ml-10">
          <li>
            Designed a frontend for a logistics app with emphasis on Order and
            Shipping management. Adhered to tight project timelines and ensured
            code quality for successful project delivery.
          </li>
        </ul>
      </div>
    </div>
  );
}
