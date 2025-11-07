"use client";

import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { ModalContext } from "./ModalContext";

function ModalProvider({ children }: { children: ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <ModalContext.Provider value={{ opened, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
