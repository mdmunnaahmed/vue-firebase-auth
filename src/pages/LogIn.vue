<template>
  <div class="container">
    <div class="row justify-content-center py-5">
      <div class="col-lg-5">
        <form @submit.prevent="submitForm">
          <h2 class="mb-5">Login</h2>
          <div class="form-group" :class="emailIsEmpty ? 'invalid' : ''">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter email"
              v-model.trim="email"
              @blur="emailValidate"
            />
            <small v-if="emailNotValid" class="text-secondary"
              >email should includes
              <span class="text-primary fw-bold">'@'</span></small
            >
          </div>
          <div class="form-group" :class="passIsEmpty ? 'invalid' : ''">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model.trim="password"
              @blur="passValidate"
            />
            <small v-if="passIsShort" class="text-danger"
              >password should not be less than 6 char</small
            >
          </div>
          <p class="text-danger" v-if="error">{{ error }}</p>
          <base-spinner v-if="isLoading"></base-spinner>
          <button class="btn btn-primary mt-0">
            {{ isLoading ? "loging in account" : "Login" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      isLoading: false,
      error: null,

      // Additional Validation
      passIsShort: false,
      passIsEmpty: false,
      emailNotValid: false,
      emailIsEmpty: false,
    };
  },
  computed: {
    userData() {
      return this.$store.getters.token;
    },
  },
  methods: {
    async submitForm() {
      if (
        this.email == "" ||
        this.password == "" ||
        this.password.length < 6 ||
        !this.email.includes("@")
      ) {
        this.formIsValid = false;
        this.emailValidate();
        this.passValidate();
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/dashboard");
      } catch (err) {
        this.error = err.message || "Failed to login, Try again.";
      }
      this.formIsValid = true;
      this.isLoading = false;
    },

    emailValidate() {
      if (!this.email.includes("@") && this.email != "") {
        this.emailNotValid = true;
      } else {
        this.emailNotValid = false;
      }
      if (this.email == "") {
        this.emailIsEmpty = true;
      } else {
        this.emailIsEmpty = false;
      }
    },
    passValidate() {
      if (this.password.length < 6 && this.password != "") {
        this.passIsShort = true;
      } else {
        this.passIsShort = false;
      }
      if (this.password == "") {
        this.passIsEmpty = true;
      } else {
        this.passIsEmpty = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.invalid {
  input {
    border-color: red;
  }
}
label {
  margin-bottom: 10px;
  display: block;
  text-align: left;
  font-size: 14px;
}
input::placeholder {
  color: rgb(151, 151, 151);
}
.form-group {
  margin-bottom: 25px;
}
</style>
