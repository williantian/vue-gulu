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
				if (this.$refs.contentWrapper &&
					(this.$refs.contentWrapper === e.target ||
						this.$refs.contentWrapper.contains(e.target))) {return}
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
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>