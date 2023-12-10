import Image from "next/image";
import React from "react";

interface ItemProps {
  img?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
}

function Item({ img, title, description, onClick }: ItemProps) {
  return (
    <div className="bg-white w-[20rem] m-3 rounded p-3 hover:shadow-lg">
      <Image src={img ?? ''} alt="cover-image" width={300} height={300} />
      <div className="font-bold text-center my-2">{title}</div>
      <p className="text-sm pb-5">{description}</p>
    </div>
  );
}

export default Item;
