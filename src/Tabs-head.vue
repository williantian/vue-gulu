<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
	export default {
		name: 'GuluTabsHeader',
	}
</script>
<style scoped lang="scss">
  .tabs-header{

  }
</style>