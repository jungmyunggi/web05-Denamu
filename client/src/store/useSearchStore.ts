import { create } from "zustand";
import { FilterType } from "@/types/search";

interface SearchState {
  currentFilter: FilterType;
  searchParam: string;
  page: number;
  setFilter: (filter: FilterType) => void;
  setSearchParam: (param: string) => void;
  setPage: (page: number) => void;
  resetPage: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  currentFilter: "title",
  searchParam: "",
  page: 1,
  setFilter: (currentFilter) => set({ currentFilter }),
  setSearchParam: (param) => set({ searchParam: param }),
  setPage: (page) => set({ page }),
  resetPage: () => set({ page: 1 }),
}));
