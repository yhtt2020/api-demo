<template>

  <a-row>
    <a-col>
      <a-menu
          id="dddddd"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          style="width: 256px;height: 100vh"
          mode="inline"
          @click="handleClick"
      >
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <template #title>tsbApi</template>
          <a-menu-item key="g1">
             <router-link :to="{path:'/api/runtime'}">runtime</router-link>
          </a-menu-item>
          <a-menu-item-group key="g2" title="window">
            <a-menu-item key="3"><router-link :to="{path:'/api/window-base'}">基本操作</router-link></a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
      </a-menu>
    </a-col>
    <a-col style="padding: 20px">
      <router-view></router-view>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'Api'
}
</script>

<style scoped>

</style>
