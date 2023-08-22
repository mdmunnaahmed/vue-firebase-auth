export default {
  addItem(state, payload) {
    state.items = payload;
  },
  getUser(state, payload) {
    state.user = payload;
  },
};
