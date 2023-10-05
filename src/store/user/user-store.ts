// src/stores/theme-store.ts
import { create } from "zustand";
import { IUser, UserState } from "./user.interface";

const useUserState = create<UserState>()((set) => ({
  signupStage: 1,
  user: {
    auth_id: "",
    user_type: "",
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
  },


  handleSaveUser: (formData: Partial<IUser>) =>
    set((state) => ({ user: { ...state.user, ...formData } }))
}));

export default useUserState;
