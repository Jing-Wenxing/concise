<template>
  <div>
    <div class="part">
      <h1>Color 颜色</h1>
      <p>我们使用日常的颜色对于组件色彩和状态进行区分。</p>
    </div>
    <div class="part">
      <h2>主色</h2>
      <p>框架的主题颜色，我们大部分组件的风格色彩，将以此为基础参照。</p>
      <co-color colorname="主题" colorrgb="#3A3632"></co-color>
    </div>
    <div class="part">
      <h2>辅助色</h2>
      <p>除了常规的颜色之外，我们还提供了日常使用的颜色，用来区别不同的状态。</p>
      <div class="margin-tb-sm">
        <div class="flex">
          <co-color class="margin-right" colorname="常规" colorrgb="#409EFF"></co-color>
          <co-color class="margin-right" colorname="成功" colorrgb="#67C23A"></co-color>
          <co-color colorname="警告" colorrgb="#E6A23C"></co-color>
        </div>
      </div>
      <div class="margin-tb-sm">
        <div class="flex">
          <co-color class="margin-right" colorname="危险" colorrgb="#F56C6C"></co-color>
          <co-color colorname="信息" colorrgb="#909399"></co-color>
        </div>
      </div>
    </div>
    <div class="part">
      <h2>中性色</h2>
      <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
      <div class="margin-tb-sm">
        <div class="flex">
          <co-color class="margin-right" colorname="标题" colorrgb="#000000"></co-color>
          <co-color class="margin-right" colorname="段落" colorrgb="#666666"></co-color>
          <co-color colorname="行内" colorrgb="#666666"></co-color>
        </div>
      </div>
      <div class="margin-tb-sm">
        <div class="flex">
          <co-color class="margin-right" colorname="代码背景" colorrgb="#f3f4f4" textcolor="#000"></co-color>
          <co-color class="margin-right" colorname="代码文字" colorrgb="#ffffff" textcolor="#000" border></co-color>
          <co-color colorname="边框" colorrgb="#dfdfdf" textcolor="#000" border></co-color>
        </div>
      </div>
    </div>
    <div class="part">
      <h2>其他</h2>
      <div class="margin-tb-sm">
        <div class="flex">
          <co-color colorname="选项卡" colorrgb="#F0CC71"></co-color>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routertext: '233'
    }
  },
}
</script>

<style>
</style>