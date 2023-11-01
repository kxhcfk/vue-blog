<template>
  <div>
    <h3>User list</h3>
    <post-item
        v-for="post in posts"
        :post="post"
    />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  box-shadow: inset 0 0 0 1px #5b4ae1;
  margin-top: 15px;
}
</style>