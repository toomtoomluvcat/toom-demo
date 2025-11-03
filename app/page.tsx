import React from "react";
import {
  Text,
  Anchor,
  Paper,
  Stack,
  Container,
  TextInput,
  Box,
  Flex,
  Checkbox,
  Button,
  Center,
} from "@mantine/core";

export default function Page() {
  return (
    <Container>
      <Paper p="sm" mt="xl" radius="lg">
        <Stack gap={"16px"}>
          <Box px="lg">
            <Text fw={700} ta="center" fz="lg">
              เข้าสู่ระบบ
            </Text>
            <Text fw={400} ta="center" c="dimmed" mt="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem dignissimos
            </Text>
          </Box>
          <form action="">
            <Stack>
              <TextInput label="อีเมล" placeholder="กรุณากรอกอีเมล"></TextInput>
              <TextInput label="อีเมล" placeholder="กรุณากรอกอีเมล"></TextInput>
              <Flex justify={"flex-end"}>
                <Anchor href="#">ลืมรหัสผ่าน</Anchor>
              </Flex>
            </Stack>
          </form>
          <Box>
            <Stack>
              <Checkbox label="จดจำฉันไว้" />
              <Button fullWidth>Button</Button>
              <Button fullWidth>Button</Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
