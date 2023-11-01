<template>
  <form @submit.prevent>
    <h3>create post</h3>
    <input v-model="post.title" class="input" type="text" placeholder="title">
    <input v-model="post.body" class="input" type="text" placeholder="body">
    <button class="btn" @click="createPost">create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();

      this.$emit('create', this.post)

      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input {
  display: block;
  width: 100%;
  box-shadow: inset 0 0 0 1px #5b4ae1;
  padding: 10px 15px;
  border: 0;
}

.btn {
  border: 0;
  background: none;
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  color: #5b4ae1;
  box-shadow: inset 0 0 0 1px #5b4ae1;
}
</style>