<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
  	name: 'GuluIcon', /*方便开发调试 name属性会在VUE开发者工具下变为其标签名称*/
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .g-icon {
   width: 1em; height: 1em;
   vertical-align: middle;
   fill: currentColor;
   overflow: hidden;
  }
</style>