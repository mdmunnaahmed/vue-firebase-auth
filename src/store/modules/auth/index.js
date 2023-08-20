import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  state() {
    return {
      token: null,
      userId: null,
      tokenExpiration: null,
      didAutoLogout: false,
    };
  },
  getters,
  mutations,
  actions,
};
