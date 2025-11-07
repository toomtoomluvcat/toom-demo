"use client";

import { usePopup } from "@/app/context/Popup/usePopup";
import React from "react";

function Button() {
  const { onClose, onOpend } = usePopup();

  return (
    <div>
      <button type="button" onClick={() => onClose()}>
        Close
      </button>
      <button type="button" onClick={() => onOpend()}>
        Open
      </button>
    </div>
  );
}

export default Button;
