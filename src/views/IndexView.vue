<template>
  <div class="d-flex">
    <div class="bg-pic">
      <img src="../assets/1.png" class="imagebg" />
    </div>
    <div
      class="bg-body-tertiary"
      style="
        width: 475px;
        height: 475px;
        margin-left: 32vw;
        margin-top: 31vh;
        border-radius: 7px;
      "
    >
      <form class="p-5">
        <p class="text-black text-center fs-6 fw-bold">Welcome Back!</p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label text-black fs-6"
            >Username:</label
          >
          <input
            type="text"
            class="form-control custom-border"
            id="exampleInputEmail1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label text-black fs-6"
            >Password:</label
          >
          <input
            type="password"
            class="form-control custom-border"
            id="exampleInputPassword1"
          />
          <!-- #656ED3 -->
        </div>
        <div class="d-grid gap-4">
          <button type="submit" class="btn btn-primary custom-button mt-4">
            Login
          </button>
        </div>
        <div class="p text-black text-center fs-6 mt-4">
          Don't have an account?<a
            class="text-black fs-6 link-underline-light fw-bold"
            href="/register"
            >&nbsp;Register</a
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.bg-pic {
  background-color: #afb3ff;
  height: 100vh;
  width: 33vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.imagebg {
  margin: auto;
  display: block;
  height: 616px;
  border-radius: 7px;
}
.custom-button {
  background-color: #656ed3;
  border: #5058af;
}
.custom-border {
  border-color: #656ed3;
  border-radius: 9px;
}
</style>
