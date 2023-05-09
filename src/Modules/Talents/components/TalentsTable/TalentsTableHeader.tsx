import { Th, Thead, Tr } from "@chakra-ui/react";

export const TalentsTableHeader = (): JSX.Element => {
  const tableHeaderTitle: Array<{ title: string }> = [
    {
      title: "Full Name",
    },
    {
      title: "Email Address",
    },
    {
      title: "Location",
    },
    {
      title: "Profile View",
    },
    {
      title: "Action",
    },
  ];
  return (
    <Thead
      bgColor="primary"
      h={{ lg: "4.375rem" }}
      border="0.2rem"
      borderStyle="solid"
      borderColor="primary"
    >
      <Tr>
        {tableHeaderTitle.map((tableData) => {
          return (
            <Th color="white" textTransform="capitalize" key={tableData.title}>
              {tableData.title}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
};
