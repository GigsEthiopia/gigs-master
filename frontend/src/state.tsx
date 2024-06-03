import { create } from "zustand";
import AuthService from "./services/auth/AuthService";
import User from "./types/user.type";

interface coverState {
  userState: boolean;
  currentUser: User | null;
  data: any;
  getData: () => void;
  setData: (data: any) => void;
  setCurrentUser: (user: User) => void;
  onLogout: () => void;
}

export const useCoverStore = create<coverState>()((set) => ({
  userState: false,
  currentUser: null,
  data: null,

  onLogout: () => AuthService.logout(),

  setCurrentUser(currentUser) {
    set({ currentUser });
  },
  setData(data) {
    window.localStorage.setItem("letterData", JSON.stringify(data));
    set({ data });
  },
  getData() {
    const savedData = window.localStorage.getItem("letterData");
    try {
      if (savedData && !this.data) {
        return JSON.parse(savedData);
      } else {
        return this.data;
      }
    } catch (_e) {
      console.log(_e);
    }
  },
}));
