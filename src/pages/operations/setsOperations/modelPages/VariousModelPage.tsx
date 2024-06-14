import { useEffect, useState } from "react";
import RenderSet from "../../../../components/RenderSet";
import { mergeArrays } from "../../../../helps/OperationsHelp";
import { sumArray } from "../../../../helps/ActionsHelp";

interface props {
  sets: number[][];
  setOperation: number[][];
  setSetOperation: (newSets: number[][]) => void;
  nameVarLocal: string;
  nameOperation: string;
  functionOperation: (...theSets: number[][]) => number[];
}

const VariousModelPage: React.FC<props> = ({
  sets,
  setOperation,
  setSetOperation,
  nameVarLocal,
  nameOperation,
  functionOperation,
}) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>(() => {
    const storedIndices = localStorage.getItem(nameVarLocal);
    return storedIndices ? JSON.parse(storedIndices) : [];
  });

  useEffect(() => {
    localStorage.setItem(nameVarLocal, JSON.stringify(selectedIndices));
    if (sets.length !== 0 && selectedIndices !== null) {
      const selectedSets = selectedIndices
        .filter((index) => index >= 0 && index < sets.length)
        .map((index) => sets[index]);
      setSetOperation(selectedSets);
    } else {
      setSetOperation([]);
      setSelectedIndices([]);
    }
  }, [selectedIndices, sets]);
  const handleSelection = (index: number): void => {
    setSelectedIndices((prevSelectedIndices) => {
      const currentSelectedIndices = prevSelectedIndices ?? [];
      if (currentSelectedIndices.includes(index)) {
        return currentSelectedIndices.filter((i) => i !== index);
      } else {
        return [...currentSelectedIndices, index];
      }
    });
  };

  return (
    <div className="col-span-3">
      <div className="flex flex-col items-center mt-8 text-greenCustom font-extrabold font-mono">
        <h3>Elija los conjuntos</h3>
        {!sets || sets.length === 0 ? (
          <p className="mt-5">No hay conjuntos</p>
        ) : (
          <>
            <div className="flex overflow-x-auto gap-6 w-[90%] custom-scrollbar mt-5 justify-center">
              {sets.map((_, i) => (
                <button
                  className={`shadow-xl rounded-full p-1 shadow-greenCustom mb-3 hover:scale-105 hover:text-aquamarine hover:border-aquamarine hover:shadow-aquamarine duration-300 ${
                    selectedIndices.includes(i)
                      ? "text-red-600 border-red-600 shadow-red-600"
                      : ""
                  }`}
                  key={i}
                  onClick={() => handleSelection(i)}
                >
                  C{i + 1}
                </button>
              ))}
            </div>
            <hr className="border-1 border-greenCustom mt-5 w-[90%] shadow-xl shadow-greenCustom" />
            {setOperation.length !== 0 ? (
              <div className="flex flex-col gap-3 h-[430px] w-[90%] mt-6 overflow-y-auto custom-scrollbar">
                <h2>N° Elementos: {mergeArrays(...setOperation).length}</h2>
                <h2>Suma de los elementos: {sumArray(...setOperation)}</h2>
                <RenderSet
                  set={functionOperation(...setOperation)}
                  title={nameOperation + " de los conjuntos"}
                />
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VariousModelPage;
