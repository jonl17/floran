import create from 'zustand'

interface IModalStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useModal = create<IModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
}))
