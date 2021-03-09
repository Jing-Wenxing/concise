<template>
  <div>
    <div class="part">
      <h1>Avatar 头像</h1>
      <p>用图标、图片或者字符的形式展示用户或事物信息。</p>
    </div>
    <div class="part">
      <v-md-editor v-model="text" height="400px"></v-md-editor>
    </div>

    <co-button @click="postMessage()">
      提交
    </co-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    let anchor = document.getElementsByTagName('h2')
    this.$emit('getmsg', anchor)
  },
  updated () {
    let anchor = document.getElementsByTagName('h2')
    this.$emit('getmsg', anchor)
  },
  methods: {
    postMessage () {
      console.log(this.text)
    }
  }
}
</script>

<style>
</style>