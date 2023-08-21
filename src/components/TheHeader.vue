<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light overflow-hidden">
    <div class="container">
      <router-link class="navbar-brand" to="/"><span>Munns</span></router-link>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/additem" class="nav-link">additem</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
      <base-button v-if="!auth" link to="/login" mode="outline"
        >Login</base-button
      >
      <base-button v-if="auth" link to="/dashboard" mode="flat"
        >Dashboard</base-button
      >
      <base-button v-if="auth" @click="logout">Logout</base-button>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped lang="scss">
.navbar-brand {
  span {
    color: rgb(58, 61, 73);
    font-size: 26px;
  }
}
.router-link-exact-active {
  color: red;
}
</style>
