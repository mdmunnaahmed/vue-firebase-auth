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
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");

:root {
  // Fonts
  --heading-font: "Lato", sans-serif;
  --body-font: "Lato", sans-serif;

  //Colors
  --heading: 0 0% 10%;
  --body: 0 0% 10%;
  --border: 0 0% 90%;
  --bg-section: 0 0% 96%;

  // Base Color Shade
  --base-h: 328;
  --base-s: 94%;
  --base-l: 21%;
  --base: var(--base-h) var(--base-s) var(--base-l);

  // Accent Color Shade
  --accent-h: 260;
  --accent-s: 92%;
  --accent-l: 10%;
  --accent: var(--accent-h) var(--accent-s) var(--accent-l);

  // Light Color Shade
  --light-h: 148;
  --light-s: 0%;
  --light-l: 95%;
  --light: var(--light-h) var(--light-s) var(--light-l);

  // Fixed Colors
  --primary: 245 82% 67%;
  --secondary: 210 7% 56%;
  --success: 147 67% 47%;
  --danger: 360 78% 62%;
  --warning: 29 100% 63%;
  --info: 200 90% 53%;
  --dark: 206 70% 11%;
  --white: 0 0% 100%;
}
</style>
