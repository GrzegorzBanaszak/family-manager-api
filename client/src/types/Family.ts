import { FamilyMember } from "./FamilyMember";
import { Transaction } from "./Transaction";

export interface Family {
  id: string;
  name: string;
  familyMembers: FamilyMember[];
  cash: number;
  transactions: Transaction[];
  verificationKey: string;
}
