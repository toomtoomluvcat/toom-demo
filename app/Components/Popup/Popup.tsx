"use client";

import { usePopup } from "@/app/Context/Popup/usePopup";
import React from "react";

function Popup() {
  const { Popup, onClose, onOpend } = usePopup();
  return <div>{Popup.showup && <div>Hello Popup from Component</div>}</div>;
}

export default Popup;
