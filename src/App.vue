<template>
  <div class="app">
    <form @submit.prevent>
      <h3>create post</h3>
      <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="title">
      <input v-bind:value="body" @input="body = $event.target.value" class="input" type="text" placeholder="body">
      <button class="btn" @click="createPost">create</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: "Title1", body: "body1"},
        {id: 2, title: "Title2", body: "body2"},
        {id: 3, title: "Title3", body: "body3"},
      ],
      title: '',
      body: '',
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }

      this.posts.push(newPost);

      this.title = '';
      this.body = '';
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

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.post {
  padding: 15px;
  box-shadow: inset 0 0 0 1px #5b4ae1;
  margin-top: 15px;
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