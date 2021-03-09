<template>
  <div>
    <div class="part">
      <h1>Breadcrumb 面包屑</h1>
      <p>我们提供两种不同的面包屑模板，供本项目使用</p>
    </div>
    <div class="part">
      <h2>基础用法</h2>
      <p>通过使用 <em>shape</em> 和 <em>size</em> 来设置头像的形状和大小。</p>
      <co-codeshow :codetext="codetext_base" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <co-avatar icon="icon-wode1" class="margin-right-sm"></co-avatar>
              <co-avatar icon="icon-wode1" class="margin-right-sm" size="46"></co-avatar>
              <co-avatar icon="icon-wode1" class="margin-right-sm" size="40"></co-avatar>
              <co-avatar icon="icon-wode1" size="36"></co-avatar>
            </div>
          </div>

        </div>

        <div slot="explain">
          <span>根据设计要求，<em>shape</em> 属性提供两个状态值：<em>square</em> 和 <em>circle</em>；<em>size</em>
            属性的值我们推荐使用偶数。</span>
        </div>
      </co-codeshow>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codetext_base: '',
    }
  },
  created () {
    // console.log(this.$route)
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

  }
}
</script>

<style>
</style>