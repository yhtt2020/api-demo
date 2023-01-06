<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
<p>
  欢迎使用ApiDemo，通过此轻应用，您将掌握常见的API使用方法，可通过此轻应用进行简易测试。

</p>
  <p>
    <router-link :to="{path:'/api'}"><a-button size="large"  type="primary">进入Demo</a-button></router-link>
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
