"use client";

import { Button } from "@mantine/core";
import { useModal } from "../useModal";

function Click() {
  const { opened, close, open } = useModal();

  return (
    <Button variant="default" onClick={open}>
      Open modal
    </Button>
  );
}

export default Click;
