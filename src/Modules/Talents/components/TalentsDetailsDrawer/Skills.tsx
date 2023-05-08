import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export const Skills = (): JSX.Element => {
  const skillsData = [
    {
      skill: "HTML",
      level: 4,
    },
    {
      skill: "Vue.js",
      level: 5,
    },
    {
      skill: "React.js",
      level: 4,
    },
    {
      skill: "TypeScript",
      level: 2,
    },
    {
      skill: "JavaScript",
      level: 5,
    },
    {
      skill: "CSS",
      level: 5,
    },
    {
      skill: "SCSS",
      level: 3,
    },
    {
      skill: "LESS",
      level: 3,
    },
  ];

  return (
    <>
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
    </>
  );
};
