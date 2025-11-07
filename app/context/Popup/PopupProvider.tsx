"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";
import { PopupContext, PopupContextType } from "./PopupContext";
import { Popup } from "./types";

function PopupProvider({ children }: { children: ReactNode }) {
  const [Popup, setPopup] = useState<Popup>({ showup: false });

  const onClose = useCallback(() => {
    setPopup((prev) => ({ ...prev, showup: false }));
  }, []);

  const onOpend = useCallback(() => {
    setPopup((prev) => ({ ...prev, showup: true }));
  }, []);

  const value = useMemo<PopupContextType>(
    () => ({
      Popup,
      onClose,
      onOpend,
    }),
    [Popup, onClose, onOpend]
  );
  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
}

export default PopupProvider;
