"use client";
import { Box, Button, Modal } from "@mantine/core";
import { useModal } from "./useModal";
import { ReactNode } from "react";

function ModalBlog({ children }: { children: ReactNode }) {
  return (
    <Box>
      {children}
      {/* <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button> */}
    </Box>
  );
}

export default ModalBlog;
