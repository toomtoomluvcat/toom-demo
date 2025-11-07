import { Box, Button, Modal } from "@mantine/core";
import { useModal } from "../useModal";

function Toggle() {
  const { opened, close, open } = useModal();

  return (
    <Box>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>
    </Box>
  );
}

export default Toggle;
