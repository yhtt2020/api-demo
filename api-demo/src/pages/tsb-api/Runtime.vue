<template>
  <h2>方法返回值：</h2>
  <a-textarea style="min-height: 200px" :value="JSON.stringify(returnValue, null, 2)"></a-textarea>
  <h2>方法</h2>
  <h3>tsbApi.runtime.*</h3>
  <a-button class="btn" @click="version">version</a-button>
  <a-button class="btn" @click="clientId">clientId</a-button>
  <a-button class="btn" @click="clientName">clientName</a-button>
</template>

<script>
export default {
  name: 'WindowBase',
  data(){
    return {
      returnValue:'',
      isFullScreen:false,
    }
  },
  methods: {
    version(){
      this.returnValue=tsbApi.runtime.version
    },
    clientId(){
      this.returnValue=tsbApi.runtime.clientId
    },
    clientName() {
      this.returnValue = tsbApi.runtime.clientName
    }
  }
}
</script>

<style scoped>
.btn{
 margin-right: 10px;
}
</style>
