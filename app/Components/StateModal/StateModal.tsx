import { Button, Modal } from "@mantine/core";
import { ReactNode } from "react";

interface DoubleButton {
  active: boolean;
  path: string;
}

interface StateMoalProps {
  children: ReactNode;
  title: string;
  description: string;
  doubleButton: DoubleButton;
  opened: boolean;
  close: () => void;
}
function StateModal({
  children,
  title,
  description,
  doubleButton,
  opened,
  close,
}: StateMoalProps) {
  return (
    <Modal opened={opened} onClose={close}>
      {children}
      <Button onClick={close}>close</Button>
    </Modal>
  );
}

export default StateModal;
