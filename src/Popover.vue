<template>
  <div class="popover" @click="onClick">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
	export default {
		name: "GuluPopover",
		data() {
			return {
				visible: false,
			}
		},
		methods: {
			positionContent() {
				document.body.appendChild(this.$refs.contentWrapper);
				let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
				this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
				this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
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
    transform: translateY(-100%);
    margin-top: -10px;
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
</style>