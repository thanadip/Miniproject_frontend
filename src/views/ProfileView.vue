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
            v-model="name"
          />
          <button
            class="btn btn-primary sm"
            style="
              --bs-btn-padding-y: 0.1rem;
              --bs-btn-padding-x: 0.7rem;
              --bs-btn-font-size: 0.75rem;
            "
            @click="changeName"
          >
            Change name
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
  data() {
    return {
      name: "", // Data property to store the user's name
    };
  },
  name: "ProfileView",
  components: {
    SideBar,
  },
  methods: {
    changeName() {
      if (this.name.trim() === "") {
        return;
      }

      // Send a request to update the name
      // Example using axios:
      axios
        .put("/api/user/updateName", { name: this.name }) // Adjust the API endpoint
        .then((response) => {
          // Handle the response, e.g., show a success message
          console.log("Name updated:", response.data);
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message
          console.error("Failed to update name:", error);
        });
    },
  },
};
</script>
<style lang=""></style>
