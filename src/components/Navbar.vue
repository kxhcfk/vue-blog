<template>
  <div class="navbar">
    <my-button @click="$router.push('/posts')">
      Posts
    </my-button>
    <my-button @click="$router.push('/about')">
      About
    </my-button>
    <my-button @click="$router.push('/')">
      Main
    </my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style scoped>
.navbar {
  padding: 10px 16px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  box-shadow: 2px 2px 8px 0 darkgray;
}
</style>