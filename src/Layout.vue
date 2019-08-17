<template>
  <div class="layout" :class="layoutClasses">
    <slot></slot>
  </div>
</template>
<script>
	export default {
		name: 'GuluLayout',
		data() {
			return {
				layoutClasses: {
					hasSider: false
				}
			}
		},
		mounted() {
			this.$children.map(vm => {
				if (vm.$options.name === 'GuluSider') {
					this.layoutClasses.hasSider = true
				}
			})
		},
	}
</script>
<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>