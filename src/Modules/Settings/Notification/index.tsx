import React from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Switch,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function SettingsNotification(): JSX.Element {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Heading size="xl" textAlign="center">
        Notifications
      </Heading>
      <Text textAlign="center" py="1rem">
        Update and manage your account Notification settings
      </Text>
      <Card
        width="100%"
        overflow="hidden"
        boxShadow="none"
        borderRadius=".75rem"
        padding={0}
        my="1.5rem"
      >
        <CardHeader>
          <Heading size="md" color="#64748B">
            Security Notifications
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing="3rem">
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="password-alerts">Password Change</FormLabel>
              <Switch colorScheme="green" id="password-alerts" />
            </FormControl>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="device-change">Device Change</FormLabel>
              <Switch colorScheme="green" id="device-change" />
            </FormControl>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="settings-change">Settings Change</FormLabel>
              <Switch colorScheme="green" id="settings-change" />
            </FormControl>
          </Stack>
        </CardBody>
        <CardFooter overflow="hidden" padding={0}>
          <Box width="100%" bg="primaryLight" borderRadius="0" p="1rem">
            <Text color="primary" fontSize=".75rem">
              Read More About Notification Methods
            </Text>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
}
