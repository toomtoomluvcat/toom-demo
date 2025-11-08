"use client";
import { useDisclosure } from "@mantine/hooks";
import StateModal from "../Components/StateModal/StateModal";
import { Button } from "@mantine/core";
function Sandbox() {
  const [opened, handlerOpen] = useDisclosure(false);
  const [showed, handlerShow] = useDisclosure(false);
  return (
    <div>
      <StateModal
        title="Try Modal"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis!"
        doubleButton={{ active: true, path: "" }}
        opened={opened}
        close={handlerOpen.close}
      >
        <Button onClick={handlerShow.open}>Click here</Button>
      </StateModal>
      <StateModal
        title="Try Modal"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis!"
        doubleButton={{ active: true, path: "" }}
        opened={showed}
        close={handlerShow.close}
      >
        Hello Modal 2
      </StateModal>
      <Button onClick={handlerOpen.open}>Click here</Button>
    </div>
  );
}

export default Sandbox;
