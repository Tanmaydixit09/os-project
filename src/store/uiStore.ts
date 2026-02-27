import { create } from 'zustand';

export type MessageFormat = 'bubble' | 'list' | 'compact';

interface UIState {
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  messageFormat: MessageFormat;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  setMessageFormat: (format: MessageFormat) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isDarkMode: false,
  isSidebarOpen: false,
  messageFormat: 'bubble',
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setMessageFormat: (format) => set({ messageFormat: format }),
}));
