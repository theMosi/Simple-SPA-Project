<template>
  <div class="container col-md-6 mt-5">
    <h2>Create Post :</h2>

    <form @submit.prevent="validate">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          v-model.lazy.trim="form.title"
        />
        <div class="form-text text-danger">
          {{ form.titleErrorText }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Body</label>
        <textarea class="form-control" v-model.lazy.trim="form.body"></textarea>
        <div class="form-text text-danger">
          {{ form.titleErrorText }}
        </div>
      </div>

      <button type="submit" class="btn btn-dark" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Create Post
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      bodyErrorText: "",
      body: "",
    });

    const loading = ref(false);

    const validate = () => {
      if (form.title === "") {
        form.titleErrorText = "Title is Required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "Body is Required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        createPost();
      }
    };

    const createPost = () => {
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post Created",
            icon: "success",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    return { form, validate, loading };
  },
};
</script>

<style>
</style>