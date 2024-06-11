import { useEffect, useState } from "react";
import { useSetStore } from "../store/setsStore"
import { sortAscending, sortDescending, sumArray } from "../helps/ActionsHelp"
import RenderSet from "../components/RenderSet";

export default function SetsActionsPage() {
    const { sets } = useSetStore();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedSet, setSelectedSet] = useState<number[]>([])

    useEffect(() => {
        if (selectedIndex !== null && sets[selectedIndex]) {
            setSelectedSet(sets[selectedIndex]);
        } else {
            setSelectedSet([]);
        }
    }, [selectedIndex, sets])

    const handleSelection = (index: number): void => {
        setSelectedIndex(prevSelectedIndex => prevSelectedIndex === index ? prevSelectedIndex : index);
    }

    return (
        <>
            <div className="flex flex-col items-center mt-8 text-greenCustom font-extrabold font-mono">
                <h3>Elija un conjunto</h3>
                {!sets || sets.length === 0 ? (
                    <p className="mt-5">No  hay  conjuntos</p>
                ) : (
                    <>
                        <div className="flex overflow-x-auto gap-6 w-[90%] custom-scrollbar mt-5 justify-center">
                            {sets.map((_, i) => (
                                <button className={`shadow-xl rounded-full p-1 shadow-greenCustom mb-3 hover:scale-105 hover:text-aquamarine hover:border-aquamarine hover:shadow-aquamarine duration-300 ${selectedIndex === i ? 'text-red-600 border-red-600 shadow-red-600' : ''}`} key={i} onClick={() => handleSelection(i)}>C{i + 1}</button>
                            ))}
                        </div>
                        <hr className="border-1 border-greenCustom mt-5 w-[90%] shadow-xl shadow-greenCustom" />
                        {selectedSet.length !== 0 ? (
                            <div className="flex flex-col gap-3 h-[420px] w-[90%] mt-6 overflow-y-auto custom-scrollbar">
                                <h2>N° Elementos: {selectedSet.length}</h2>
                                <h2>Suma de los elementos: {sumArray(selectedSet)}</h2>
                                <RenderSet set={sortAscending(selectedSet)} title={"Ordenado ascendentemente"} />
                                <RenderSet set={sortDescending(selectedSet)} title={"Ordenado descendentemente"} />
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
