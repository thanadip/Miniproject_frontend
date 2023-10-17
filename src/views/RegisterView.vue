<template>
  <div class="d-flex">
    <div class="bg-pic">
      <img src="../assets/1.png" class="imagebg" />
    </div>
    <div
      class="bg-body-tertiary"
      style="
        width: 475px;
        height: 700px;
        margin-left: 32vw;
        margin-top: 15vh;
        border-radius: 7px;
      "
    >
      <form class="p-5">
        <p class="text-black text-center fs-6 fw-bold">Create an Account</p>
        <div class="mb-3">
          <label for="fullName" class="form-label text-black fs-6"
            >Full Name:</label
          >
          <input type="text" class="form-control custom-border" id="fullName" />
        </div>
        <div class="mb-3">
          <label for="username" class="form-label text-black fs-6"
            >Username:</label
          >
          <input type="text" class="form-control custom-border" id="username" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-black fs-6">Email:</label>
          <input type="email" class="form-control custom-border" id="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label text-black fs-6"
            >Password:</label
          >
          <input
            type="password"
            class="form-control custom-border"
            id="password"
          />
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label text-black fs-6"
            >Confirm Password:</label
          >
          <input
            type="password"
            class="form-control custom-border"
            id="confirmPassword"
          />
        </div>
        <div class="d-grid gap-4">
          <button type="submit" class="btn btn-primary custom-button mt-4">
            Register
          </button>
        </div>
        <div class="p text-black text-center fs-6 mt-4">
          Already have an account?<a
            class="text-black fs-6 link-underline-light fw-bold"
            href="/"
            >&nbsp;Login</a
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
