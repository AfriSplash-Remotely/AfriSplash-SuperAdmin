export interface ITalentsTableResponsePayload {
  name: string;
  email: string;
  location: string;
  profile: number;
}

export interface TalentsTableBodyProps {
  item: ITalentsTableResponsePayload;
  sendEmailModal: () => void;
  openUserDetails: () => void;
}
