import { createStore } from "vuex";

import authModule from "./modules/auth/index.js";
import itemModule from "./modules/additem/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    item: itemModule,
  },
});

export default store;
