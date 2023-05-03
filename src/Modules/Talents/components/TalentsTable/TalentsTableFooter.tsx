import { Box, Button } from "@chakra-ui/react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const buttonStyle = {
  variant: "outline",
  color: "#292D32",
  borderColor: "#D9DEDC",
  borderRadius: "md",
  bgColor: "white",
  size: "sm",
};

export const TalentsTableFooter = (): JSX.Element => {
  return (
    <>
      <Box
        pb=".75rem"
        pt="1rem"
        display="flex"
        alignContent="center"
        justifyContent={{ lg: "center" }}
        gap=".7rem"
        w={{ base: "40rem", lg: "100%" }}
        pl={{ base: "1.7rem" }}
      >
        <Button
          {...buttonStyle}
          px={{ base: "1rem", md: "1.5rem", lg: "1.8rem" }}
        >
          FIRST
        </Button>
        <Button
          {...buttonStyle}
          pr={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}
          pl={{ base: ".8rem", md: "1rem", lg: "1rem" }}
          leftIcon={<BsCaretLeftFill />}
        >
          PREV
        </Button>
        <Button {...buttonStyle}>1</Button>
        <Button {...buttonStyle}>2</Button>
        <Button {...buttonStyle}>3</Button>
        <Button {...buttonStyle}>4</Button>
        <Button {...buttonStyle}>5</Button>
        <Button
          {...buttonStyle}
          pl={{ base: "1rem", md: "1.2rem", lg: "1.4rem" }}
          pr={{ base: ".8rem", md: "1rem", lg: "1rem" }}
          rightIcon={<BsCaretRightFill />}
        >
          NEXT
        </Button>
        <Button
          {...buttonStyle}
          px={{ base: "1rem", md: "1.5rem", lg: "1.8rem" }}
        >
          LAST
        </Button>
      </Box>
    </>
  );
};
