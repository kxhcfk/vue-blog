<template>
  <div class="app">
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <my-button style="margin-bottom: 15px;" @click="openDialog">create post</my-button>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {id: 1, title: "Title1", body: "body1"},
        {id: 2, title: "Title2", body: "body2"},
        {id: 3, title: "Title3", body: "body3"},
      ],
      dialogVisible: false,
    }
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