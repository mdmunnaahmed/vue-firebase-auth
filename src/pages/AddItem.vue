<template>
  <div class="container pt-5">
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="">Full Name <span class="text--danger">*</span></label>
          <input class="form-control" type="text" v-model.trim="name" />
        </div>
        <div class="form-group">
          <label for=""
            >Mobile Number <span class="text--danger">*</span></label
          >
          <input
            class="form-control"
            type="tel"
            v-model.number.trim="mobile"
          />
        </div>
        <div class="form-group">
          <label for="">Address <span class="text--danger">*</span></label>
          <input class="form-control" type="text" v-model.trim="address" />
        </div>
        <div class="form-group">
          <label for="">City <span class="text--danger">*</span></label>
          <input class="form-control" type="text" v-model.trim="city" />
        </div>
        <label for="">Fav is Optional</label>
        <div class="form-group form-check mb-2">
          <label class="form-check-label" for="Football">Football</label>
          <input
            class="form-check-input"
            type="checkbox"
            id="Football"
            @change="updateItem"
          />
        </div>
        <div class="form-group form-check mb-2">
          <label class="form-check-label" for="Cricket">Cricket</label>
          <input
            class="form-check-input"
            type="checkbox"
            id="Cricket"
            @change="updateItem"
          />
        </div>
        <div class="form-group form-check mb-2">
          <label class="form-check-label" for="Baseball">Baseball</label>
          <input
            class="form-check-input"
            type="checkbox"
            id="Baseball"
            @change="updateItem"
          />
        </div>
        <base-button class="mt-3">Add Item</base-button>
      </form>
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
  methods: {
    async submitForm() {
      if (
        this.name == "" ||
        this.mobile == "" ||
        this.address == "" ||
        this.city == ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("item/addItem", {
          name: this.name,
          mobile: this.mobile,
          address: this.address,
          city: this.city,
          favs: this.favs,
        });
      } catch (err) {
        this.error = err.message || "Failded to add item";
      }
      this.isLoading = false;
      this.formIsValid = true;
      this.$router.push('/showitem');
    },
    updateItem(event) {
      const item = event.target.id.toLowerCase();
      if (this.favs.includes(item)) {
        this.favs.pop(item);
        return;
      } else {
        this.favs.push(item);
        return;
      }
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
