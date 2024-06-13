import { useEffect, useState } from "react";
import { useSetsStore } from "../store/setsStore";
import { sortAscending, sortDescending, sumArray } from "../helps/ActionsHelp";
import RenderSet from "../components/RenderSet";
import { useAppliedSetsStore } from "../store/appliedSetsStore";

export default function SetsActionsPage() {
  const { sets } = useSetsStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(() =>
    JSON.parse(localStorage.getItem("selectedIndex") || "null")
  );
  const { setAction, setSetAction } = useAppliedSetsStore();

  useEffect(() => {
    localStorage.setItem("selectedIndex", JSON.stringify(selectedIndex));
    if (selectedIndex !== null && sets[selectedIndex]) {
      setSetAction(sets[selectedIndex]);
    } else {
      setSetAction([]);
      setSelectedIndex(null);
    }
  }, [selectedIndex, sets]);

  const handleSelection = (index: number): void => {
    setSelectedIndex((prevSelectedIndex) =>
      prevSelectedIndex === index ? null : index
    );
  };

  return (
    <div className="flex flex-col items-center mt-8 text-greenCustom font-extrabold font-mono">
      <h3>Elija un conjunto</h3>
      {!sets || sets.length === 0 ? (
        <p className="mt-5">No hay conjuntos</p>
      ) : (
        <>
          <div className="flex overflow-x-auto gap-6 w-[90%] custom-scrollbar mt-5 justify-center">
            {sets.map((_, i) => (
              <button
                className={`shadow-xl rounded-full p-1 shadow-greenCustom mb-3 hover:scale-105 hover:text-aquamarine hover:border-aquamarine hover:shadow-aquamarine duration-300 ${
                  selectedIndex === i
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
          {setAction.length !== 0 ? (
            <div className="flex flex-col gap-3 h-[420px] w-[90%] mt-6 overflow-y-auto custom-scrollbar">
              <h2>N° Elementos: {setAction.length}</h2>
              <h2>Suma de los elementos: {sumArray(setAction)}</h2>
              <RenderSet
                set={sortAscending(setAction)}
                title={"Ordenado ascendentemente"}
              />
              <RenderSet
                set={sortDescending(setAction)}
                title={"Ordenado descendentemente"}
              />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
