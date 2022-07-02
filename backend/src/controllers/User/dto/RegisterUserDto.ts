export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  hasFamily: boolean;
  memberOfFamily: string | null;
  verificationKey: string | null;
}
