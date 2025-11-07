"use client";

import { createContext } from "react";

export interface ContextTypeProps {
  opened: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<ContextTypeProps | undefined>(
  undefined
);
