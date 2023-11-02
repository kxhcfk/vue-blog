<template>
  <button class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  border: 0;
  background: none;
  padding: 10px 15px;
  color: #5b4ae1;
  box-shadow: inset 0 0 0 1px #5b4ae1;
}
</style>