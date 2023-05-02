import { Box, Divider, Text } from "@chakra-ui/react";

interface Props {
  item: {
    skill: string;
  };
  index: number;
}

const JobApplicationCard = ({ item, index }: Props): JSX.Element => {
  return (
    <Box
      w={{ lg: "44rem" }}
      border="1px solid #E6E6E6"
      borderRadius="xl"
      overflow="hidden"
      key={index}
    >
      <Box
        pt={{ lg: "1.875rem" }}
        pb={{ lg: "3rem" }}
        px={{ lg: "1.5rem" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize={{ lg: "1.25rem" }}>{item.skill}</Text>
        <Box
          color="primary"
          bgColor="primaryLight"
          fontWeight="500"
          px={{ lg: "0.75rem" }}
          py={{ lg: "0.4rem" }}
          borderRadius="xl"
        >
          Remote
        </Box>
        <Box
          bgColor="#F8F8F8"
          fontWeight="500"
          pl={{ lg: "0.375rem" }}
          pr={{ lg: "1.375rem" }}
          py={{ lg: "0.4rem" }}
          borderRadius="md"
        >
          $20,000/year
        </Box>
        <Box
          bgColor="#F8F8F8"
          fontWeight="500"
          px={{ lg: "2rem" }}
          py={{ lg: "0.4rem" }}
          borderRadius="md"
        >
          Full Time
        </Box>
      </Box>
      <Box
        fontStyle="italic"
        color="#5C5C5C"
        fontSize={{ lg: "0.875rem" }}
        pl={{ lg: "1.5rem" }}
        pb={{ lg: "1.5rem" }}
      >
        <Text>24 Applicants</Text>
      </Box>
      <Box
        bgColor="#F8F8F8"
        h={{ lg: "2.625rem" }}
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="#5C5C5C"
        fontSize={{ lg: "0.875rem" }}
        fontWeight="400"
        textAlign="center"
        px={{ lg: "8rem" }}
      >
        <Text>posted 2days ago</Text>
        <Divider orientation="vertical" h="100%" />
        <Text>Nigeria</Text>
      </Box>
    </Box>
  );
};

export default JobApplicationCard;
