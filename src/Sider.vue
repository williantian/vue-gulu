<template>
  <transition name="slide" v-if="visible">
    <div class="sider">
     <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>
<script>
  export default {
  	name: 'GuluSider',
    data(){
  		return {
  			visible: true
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  .sider{
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }
  .slide-enter, .slide-leave-to{
  }
</style>