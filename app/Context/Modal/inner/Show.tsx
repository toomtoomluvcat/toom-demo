import { Box, Paper, Text } from "@mantine/core";
import { useModal } from "../useModal";
import ModalBlog from "../Modal";
import Click from "./click";
function Show() {
  return (
    <Box>
      <Paper>
        <Text>Hello form Modal</Text>
        <Click Id="2"></Click>
        <ModalBlog Id="2">Hello form Modal2</ModalBlog>
      </Paper>
    </Box>
  );
}

export default Show;
