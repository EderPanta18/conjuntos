import React, { useEffect, useState } from "react";
import RenderSet from "../../../../components/RenderSet";
import { mergeArrays } from "../../../../helps/OperationsHelp";
import { sumArray } from "../../../../helps/ActionsHelp";

interface props {
  sets: number[][];
  setOperation: { set1: number[]; set2: number[] };
  setSetOperation: (newSets: { set1: number[]; set2: number[] }) => void;
  nameVarLocal: string;
  nameOperation: string;
  functionOperation: (set1: number[], set2: number[]) => number[];
}
const TwoSetsModelPage: React.FC<props> = ({
  sets,
  setOperation,
  setSetOperation,
  nameVarLocal,
  nameOperation,
  functionOperation,
}) => {
  const nameIndices: { index1: string; index2: string } = {
    index1: nameVarLocal + "1",
    index2: nameVarLocal + "2",
  };
  const [selectedIndex1, setSelectedIndex1] = useState<number | null>(() => {
    const storedIndex1 = localStorage.getItem(nameIndices.index1);
    return storedIndex1 ? JSON.parse(storedIndex1) : null;
  });

  const [selectedIndex2, setSelectedIndex2] = useState<number | null>(() => {
    const storedIndex2 = localStorage.getItem(nameIndices.index2);
    return storedIndex2 ? JSON.parse(storedIndex2) : null;
  });

  useEffect(() => {
    localStorage.setItem(nameIndices.index1, JSON.stringify(selectedIndex1));
    localStorage.setItem(nameIndices.index2, JSON.stringify(selectedIndex2));
    if (selectedIndex1 !== null && selectedIndex2 !== null) {
      setSetOperation({
        set1: sets[selectedIndex1],
        set2: sets[selectedIndex2],
      });
    } else {
      setSetOperation({ set1: [], set2: [] });
    }
  }, [selectedIndex1, selectedIndex2, sets, setSetOperation]);

  const handleSelectionSet1 = (index: number): void => {
    setSelectedIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSelectionSet2 = (index: number): void => {
    setSelectedIndex2((prevIndex) => (prevIndex === index ? null : index));
  };

  const visibleOperation = () => {
    if (!setOperation || !setOperation.set1 || !setOperation.set2) {
      return false;
    } else if (
      setOperation.set1.length === 0 ||
      setOperation.set2.length === 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="col-span-3">
      <div className="flex flex-col items-center mt-8 text-greenCustom font-extrabold font-mono">
        {!sets || sets.length === 0 ? (
          <p className="mt-5">No hay conjuntos</p>
        ) : (
          <>
            <div className="grid grid-cols-2 w-[90%]">
              <div className="pr-2">
                <h3 className="text-center">Primer conjunto</h3>
                <div className="flex overflow-x-auto gap-2 custom-scrollbar mt-5 justify-center">
                  {sets.map((_, i) => (
                    <button
                      className={`shadow-xl rounded-full p-1 shadow-greenCustom mb-3 hover:scale-105 hover:text-aquamarine hover:border-aquamarine hover:shadow-aquamarine duration-300 ${
                        selectedIndex1 === i
                          ? "text-red-600 border-red-600 shadow-red-600"
                          : ""
                      }`}
                      key={`set1-${i}`}
                      onClick={() => handleSelectionSet1(i)}
                    >
                      C{i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-l-greenCustom pl-2">
                <h3 className="text-center">Segundo conjunto</h3>
                <div className="flex overflow-x-auto gap-2 custom-scrollbar mt-5 justify-center">
                  {sets.map((_, i) => (
                    <button
                      className={`shadow-xl rounded-full p-1 shadow-greenCustom mb-3 hover:scale-105 hover:text-aquamarine hover:border-aquamarine hover:shadow-aquamarine duration-300 ${
                        selectedIndex2 === i
                          ? "text-red-600 border-red-600 shadow-red-600"
                          : ""
                      }`}
                      key={`set2-${i}`}
                      onClick={() => handleSelectionSet2(i)}
                    >
                      C{i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <hr className="border-1 border-greenCustom mt-5 w-[90%] shadow-xl shadow-greenCustom" />
            {visibleOperation() ? (
              <div className="flex flex-col gap-3 h-[430px] w-[90%] mt-6 overflow-y-auto custom-scrollbar">
                <h2>
                  N° Elementos:{" "}
                  {
                    mergeArrays(
                      functionOperation(setOperation.set1, setOperation.set2)
                    ).length
                  }
                </h2>
                <h2>
                  Suma de los elementos:{" "}
                  {sumArray(
                    functionOperation(setOperation.set1, setOperation.set2)
                  )}
                </h2>
                <RenderSet
                  set={functionOperation(setOperation.set1, setOperation.set2)}
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

export default TwoSetsModelPage;
