import { FamilyVerified } from "./FamilyVerified";
import { User } from "./User";

export interface AuthState {
  user: User | null;
  familyVerified: FamilyVerified | null;
  familyVerifiedError: string;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
}
