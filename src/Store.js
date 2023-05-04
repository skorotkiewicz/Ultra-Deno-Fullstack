import { create } from "zustand";
import { devtools } from "zustand/middleware";

// export const useStore = create((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   removeAll: () => set({ count: 0 }),
// }));

export const useStore = create(
  devtools((set) => ({
    count: 0,

    increase: () =>
      set((state) => ({ count: state.count + 1 }), false, "count/increase"),

    removeAll: () => set(() => ({ count: 0 }), false, "count/remove"),

    test: async (pond) => set(() => ({ count: pond }), false, "count/test"),
  }))
);
