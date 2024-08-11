'use client'
import { create } from 'zustand';

type UseHamburgerOverlayType = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useHamburgerOverlay = create<UseHamburgerOverlayType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));