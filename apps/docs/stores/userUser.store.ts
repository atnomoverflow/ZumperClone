import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  getters: {
    authenticated: (state) => {
      const token = useCookie("auth._token.auth0");
      return !!token.value;
    },
  },
  actions: {
    logout() {
      const token = useCookie("auth._token.auth0");
      token.value = undefined;
      this.user = {};
    },
    async registerSocial() {},
    async socialLogin() {},
  },
});
