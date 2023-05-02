import { Th, Thead, Tr } from "@chakra-ui/react";

export const AdminTableHeader = (): JSX.Element => {
  const tableHeaderTitle: Array<{ title: string }> = [
    {
      title: "Name",
    },
    {
      title: "Permission",
    },
    {
      title: "Status",
    },
    {
      title: "Action",
    },
  ];
  return (
    <>
      <Thead bgColor="primary" h={{ lg: "4.375rem" }} border="0.2rem" borderStyle="solid" borderColor="primary">
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
    </>
  );
};
