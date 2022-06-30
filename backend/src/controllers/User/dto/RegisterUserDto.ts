export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  hasFamily: boolean;
  role: string;
  memberOfFamily: string | null;
}
