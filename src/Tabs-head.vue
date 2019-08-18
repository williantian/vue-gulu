<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted() {
			this.eventBus.$on('update:selected', (item,vm)=>{
				let {width, height,top, left} = vm.$el.getBoundingClientRect()
				this.$refs.line.style.width = `${width}px`
				this.$refs.line.style.left = `${left}px`
			})
		}
	}
</script>
<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-header{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 300ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
    }
  }
</style>