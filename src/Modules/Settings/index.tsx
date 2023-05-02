import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SettingsProfile } from "./settings.types";
import { ProfileSchema } from "./settings.schema";

export default function SettingsProfile(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const { register, handleSubmit } = useForm<SettingsProfile>({
    resolver: yupResolver(ProfileSchema),
  });

  const onSubmit = (data: SettingsProfile) => console.log(data);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <Box px="1.5rem">
      <Box display="flex" pb="2rem">
        <Avatar size="xl" />
        <Flex flexDir="column" justifyContent="space-around" ml="1rem">
          <Text fontSize="1rem">Emmanuel</Text>
          <Flex>
            <Text color="#000" fontSize="1rem">
              Role |{" "}
              <Text as="span" color="#B0B0B0">
                Super Admin
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        pt="1rem"
      >
        <Box as="form" w="400px" onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="1.5rem">
            <FormLabel color={isDisabled ? "#BBBBC3" : "#575757"}>
              Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Name"
              isDisabled={isDisabled}
              {...register("name")}
            />
          </FormControl>

          <FormControl mb="1.5rem">
            <FormLabel color={isDisabled ? "#BBBBC3" : "#575757"}>
              Surname
            </FormLabel>
            <Input
              type="text"
              placeholder="Surname"
              isDisabled={isDisabled}
              {...register("surname")}
            />
          </FormControl>

          <FormControl mb="1.5rem">
            <FormLabel color={isDisabled ? "#BBBBC3" : "#575757"}>
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="email@gmail.com"
              isDisabled={isDisabled}
              {...register("email")}
            />
          </FormControl>

          <Box display="flex" justifyContent="center" py="2rem">
            <Button
              size="md"
              variant="secondary"
              width="100%"
              type={isDisabled ? "submit" : "button"}
              onClick={toggleDisabled}
            >
              {isDisabled ? "Edit" : "Save Changes"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
