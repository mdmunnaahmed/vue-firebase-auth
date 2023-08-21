<template>
  <div class="container pt-5">
    <base-card v-for="(item, index) in items" :key="index">
      <h3>{{ item.name }}</h3>
      <h6>{{ item.mobile }}</h6>
      <p>{{ item.address }}</p>
      <p>{{ item.city }}</p>
      <li v-for="fav in item.favs" :key="fav">{{ fav }}</li>
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
  created() {
    this.$store.dispatch("item/loadItems");
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
