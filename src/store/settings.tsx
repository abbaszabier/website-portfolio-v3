import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface SettingStore {
  selectedLanguage: string;
  setSelectedLanguage: (language: string | undefined) => void;
}

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist(
      (set) => ({
        selectedLanguage: "en",
        setSelectedLanguage: (language: string | undefined) => {
          set({ selectedLanguage: language });
        },
      }),
      {
        name: "setting-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
