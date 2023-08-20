<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(oldValue, newVal) {
      if (newVal && newVal != oldValue) {
        this.$router.replace("/");
      }
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
};
</script>

<style lang="scss">
a {
  color: red;
}
</style>
