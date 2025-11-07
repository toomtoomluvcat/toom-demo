"use client";

import { useContext } from "react";
import { PopupContext } from "./PopupContext";

export function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("context must use by provider");
  }
  return context;
}
