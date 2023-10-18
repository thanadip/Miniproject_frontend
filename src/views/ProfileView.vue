<template>
  <div>
    <div class="sidebar">
      <SideBar />
    </div>
    <div
      class="d-flex justify-content-center align-items-center content flex-column"
    >
      <div class="post-area">
        <div class="fs-3 mb-5 ms-3">Profile</div>
        <div class="fs-5 ms-2">Name</div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="d-flex-inline form-control rounded-1 bg-secondary-subtle"
            placeholder="Enter name to edit"
          />
          <button
            class="btn btn-primary sm"
            style="
              --bs-btn-padding-y: 0.1rem;
              --bs-btn-padding-x: 0.7rem;
              --bs-btn-font-size: 0.75rem;
            "
          >
            change name
          </button>
        </div>
        <div class="fs-5 ms-2">Change profile image</div>
        <div class="mt-2">
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="d-flex justify-content-end me-5 mt-5">
          <button
            class="btn btn-success sm"
            style="
              --bs-btn-padding-y: 0.1rem;
              --bs-btn-padding-x: 0.7rem;
              --bs-btn-font-size: 0.75rem;
            "
          >
            Upload
          </button>
          <button
            class="btn btn-danger ms-3 sm"
            style="
              --bs-btn-padding-y: 0.1rem;
              --bs-btn-padding-x: 0.7rem;
              --bs-btn-font-size: 0.75rem;
            "
          >
            Cancel
          </button>
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

.post-area {
  width: 23vw;
}

body {
  /* background-color: grey; */
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
  name: "ProfileView",
  components: {
    SideBar,
  },
};
</script>
<style lang=""></style>
