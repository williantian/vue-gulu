<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
  @click = "$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
  import Icon from "../Icon";
	export default {
    //props: ['icon', 'iconPosition']
    components: {
    	'g-icon': Icon
    },
    name:'GuluButton',
    props: {
      icon: {},
      loading: {
      	type:Boolean,
        default:false,
      },
      iconPosition: {
        type: String,
        default: 'left',
        //属性检查器
        validator (value){
          return value !== 'left' || value !== 'right';
        },
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg:#eee;
  $border-radius:4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  .g-button {font-size: $font-size;height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top; /*解决左右icon的button不对齐 上下不对齐加上即可*/
    &:hover {border-color: $border-color-hover;}
    &:active {background-color: $button-active-bg;}
    &:focus{outline: none;}
    > .content {order: 2;}
    > .icon {order: 1; margin-right:0.1em;}
    &.icon-right {
      > .content {order: 1;}
      > .icon {order: 2; margin-right: 0;margin-left: 0.1em;}
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }

</style>