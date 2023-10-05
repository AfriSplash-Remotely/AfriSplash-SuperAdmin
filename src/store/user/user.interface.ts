export interface IUser {
  auth_id: string,
  user_type: string,
  first_name: string,
  last_name: string,
  gender: string,
  email: string,
}


export interface UserState {
  user: IUser;
  handleSaveUser: (formData: Partial<IUser>) => void;
}
