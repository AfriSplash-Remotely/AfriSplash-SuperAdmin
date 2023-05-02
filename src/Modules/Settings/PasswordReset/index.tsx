import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SmsIcon from "@/assets/smsIcon";

type SettingsPasswordReset = {
  email: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function SettingsPasswordReset(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsPasswordReset>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SettingsPasswordReset) => console.log(data);
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      px="1.5rem"
    >
      <Heading size="xl" textAlign="center">
        Reset password?
      </Heading>
      <Text textAlign="center" py="1rem">
        Enter your email address and we’ll send you instructions on how to reset
        your password.
      </Text>
      <Box as="form" w="400px" py="1rem" onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb="1rem">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SmsIcon />} />
            <Input
              type="email"
              variant="filled"
              placeholder="email@gmail.com"
              {...register("email")}
            />
          </InputGroup>
          {errors.email && (
            <Text as="span" color="error">
              {errors.email?.message}
            </Text>
          )}
        </FormControl>

        <Box display="flex" justifyContent="center" py="2rem">
          <Button size="md" variant="secondary" width="100%" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
