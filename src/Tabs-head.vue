<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
	export default {
		name: 'GuluTabsHeader',
    props: {
			selected: {
				type: String,
        required: true,
      },
      direction:{
				type: String,
        default: 'horizontal',
        validator(value){
        	return ['horizontal','vertical'].indexOf(value) >= 0
        }
      }
    },
    created() {
			// this.$emit('update:selected')
    }
	}
</script>
<style scoped lang="scss">
  .tabs-header{

  }
</style>