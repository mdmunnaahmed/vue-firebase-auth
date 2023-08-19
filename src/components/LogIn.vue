<template>
  <div class="row justify-content-center">
    <div class="col-lg-3">
      <form>
        <h2 class="mb-5">Login</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
