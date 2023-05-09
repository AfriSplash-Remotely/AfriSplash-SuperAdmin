import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { skillsData } from "./SkillsData";

export const Skills = (): JSX.Element => {
  return (
    <Flex
      gap={{ lg: "1.2rem" }}
      flexWrap="wrap"
      fontSize="0.875rem"
      color="#000000"
      fontWeight="500"
    >
      {skillsData.map((skillData) => {
        return (
          <HStack
            p={{ lg: "0.625rem" }}
            border="1px solid #D9DEDC"
            borderRadius="xl"
            key={skillData.skill}
          >
            <Text>{skillData.skill}</Text>
            <Text>({skillData.level})</Text>
          </HStack>
        );
      })}
    </Flex>
  );
};
