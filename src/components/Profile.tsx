import Image from "./Image";


export default function Profile() {
  return (
    <>
      <Image
        src="/profile.png"
        width={120}
        height={120}
        alt="profile"
        className="mx-auto my-6 rounded-full"
      />
      <div className="text-center text-lg">
        <p>
          <b>Ye Aung</b>
        </p>
        <p>
          <b>Software Engineer</b>
        </p>
      </div>
      <div className="mx-10 mt-5">
        <p>
          An Engineer with a GCP ML certification and hands-on experience in
          TensorFlow and machine learning projects. Proficient in designing
          scalable and efficient code, and dedicated to continuous learning.
        </p>
      </div>
    </>
  );
}
