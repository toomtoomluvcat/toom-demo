"use client";

import { ReactNode } from "react";
import ModalBlog from "../Context/Modal/Modal";
import ModalProvider from "../Context/Modal/ModalProvider";
import { useModal } from "../Context/Modal/useModal";
import { Box, Button } from "@mantine/core";
import Click from "../Context/Modal/inner/click";
interface layoutProps {
  children: ReactNode;
}

function layout({ children }: layoutProps) {
  return (
    <div>
      <ModalProvider>
        <ModalBlog>{children}</ModalBlog>
        <Click></Click>
      </ModalProvider>
    </div>
  );
}

export default layout;
