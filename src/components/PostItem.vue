<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button>Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
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
</style>