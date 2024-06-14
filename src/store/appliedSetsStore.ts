import { create } from "zustand";

interface AppliedSetState {
  setAction: number[];
  setJoin: number[][];
  setIntersection: number[][];
  setDifference: { set1: number[], set2: number[] };
  setDSymmetrical: { set1: number[], set2: number[] };
  setSetAction: (action: number[]) => void;
  setSetJoin: (newSets: number[][]) => void;
  setSetIntersection: (newSets: [][]) => void;
  setSetDifference: (difference: { set1: number[]; set2: number[] }) => void;
  setSetDSymmetrical: (dsymmetrical: { set1: number[]; set2: number[] }) => void;
}

export const useAppliedSetsStore = create<AppliedSetState>((set) => ({
  setAction: [],
  setJoin: [],
  setIntersection: [],
  setDifference: { set1: [], set2: [] },
  setDSymmetrical: { set1: [], set2: [] },
  setSetAction: (action) => set({ setAction: action }),
  setSetJoin: (newSets) => set({ setJoin: newSets }),
  setSetIntersection: (newSets) => set({ setIntersection: newSets }),
  setSetDifference: (difference) => set({ setDifference: difference }),
  setSetDSymmetrical: (dsymmetrical) => set({ setDSymmetrical: dsymmetrical }),
}));

