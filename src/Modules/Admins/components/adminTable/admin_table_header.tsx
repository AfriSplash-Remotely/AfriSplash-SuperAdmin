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
      <Thead bgColor="primary" h={{ lg: "4.375rem" }}>
        <Tr>
          {tableHeaderTitle.map((t) => {
            return (
              <Th color="white" textTransform="capitalize" key={t.title}>
                {t.title}
              </Th>
            );
          })}
        </Tr>
      </Thead>
    </>
  );
};
