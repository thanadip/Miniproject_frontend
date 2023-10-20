<template>
  <div>
    <div class="sidebar">
      <SideBar />
    </div>
    <div
      class="d-flex justify-content-center align-items-center content flex-column"
    >
      <div class="post-area">
        <div class="fs-3 mb-5 ms-3">Posting something</div>
        <div class="fs-5 ms-2">Caption</div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control rounded-1 bg-secondary-subtle"
            v-model="caption"
            placeholder="Enter image description"
          />
        </div>
        <div class="fs-5 ms-2">Image selection</div>
        <div class="mt-2">
          <input
            class="form-control"
            type="file"
            id="formFile"
            @change="handleImageUpload"
          />
        </div>
        <div class="d-flex justify-content-end me-5 mt-5">
          <button
            class="btn btn-success sm"
            @click="uploadPost"
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
  name: "UploadView",
  components: {
    SideBar,
  },
  data() {
    return {
      caption: "",
      image: null,
    };
  },
  methods: {
    handleImageUpload(event) {
      this.image = event.target.files[0];
    },
    uploadPost() {
      // Implement the logic to upload the post (send the image and caption to the backend).
    },
  },
};
</script>
<style lang=""></style>
