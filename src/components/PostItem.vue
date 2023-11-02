<template>
  <div class="post">
    <div>
      <div><strong>{{ post.id }}</strong></div>
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        Open
      </my-button>
      <my-button
          @click="$emit('remove', post)"
      >
        Delete
      </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props: {
    post: {
      type: Object,
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.post__btns {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
</style>