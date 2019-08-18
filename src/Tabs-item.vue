<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
	export default {
		name: 'GuluTabsPane',
    props: {
			disabled:{
				type: Boolean,
        default: false,
      }
    }
	}
</script>
<style scoped lang="scss">
  .tabs-item{

  }
</style>