import { defineStore } from "pinia";

type RentingTypes = "home" | "apartment" | "room";
export const useFilterParmStore = defineStore("filterParams", {
  state: () => ({
    isLongDuration: false,
    type: "home" as RentingTypes,
    place: "",
    selectedBedrooms: [] as Array<number>,
    selectedBathrooms: [] as Array<number>,
    types: [],
    pets: [],
    deals: [],
    budget: 0,
    rating: {},
  }),
  getters: {},
  actions: {
    selectBedrooms(index: number) {
      selectRange(index, this.selectedBedrooms);
    },
    selectBathrooms(index: number) {
      selectRange(index, this.selectedBathrooms);
    },
  },
});
