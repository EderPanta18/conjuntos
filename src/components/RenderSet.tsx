import React from "react";

interface RenderSetProps {
  set: number[];
  title: string;
}

const RenderSet: React.FC<RenderSetProps> = ({
  set,
  title = "Titulo por defecto",
}) => {
  return (
    <>
      <h2>{title} :</h2>
      <div className="relative bg-blackCustom-400 py-1 px-2 shadow-sm shadow-greenCustom">
        <p> [{set.join(", ")}]</p>
      </div>
    </>
  );
};

export default RenderSet;
