import { create } from "zustand";

interface setState{
    sets: number[][];
    addSet: (newSet: number[]) => void;
    updateSet: (index: number, newSet: number[]) => void;
    deleteSet: (index: number) => void;
}

export const useSetsStore = create<setState>(set => ({
    sets: [],
    addSet: (newSet) => {
        const filteredSet = [...new Set(newSet)];
        set(state => ({
            sets: [...state.sets, filteredSet]
        }))},
    updateSet: (index, newSet) => 
        set(state => ({
            sets: state.sets.map((c,i) => (i==index ? newSet : c))
        })),
    deleteSet: (index) => 
        set(state => ({
            sets: state.sets.filter((_,i) => i!==index)
        }))
}))