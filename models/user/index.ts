export interface LoginFormProps {
  email: string;
  password: string;
}
export interface UserProps {
  userId: number | null | undefined;
  email: string;
  password: string;
  passwordConfirm: string;
  profileId: string;
  fullName: string;
  birth: string;
  phoneNum: string | null | undefined;
  favorGenre: GenreState[];
  createdAt: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  activState: string | null | undefined;
}

export type GenreState = "A" | "R" | "H";
// Action, Romance, History
type GenderState = "M" | "W";
