<script>
import { usePostsStore } from "@/stores/posts.store";
import { mapState } from "pinia";

export default {
  name: "AboutPage",

  data() {
    const postsStore = usePostsStore();
    return {
      postsStore,
    };
  },

  computed: {
    ...mapState(usePostsStore, {
      posts: "posts",
    }),
  },

  mounted() {
    this.postsStore.getPosts();
  },
};
</script>

<template>
  <div class="about">
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
