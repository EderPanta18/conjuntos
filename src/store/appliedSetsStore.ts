import { create } from "zustand";

interface AppliedSetState {
  setAction: number[];
  setJoin: number[][];
  setIntersection: { set1: number[], set2: number[] };
  setDifference: { set1: number[], set2: number[] };
  setDSymmetrical: { set1: number[], set2: number[] };
  setSetAction: (action: number[]) => void;
  setSetJoin: (join: number[][]) => void;
  setSetIntersection: (intersection: { set1: number[], set2: number[] }) => void;
  setSetDifference: (difference: { set1: number[], set2: number[] }) => void;
  setSetDSymmetrical: (dsymmetrical: { set1: number[], set2: number[] }) => void;
}

export const useAppliedSetsStore = create<AppliedSetState>((set) => ({
  setAction: [],
  setJoin: [],
  setIntersection: { set1: [], set2: [] },
  setDifference: { set1: [], set2: [] },
  setDSymmetrical: { set1: [], set2: [] },
  setSetAction: (action) => set({ setAction: action }),
  setSetJoin: (join) => set({ setJoin: join }),
  setSetIntersection: (intersection) => set({ setIntersection: intersection }),
  setSetDifference: (difference) => set({ setDifference: difference }),
  setSetDSymmetrical: (dsymmetrical) => set({ setDSymmetrical: dsymmetrical }),
}));
