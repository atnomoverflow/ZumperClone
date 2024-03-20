export type MenuOptions =
  | "rentals"
  | "apartmentRentMenu"
  | "houseRentMenu"
  | "roomsRentMenu";
export type Options = {
  [key: string]: {
    name: string;
    items: Array<
      { name: string } & (
        | { menuName: string; isMenu: boolean }
        | { href: string }
      )
    >;
  };
};
export enum SocialProvider {
  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
}
export type AuthUserResponse = {
  user: {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    address: string;
  };
  token: string;
};
export type SocialNotRegisteredError = {
  message: string;
  provider: SocialProvider;
};
export type SocialAlreadyAssignedError = {
  message: string;
  provider: SocialProvider;
};

export type CredentialsTakenError = {
  message: string;
} & (
  | { providedUsername: string }
  | { providedEmail: string }
  | { providedUsername?: string; providedEmail?: string }
);
