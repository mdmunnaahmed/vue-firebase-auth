export default {
  token(state) {
    return state.token;
  },
  isAuth(state) {
    return !!state.token;
  },
};
