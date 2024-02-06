export type MenuOptions =
  | "rentals"
  | "apartmentRentMenu"
  | "houseRentMenu"
  | "roomsRentMenu";
export type Options = {
  [key: string]: {
    name:string;
    items:Array<
    { name: string } & (
      | { menuName: string; isMenu: boolean }
      | { href: string }
    )
  >};
};
