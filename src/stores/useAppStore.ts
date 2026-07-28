import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
export interface Studio {
  id: string;
  name: string;
  type: string;
  address?: string;
  logo?: string;
}

export interface AppState {
  // Studio state
  studio: Studio | null;
  
  // Actions
  setStudio: (studio: Studio | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      studio: null,
      
      // Actions
      setStudio: (studio) =>
        set({ studio }),
    }),
    {
      name: 'studio-up-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        studio: state.studio,
      }),
    }
  )
);
