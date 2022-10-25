<template>
  <h1>Hello World</h1>

  <button @click="increment">Click Me!</button>
  <div>Clicked: {{ count }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

//#region Counter
const count = ref(0);
const increment = () => (count.value += 1);
//#endregion
</script>

<style scoped>
h1 {
  color: green;
}
</style>
