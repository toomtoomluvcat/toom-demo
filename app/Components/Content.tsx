import { Anchor, Box, Flex, Input, Stack, Text, Button } from "@mantine/core";
import React from "react";

import styles from "./Content.module.scss";

function Content() {
  return (
    <div>
      <Flex py="sm" direction="column" className={styles.login}>
        <Text>จะได้รึยังน้า</Text>
        <form>
          <Stack>
            <Box>
              <Stack className={styles.form}>
                <Input placeholder="กรุณากรอกอีเมล" type="email" required />
                <Flex direction="column" className={styles.password}>
                  <Anchor className={styles.forget}>ลืมรหัสผ่าน?</Anchor>
                </Flex>
              </Stack>
            </Box>
            <Stack>
              <Button type="submit" size="lg" fullWidth>
                เข้าสู่ระบบ
              </Button>
              <Button variant="outline" size="lg" fullWidth>
                สมัครบัญชีใหม่
              </Button>
            </Stack>
          </Stack>
        </form>
        <Flex className={styles.footer}>
          <Text c="subText">หากมีข้อสงสัยหรือติดปัญหา</Text>
          <Anchor>ติดต่อเรา</Anchor>
        </Flex>
      </Flex>
    </div>
  );
}

export default Content;
