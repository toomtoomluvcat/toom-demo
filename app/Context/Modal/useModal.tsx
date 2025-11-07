"use client";

import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("ModalContext must use with Modal Provider");
  return ctx;
}
