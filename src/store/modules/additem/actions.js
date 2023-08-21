export default {
  async addItem(context, payload) {
    const data = {
      name: payload.name,
      mobile: payload.mobile,
      address: payload.address,
      city: payload.city,
      favs: payload.favs,
    };

    const token = context.rootGetters.token;
    const userId = context.rootGetters.userId;

    const response = await fetch(
      `https://auth-munns-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=` +
        token,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    context.commit("addItem", {
      ...data,
      id: userId,
    });
  },

  async loadItems(context) {
    const token = context.rootGetters.token;
    const userId = context.rootGetters.userId;

    const response = await fetch(
      `https://auth-munns-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=` +
        token
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    const items = [];
    for (const key in responseData) {
      const item = {
        id: key,
        name: responseData[key].name,
        mobile: responseData[key].mobile,
        address: responseData[key].address,
        city: responseData[key].city,
        favs: responseData[key].favs,
      };
      items.push(item);
    }
    console.log(items);
    context.commit("addItem", items);
  },
};
