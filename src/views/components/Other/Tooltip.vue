<template>
  <div>
    <div class="part">
      <h1>Tooltip 文字提示</h1>
      <p>用图标、图片或者字符的形式展示用户或事物信息。</p>
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

          <div class="padding-xs">
            <div class="flex align-center">
              <co-avatar icon="icon-wode1" class="margin-right-sm" shape="circle"></co-avatar>
              <co-avatar icon="icon-wode1" class="margin-right-sm" shape="circle" size="46"></co-avatar>
              <co-avatar icon="icon-wode1" class="margin-right-sm" shape="circle" size="40"></co-avatar>
              <co-avatar icon="icon-wode1" shape="circle" size="36"></co-avatar>
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
      codetext_base: '<template>\n  <div>\n    <co-avatar icon="icon-wode1"></co-avatar>\n    <co-avatar icon="icon-wode1" size="46"></co-avatar>\n    <co-avatar icon="icon-wode1" size="40"></co-avatar>\n    <co-avatar icon="icon-wode1" size="36"></co-avatar>\n\n    <co-avatar icon="icon-wode1" shape="circle"></co-avatar>\n    <co-avatar icon="icon-wode1" shape="circle" size="46"></co-avatar>\n    <co-avatar icon="icon-wode1" shape="circle" size="40"></co-avatar>\n    <co-avatar icon="icon-wode1" shape="circle" size="36"></co-avatar>\n  </div>\n</template>',
      codetext_classification: '<template>\n  <div>\n    <co-avatar icon="icon-wode1"></co-avatar>\n    <co-avatar src="图片地址">12</co-avatar>\n    <co-avatar>你好</co-avatar>\n    <co-avatar single>你好</co-avatar>\n    \n    <co-avatar icon="icon-wode1" shape="circle"></co-avatar>\n    <co-avatar shape="circle" src="图片地址">12</co-avatar>\n    <co-avatar shape="circle">你好</co-avatar>\n    <co-avatar shape="circle" single>你好</co-avatar>\n  </div>\n</template>',
    }
  },
}
</script>

<style>
</style>