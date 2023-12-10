const SKILLS = [
  "tensorflow",
  "fastapi",
  "python",
  "reactjs",
  "nextjs",
  "gcp",
  "docker",
  "TFX",
  "MLOps",
  "radis",
  "vector db",
  "machine learning",
  "scikit-learn",
  "pandas",
  "numpy",
  "typescript",
  "javascript"
];
export default function Skills() {
  return (
    <div className="mt-4 px-5 ">
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((x) => (
          <div key={x} className="bg-amber-100 rounded-full px-2">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
