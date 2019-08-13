<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    //props: ['icon', 'iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        //属性检查器
        validator (value){
          console.log(value);
          return value !== 'left' || value !== 'right';
        },
      }
    }
  }
</script>
<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top; /*解决左右icon的button不对齐 上下不对齐加上即可*/
    &:hover {border-color: var(--border-color-hover);}
    &:active {background-color: var(--button-active-bg);}
    &:focus{outline: none;}
    > .content {order: 2;}
    > .icon {order: 1; margin-right:0.1em;}
    &.icon-right {
      > .content {order: 1;}
      > .icon {order: 2; margin-right: 0;margin-left: 0.1em;}
    }
  }

</style>