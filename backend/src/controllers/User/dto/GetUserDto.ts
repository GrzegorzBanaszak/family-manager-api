export interface GetUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  familyId?: string;
  token: string;
}
