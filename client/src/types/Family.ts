import { FamilyMember } from "./FamilyMember";
import { Transaction } from "./Transaction";

export interface Family {
  _id: string;
  name: string;
  familyMembers: FamilyMember[];
  cash: number;
  transactions: Transaction[];
  verificationKey: string;
}
