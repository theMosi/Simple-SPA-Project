<template>
  <div class="container col-md-6 mt-5">
    <h2>Edit Post :</h2>

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
        <textarea
          class="form-control"
          rows="6"
          v-model.lazy.trim="form.body"
        ></textarea>
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
        Edit Post
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      bodyErrorText: "",
      body: "",
    });

    const loading = ref(false);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          form.title = response.data.title;
          form.body = response.data.body;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

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
        editPost();
      }
    };

    const editPost = () => {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post Updated",
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