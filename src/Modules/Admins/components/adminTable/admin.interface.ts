export interface IAdminTableResponsePayload {
  name: string;
  permission: string;
  status: string;
}

export interface AdminTableBodyProps {
  item: IAdminTableResponsePayload;
}
