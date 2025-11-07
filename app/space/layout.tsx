"use client";

import { ReactNode, useState } from "react";
import Popup from "../Components/Popup/Popup";
import PopupProvider from "../context/Popup/PopupProvider";
import Button from "../Components/Button/Button";
interface layoutProps {
  children: ReactNode;
}
function layout({ children }: layoutProps) {
  return (
    <div>
      <PopupProvider>
        <div>{children}</div>
        <Popup></Popup>
        <Button></Button>
      </PopupProvider>
    </div>
  );
}

export default layout;
