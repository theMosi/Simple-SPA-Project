<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-6">
        <div class="card">
          <div class="card-header">
            {{ post.title }}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Body: {{ post.body }}</li>
          </ul>
          <div class="card-footer">
            <button @click="deletePost" class="btn btn-sm btn-danger me-4">
              Delete
            </button>
            <router-link
              class="btn btn-sm btn-dark"
              :to="{ name: 'editPost', params: { id: post.id } }"
              >Edit</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const deletePost = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
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

    getPost();

    return { post, loading, deletePost, route };
  },
};
</script>

<style>
</style>