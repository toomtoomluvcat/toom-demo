"use client";

import { createContext } from "react";
import { Popup } from "./types";

export interface PopupContextType {
  Popup: Popup;
  onClose: () => void;
  onOpend: () => void;
}

export const PopupContext = createContext<PopupContextType | undefined>(
  undefined
);
