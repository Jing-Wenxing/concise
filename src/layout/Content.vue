<template>
  <div>
    <div class="co-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    Clean () {
      this.text = ''
    }
  }
}
</script>

<style>
.co-content {
  padding-top: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
}
</style>