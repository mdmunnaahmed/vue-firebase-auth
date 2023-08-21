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
};
