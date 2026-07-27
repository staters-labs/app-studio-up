import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  studioId?: string;
  role: 'OWNER' | 'ADMIN' | 'PROVIDER';
}

export interface Studio {
  id: string;
  name: string;
  type: string;
  address?: string;
  logo?: string;
}

export interface AppState {
  // Auth state
  user: User | null;
  isAuthenticated: boolean;
  
  // Studio state
  studio: Studio | null;
  
  // UI state
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  setStudio: (studio: Studio | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      studio: null,
      isLoading: false,
      error: null,
      
      // Actions
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),
      
      setStudio: (studio) =>
        set({ studio }),
      
      setLoading: (isLoading) =>
        set({ isLoading }),
      
      setError: (error) =>
        set({ error }),
      
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          studio: null,
          error: null,
        }),
    }),
    {
      name: 'studio-up-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        studio: state.studio,
      }),
    }
  )
);
