"use client";

import { createContext } from "react";

export interface ModalInstance {
  opened: boolean;
  close: () => void;
  open: () => void;
}
export interface ContextTypeProps {
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  isModalOpen: (id: string) => boolean;
}
export const ModalContext = createContext<ContextTypeProps | undefined>(
  undefined
);
