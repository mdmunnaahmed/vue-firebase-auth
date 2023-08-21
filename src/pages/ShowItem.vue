<template>
  <div class="container pt-5">
    <base-card v-for="(item, index) in items" :key="index">
      <h2>{{ item.name }}</h2>
      <h3>{{ item.mobile }}</h3>
      <h6>{{ item.address }}</h6>
      <h6>{{ item.city }}</h6>
      <h6 v-for="fav in item.favs" :key="fav">{{ fav }}</h6>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
      isLoading: false,
      error: null,

      name: "",
      mobile: "",
      address: "",
      city: "",
      favs: [],
    };
  },
  computed: {
    items() {
      return this.$store.getters["item/items"];
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-size: 14px;
}
.form-group {
  margin-bottom: 15px;
}
</style>
