<template>
  <div>
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="p-5 text-center">
      <div
        class="bg-white d-inline-block w-25 rounded border border-light-subtle"
      >
        <div class="d-flex align-items-start p-3">
          <img
            src="../images/stare.jpg"
            class="rounded-circle propic border border-dark-subtle"
          />
          <div class="ms-2">
            <p class="mb-0 fw-med">Username</p>
          </div>
        </div>
        <div class="d-flex align-items-start ms-3 mb-3 fw-medium">
          This is me BTW XD.
        </div>
        <div>
          <img
            src="../images/gayge.jpg"
            class="post-image rounded border border-light-subtle"
          />
        </div>
        <button
          type="button"
          class="btn btn-outline-secondary border rounded-1 mt-1 mb-1"
          style="
            --bs-btn-padding-y: 0.1rem;
            --bs-btn-padding-x: 2.25rem;
            --bs-btn-font-size: 0.75rem;
          "
        >
          Comment
        </button>

        <div class="d-flex">
          <div class="p-2 ms-3">
            <div>
              <span class="fw-med">Commenter1</span>
              This is the first comment.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sidebar {
  width: 17%;
  height: 100vh;
  color: black;
  float: left;
}

.post-image {
  max-height: 450px;
  max-width: 425px;
}

.content {
  width: 83%;
  height: 100vh;
  color: black;
  float: left;
}

body {
  background-color: white;
}

.propic {
  width: 42px;
}

.fw-med {
  font-weight: 600;
}
</style>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "HomeView",
  components: {
    SideBar,
  },
};
</script>
