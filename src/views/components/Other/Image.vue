<template>
  <div>
    <div class="part">
      <h1>Image 图片</h1>
    </div>
    <div class="part">
      <h2>基础用法</h2>
      <co-codeshow :codetext="codetext_base">
        <div slot="content">
          <div class="padding-xs flex justify-between">
            <div>
              <co-image src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg"
                fit="fill">
              </co-image>
              <div class="margin-top-xs text-175 text-center">fill</div>
            </div>
            <div>
              <co-image src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg"
                fit="contain">
              </co-image>
              <div class="margin-top-xs text-175 text-center">contain</div>
            </div>
          </div>
          <div class="padding-xs flex justify-between">
            <div>
              <co-image src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg"
                fit="cover">
              </co-image>
              <div class="margin-top-xs text-175 text-center">cover</div>
            </div>
            <div>
              <co-image src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg"
                fit="none">
              </co-image>
              <div class="margin-top-xs text-175 text-center">none</div>
            </div>
          </div>
          <div class="padding-xs flex justify-between">
            <div>
              <co-image src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg"
                fit="scale-down">
              </co-image>
              <div class="margin-top-xs text-175 text-center">scale-down</div>
            </div>
          </div>
        </div>

        <div slot="explain">
          我们使用 <em>fit</em>
          属性对图像在可视区域内的状态进行拉伸处理，并提供常用的五个状态值：<em>fill</em>、<em>contain</em>、<em>cover</em>、<em>none</em>、<em>scale-down</em>。
        </div>
      </co-codeshow>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codetext_base: '<template>\n  <div>\n    <div>\n      <co-image src="" fit="fill"></co-image>\n      <co-image src="" fit="contain"></co-image>\n      <co-image src="" fit="cover"></co-image>\n      <co-image src="" fit="none"></co-image>\n      <co-image src="" fit="scale-down"></co-image>\n  </div>\n</template>',

    }
  }
}
</script>

<style>
</style>