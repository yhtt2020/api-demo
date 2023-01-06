<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="../assets/logo128.png" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="想天浏览器 + 轻应用" />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components:{
    HelloWorld
  }
}
</script>
<style scoped>
.logo {
  height: 8em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
