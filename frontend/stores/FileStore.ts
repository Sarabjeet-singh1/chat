import { create } from 'zustand';

interface FileStore {
  files: File[];
  addFile: (file: File) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  addFile: (file) => set((state) => ({
    files: [...state.files, file],
  })),
  removeFile: (id) => set((state) => ({
    files: state.files.filter((file) => file.name !== id),
  })),
  clearFiles: () => set({ files: [] }),
}));
