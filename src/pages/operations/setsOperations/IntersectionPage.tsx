import { useEffect, useState } from "react";
import { useSetsStore } from "../../../store/setsStore";
import { useAppliedSetsStore } from "../../../store/appliedSetsStore";

export default function IntersectionPage() {
  const { sets } = useSetsStore();
  const [selectedIndex1, setSelectedIndex1] = useState<number | null>(() => {
    const storedIndex1 = localStorage.getItem("selectedIndex1");
    return storedIndex1 ? JSON.parse(storedIndex1) : null;
  });

  const [selectedIndex2, setSelectedIndex2] = useState<number | null>(() => {
    const storedIndex2 = localStorage.getItem("selectedIndex2");
    return storedIndex2 ? JSON.parse(storedIndex2) : null;
  });

  const { setIntersection, setSetIntersection } = useAppliedSetsStore();

  useEffect(() => {
    localStorage.setItem("selectedIndex1", JSON.stringify(selectedIndex1));
    localStorage.setItem("selectedIndex2", JSON.stringify(selectedIndex2));
    if (selectedIndex1 !== null && selectedIndex2 !== null) {
      setSetIntersection({
        set1: sets[selectedIndex1],
        set2: sets[selectedIndex2],
      });
    } else {
      setSetIntersection({ set1: [], set2: [] });
    }
  }, [selectedIndex1, selectedIndex2, sets, setSetIntersection]);

  const handleSelectionSet1 = (index: number): void => {
    setSelectedIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSelectionSet2 = (index: number): void => {
    setSelectedIndex2((prevIndex) => (prevIndex === index ? null : index));
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
            {setIntersection.set1 !== null && setIntersection.set2 !== null ? (
              <div className="flex flex-col gap-3 h-[430px] w-[90% mt-6 overflow-y-auto custom-scrollbar"></div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
}
