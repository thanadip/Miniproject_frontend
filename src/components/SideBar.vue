<template>
  <div class="bg-picc sticky-sidebar">
    <!-- Logo -->
    <div class="fs-1 logoo fw-bold">LOGO</div>

    <!-- Navigation Links -->
    <nav class="mt-4">
      <ul class="list-unstyled">
        <li class="mb-3">
          <a href="/home" class="fs-3 link-underline link-underline-opacity-0">
            <i class="bi bi-house-door"></i>&nbsp;&nbsp;&nbsp;Home
          </a>
        </li>
        <li class="mb-3">
          <a
            href="/profile"
            class="fs-3 link-underline link-underline-opacity-0"
          >
            <i class="bi bi-person h2 me-2"></i> Profile
          </a>
        </li>
        <li class="mb-3">
          <a
            href="/upload"
            class="fs-3 link-underline link-underline-opacity-0"
          >
            <i class="bi bi-cloud-upload h2 me-2"></i> Upload
          </a>
        </li>
      </ul>
    </nav>

    <!-- Log Out -->
    <div class="position-absolute bottom-0 w-100">
      <a
        href="/"
        class="fs-2 text-dark fw-bold link-underline link-underline-opacity-0 d-flex log-out"
      >
        <i class="bi bi-box-arrow-right h2 me-2"></i> Log-out
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.bg-picc {
  background-color: #afb3ff;
  height: 100vh;
  width: 17vw;
  color: black;
  flex-direction: column;
  position: fixed;
  float: left;
}
.log-out {
  margin-bottom: 40px;
  margin-left: 30px;
}
.logoo {
  padding: 20px;
  margin-left: 30px;
}
</style>
