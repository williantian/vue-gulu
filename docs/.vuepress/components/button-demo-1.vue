<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置按钮</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button icon="download">下载按钮</g-button>
    <g-button icon="thumbs-up">点赞按钮</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
	import Button from '../../../src/button/Button'
	export default {
		components: {
			'g-button': Button
		},
		data() {
			return {
				content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">设置按钮</g-button>
          <g-button :loading="true">加载按钮</g-button>
          <g-button disabled>默认按钮</g-button>
          <g-button icon="download">下载按钮</g-button>
          <g-button icon="thumbs-up">点赞按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
			}
		}
	}
</script>