export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.expiresIn;
  },
  didAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
