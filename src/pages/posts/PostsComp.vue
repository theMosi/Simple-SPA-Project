<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-6" v-for="post in posts" :key="post.id">
        <div class="card">
          <div class="card-header">
            <!-- <router-link :to="{ name: 'postId', params: { id: post.id } }">{{ -->
            {{ post.title }}
            <!-- }}</router-link> -->
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Body: {{ post.body }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPosts();

    return { posts, loading };
  },
};
</script>

<style>
</style>