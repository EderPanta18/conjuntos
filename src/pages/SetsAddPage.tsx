import React, { useState } from "react";
import { useSetsStore } from "../store/setsStore";
import Set from "../components/Set";

const SetsAddPage: React.FC = () => {
  const { addSet, sets } = useSetsStore();
  const [inputValue, setInputValue] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateNewSet();
    } else if (e.key === " ") {
      setInputValue(inputValue + ", ");
    }
  };

  const handleCreateNewSet = () => {
    const newSet = inputValue
      .split(",")
      .map((item) => parseInt(item.trim(), 10))
      .filter((item) => !isNaN(item));
    if (newSet.length > 0) {
      addSet(newSet);
      setInputValue("");
      setIsCreating(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-start items-center font-mono bg-blackCustom-900 bg-gradient-to-tl from-blackCustom-300 text-greenCustom">
        <h1 className="font-extrabold text-2xl mt-5">Gestor de Conjuntos</h1>
        {!isCreating && (
          <button
            onClick={() => setIsCreating(true)}
            className="mt-5 border-2 rounded-3xl px-3 border-greenCustom hover:scale-105 hover:text-aquamarine hover:border-aquamarine duration-300"
          >
            NUEVO CONJUNTO
          </button>
        )}
        {isCreating && (
          <div className="mt-5 items-center flex flex-col gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Ingresa los elementos (separados por espacios)"
              autoFocus={true}
              className="w-[200%] px-3 py-1 rounded-md bg-blackCustom-400 outline-none placeholder:text-greenCustom placeholder:opacity-50"
            />
            <button
              onClick={handleCreateNewSet}
              className="-mb-10 hover:scale-105 hover:text-aquamarine duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        )}
        <hr />
        <div className="mt-16 mb-5 flex flex-col items-center w-full">
          <h3 className="text-center mb-2 font-extrabold">
            Listado de Conjuntos
          </h3>
          <div className="w-[90%] space-y-4 h-[460px] pr-3 ml-3 custom-scrollbar overflow-y-auto">
            {sets.map((set, index) => (
              <Set key={index} set={set} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SetsAddPage;
