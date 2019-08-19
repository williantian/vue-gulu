<template>
  <div class="popover" @click="xxx">
    <div v-if="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "GuluPopover",
    data (){
			return {
				visible: false,
      }
    },
    methods: {
			xxx(){
				this.visible = !this.visible
      }
    }
	}
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    }
  }
</style>