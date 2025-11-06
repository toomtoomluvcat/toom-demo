import { AspectRatio, Box, Container, Paper } from "@mantine/core";
import styles from "./page.module.scss";
import Content from "../Components/Content";

function Icon() {
  return (
    <Box>
      <Box className={styles.container}>
        <Box className={styles.icon}>
          <img src="./background.svg" alt="" />
        </Box>
        <Paper className={styles.paper_content}>
          <Content></Content>
        </Paper>
      </Box>
    </Box>
  );
}

export default Icon;
