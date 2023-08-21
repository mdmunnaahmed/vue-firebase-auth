export default {
  addItem(context, payload) {
    const data = {
      name: payload.name,
      mobile: payload.mobile,
      address: payload.address,
      city: payload.city,
      favs: payload.favs,
    };

    context.commit("addItem", data);
    console.log(data);
  },
};
