<template>
  <div class="app">
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <my-button style="margin-bottom: 15px;" @click="openDialog">create post</my-button>
    <post-list
        v-if="!isPostsLoading"
        :posts="posts"
        @remove="removePost"
    />
    <div v-else>Loading</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
    }
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    openDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _limit: 10,
            }
          })
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000)
      } catch {
        alert('Error')
      } finally {

      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

</style>