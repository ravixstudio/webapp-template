import { create } from "zustand";
import { User } from "@/types";

export const useUserStore = create<{
  user: User | null;
  setUser: (user: User) => void;
}>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
