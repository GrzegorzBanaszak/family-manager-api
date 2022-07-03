import { Family } from "./Family";

export interface FamilyState {
  family: Family | null;
  families: Family[] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
}
