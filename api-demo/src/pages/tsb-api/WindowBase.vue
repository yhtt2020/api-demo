<template>
  <h2>方法返回值：</h2>
  <a-textarea style="min-height: 200px" :value="JSON.stringify(returnValue, null, 2)"></a-textarea>
  <h2>方法</h2>
  <h3>tsbApi.window.*</h3>
  <a-button class="btn" @click="close">close</a-button>
  <a-button class="btn" @click="getBounds">getBounds</a-button>
  <a-button class="btn"  @click="maximize">maximize</a-button>
  <a-button class="btn"  @click="minimize">minimize</a-button>
  <a-button class="btn"  @click="restore">restore</a-button>
  <a-button class="btn"  @click="setFullScreen">setFullScreen</a-button>
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
    async getBounds(){
      this.returnValue=await tsbApi.window.getBounds()
    },

    close(){
      tsbApi.window.close()
    },

    restore(){
      tsbApi.window.restore()
    },
    maximize () {
      console.log(tsbApi)
      tsbApi.window.maximize()
    },
    minimize () {
      tsbApi.window.minimize()
    },
    setFullScreen(){
      this.isFullScreen=!this.isFullScreen
      tsbApi.window.setFullScreen( this.isFullScreen)
    }
  }
}
</script>

<style scoped>
.btn{
 margin-right: 10px;
}
</style>
