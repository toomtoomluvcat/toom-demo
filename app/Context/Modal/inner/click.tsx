"use client";

import { Button } from "@mantine/core";
import { useModal } from "../useModal";

interface ClickProps {
  Id?: string;
}

function Click({ Id = "1" }: ClickProps) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <Button variant="default" onClick={() => openModal(Id)}>
      Open modal
    </Button>
  );
}

export default Click;
