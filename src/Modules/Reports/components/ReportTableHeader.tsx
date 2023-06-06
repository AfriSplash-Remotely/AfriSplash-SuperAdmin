import { Th, Thead, Tr } from "@chakra-ui/react";

const ReportTableHeader = (): JSX.Element => {
  const reportHeaderTitle: Array<{ title: string }> = [
    {
      title: "Full Name",
    },
    {
      title: "Type",
    },
    {
      title: "Resolved",
    },
    {
      title: "Location",
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
        {reportHeaderTitle.map((tableData) => {
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

export default ReportTableHeader
