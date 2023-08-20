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
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
      <router-link
        v-if="auth"
        to="/dashboard"
        class="btn btn-secondary text-white"
        >Dashboard</router-link
      >
      <button v-if="auth" class="px-3" @click="logout">Logout</button>
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
    font-size: 22px;
  }
}
.router-link-exact-active {
  color: red;
}
</style>
