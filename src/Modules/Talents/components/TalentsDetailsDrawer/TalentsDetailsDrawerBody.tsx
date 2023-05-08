import {
  Box,
  Divider,
  HStack,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ProfileImage from "../../../../assets/user-profile-image.png";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Publications } from "./Publications";

const textStyle = {
  fontWeight: "500",
  _selected: { color: "primary", borderBottom: ".2rem solid #0D5520" },
};

const TalentsDetailsDrawerBody = (): JSX.Element => {
  return (
    <Box fontFamily="mono">
      <Box pt={{ lg: "1.5rem" }} pb={{ lg: "1rem" }} px={{ lg: "1.5rem" }}>
        <Box
          overflow="hidden"
          w="5rem"
          h="5rem"
          borderRadius="xl"
          mb={{ lg: "1rem" }}
        >
          <Image alt="Uzor Samuel" src={ProfileImage} w="100%" h="100%" />
        </Box>
        <Box color="#000" w={{ lg: "21.875rem" }} fontSize={{ lg: ".875rem" }}>
          <Text fontWeight="500" fontSize={{ lg: "1.5rem" }}>
            Uzor Samuel
          </Text>
          <Text fontSize={{ lg: "0.875rem" }}>
            Am a frontend developer, with 6yrs experience in vuejs, React.js and
            typescript
          </Text>
          <Text fontWeight="500" color="#858585" mt={{ lg: "1.5rem" }}>
            Lagos, Nigeria
          </Text>
        </Box>
      </Box>

      <Divider />

      <Box px={{ lg: "1.5rem" }} py={{ lg: "2.3rem" }}>
        <Text fontWeight="500" fontSize={{ lg: "1.125rem" }}>
          Analytics
        </Text>
        <HStack
          spacing={5}
          pt={{ lg: "2.3rem" }}
          color="white"
          fontSize="0.875rem"
          fontWeight="500"
        >
          <Box bgColor="primary" py=".5rem" px=".75rem" rounded="full">
            47 profile views
          </Box>
          <Box bgColor="primary" py=".5rem" px=".75rem" rounded="full">
            21 search appearances
          </Box>
        </HStack>
      </Box>

      <Divider />

      <Tabs
        isFitted={true}
        color="#656565"
        w="100%"
        pt={{ lg: "1.5rem" }}
        colorScheme="primary"
        size="sm"
      >
        <TabList>
          <Tab {...textStyle}>Skills</Tab>
          <Tab {...textStyle}>Experience</Tab>
          <Tab {...textStyle}>Education</Tab>
          <Tab {...textStyle}>Projects</Tab>
          <Tab {...textStyle}>Publications</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Experience />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Publications />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TalentsDetailsDrawerBody;
