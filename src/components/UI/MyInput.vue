<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  box-shadow: inset 0 0 0 1px #5b4ae1;
  padding: 10px 15px;
  border: 0;
}
</style>