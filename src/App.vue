<template>
  <div>
    <h1>Likes count: <code>{{ likes }}</code></h1>
    <h1>Dislikes count: <code>{{ dislikes }}</code></h1>
    <button @click="addLike">like</button>
    <button @click="addDislike">dislike</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  }
}
</script>

<style>

</style>