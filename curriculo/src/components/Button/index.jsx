import { Button, Stack } from "@chakra-ui/react";

const Button = ({ title }) => {
  return (
    <Stack spacing={4} direction='row' align='center'>
      <Button colorScheme={"blue"}>{title}</Button>
    </Stack>
  );
};

export default Button;
