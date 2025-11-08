"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";
import { ModalContext } from "./ModalContext";

function ModalProvider({ children }: { children: ReactNode }) {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const openModal = useCallback((ModalId: string) => {
    setOpenMap((prev) => ({ ...prev, [ModalId]: true }));
  }, []);

  const closeModal = useCallback((ModalId: string) => {
    setOpenMap((prev) => ({ ...prev, [ModalId]: false }));
  }, []);

  const isModalOpen = useCallback(
    (ModalId: string): boolean => {
      return !!openMap[ModalId];
    },
    [openMap]
  );

  const value = useMemo(
    () => ({ isModalOpen, openModal, closeModal }),
    [isModalOpen, openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;
