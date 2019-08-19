<template>
  <div class="popover" @click="onClick">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper"
         :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
	export default {
		name: "GuluPopover",
    props: {
			position: {
				type:String,
        default: 'top',
        validator(value){
        	return ['top','bottom','left','right'].indexOf(value) >= 0
        }
      }
    },
		data() {
			return {
				visible: false,
			}
		},
		methods: {
			positionContent() {
				const {contentWrapper,triggerWrapper} = this.$refs
				document.body.appendChild(contentWrapper);
				let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        if(this.position === 'top'){
					contentWrapper.style.left = left + window.scrollX + 'px'
					contentWrapper.style.top = top + window.scrollY + 'px'
        }else if(this.position === 'bottom'){
					contentWrapper.style.left = left + window.scrollX + 'px'
					contentWrapper.style.top = top + height + window.scrollY + 'px'
        } else if (this.position === 'left') {
					contentWrapper.style.left = left + window.scrollX + 'px'
					contentWrapper.style.top = top + window.scrollY + 'px'
          let {height: height2}=contentWrapper.getBoundingClientRect()
					console.log((height - height2) / 2)
          contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 +'px'
        } else if(this.position === 'right'){
					contentWrapper.style.left = left+ width + window.scrollX + 'px'
					contentWrapper.style.top = top + window.scrollY + 'px'
					let {height: height2}=contentWrapper.getBoundingClientRect()
					console.log((height - height2) / 2)
					contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 +'px'
        }

			},
			onClickDocument(e) {
				if (this.$refs.popover &&
					(this.$refs.popover === e.target ||
						this.$refs.popover.contains(e.target))) {return}
				if(this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
            this.$refs.contentWrapper.contains(e.target))){return}
				this.close()
			},
			open() {
				this.visible = true
				//用this.$nextTick 时好时坏
				setTimeout(() => {
					this.positionContent()
					document.addEventListener('click', this.onClickDocument)
				})
			},
			close() {
				this.visible = false
				document.removeEventListener('click', this.onClickDocument)
			},
			onClick(event) {
				if (this.$refs.triggerWrapper.contains(event.target)) {
					this.visible = !this.visible;
					if (this.visible === true) {
						this.open()
					} else {
						this.close()
					}
				}
			}
		},
		mounted() {
		},
	}
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    /*box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);*/
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;/*英文网站最好不要加*/
    &::before, &::after {
      content: '';
      display: block;
      position: absolute;
      border: 10px solid transparent;
      width: 0;
      height: 0;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: black;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: black;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }

  }
</style>