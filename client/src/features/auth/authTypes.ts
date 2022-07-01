import { User } from "../../types/UserInterface";

export interface AuthState {
  user: User | null;
  token: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
}

export interface LoginData {
  email: string;
  password: string;
}
