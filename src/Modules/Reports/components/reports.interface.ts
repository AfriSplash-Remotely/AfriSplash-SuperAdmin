
export interface IreportsResponsePayload {
  name: string;
  email: string;
  location: string;
  profile: number;
}

export interface ReportTableProps {
  item: IreportsResponsePayload;
  reportModal: () => void;
}

export interface ReportTableInfo {
  FullName: string;
  Type: string;
  Resolved: string;
  Location: string;
}

export interface ReportTableBodyProps {
  item: ReportTableInfo; 
  onOpen: () => void
}