<template>
  <div>
    <div class="part">
      <h1>Avatar 头像</h1>
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
    <div class="part">
      <h2>展示类型</h2>
      <p>通过使用 <em>src</em>、<em>single</em> 等关键字，你可以来控制头像具体的展示类型</p>
      <co-codeshow :codetext="codetext_classification" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <co-avatar icon="icon-wode1" class="margin-right-sm"></co-avatar>
              <co-avatar class="margin-right-sm" src="http://q1.qlogo.cn/g?b=qq&nk=511807280&s=640">12</co-avatar>
              <co-avatar class="margin-right-sm">你好</co-avatar>
              <co-avatar single>你好</co-avatar>
            </div>
          </div>

          <div class="padding-xs">
            <div class="flex align-center">
              <co-avatar icon="icon-wode1" class="margin-right-sm" shape="circle"></co-avatar>
              <co-avatar class="margin-right-sm" shape="circle" src="http://q1.qlogo.cn/g?b=qq&nk=511807280&s=640">12
              </co-avatar>
              <co-avatar class="margin-right-sm" shape="circle">你好</co-avatar>
              <co-avatar single shape="circle">你好</co-avatar>
            </div>
          </div>
        </div>

        <div slot="explain">
          <span>根据设计要求，<em>shape</em> 属性提供两个状态值：<em>square</em> 和 <em>circle</em>；<em>size</em>
            属性的值的大小我们推荐使用偶数。</span>
        </div>
      </co-codeshow>
    </div>
    <!-- <div class="part">
      <h2>参数说明</h2>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="parameter" label="参数" width="100">
        </el-table-column>
        <el-table-column prop="description" label="说明">
        </el-table-column>
        <el-table-column prop="type" label="类型" width="200">
        </el-table-column>
        <el-table-column prop="optional" label="可选值" width="200">
        </el-table-column>
        <el-table-column prop="default" label="默认值" width="150">
        </el-table-column>
      </el-table>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      codetext_base: '<template>\n  <div>\n    <co-avatar icon="icon-wode1"></co-avatar>\n    <co-avatar icon="icon-wode1" size="46"></co-avatar>\n    <co-avatar icon="icon-wode1" size="40"></co-avatar>\n    <co-avatar icon="icon-wode1" size="36"></co-avatar>\n\n    <co-avatar icon="icon-wode1" shape="circle"></co-avatar>\n    <co-avatar icon="icon-wode1" shape="circle" size="46"></co-avatar>\n    <co-avatar icon="icon-wode1" shape="circle" size="40"></co-avatar>\n    <co-avatar icon="icon-wode1" shape="circle" size="36"></co-avatar>\n  </div>\n</template>',
      codetext_classification: '<template>\n  <div>\n    <co-avatar icon="icon-wode1"></co-avatar>\n    <co-avatar src="图片地址">12</co-avatar>\n    <co-avatar>你好</co-avatar>\n    <co-avatar single>你好</co-avatar>\n    \n    <co-avatar icon="icon-wode1" shape="circle"></co-avatar>\n    <co-avatar shape="circle" src="图片地址">12</co-avatar>\n    <co-avatar shape="circle">你好</co-avatar>\n    <co-avatar shape="circle" single>你好</co-avatar>\n  </div>\n</template>',
      // tableData: [
      //   {
      //     parameter: 'shape',
      //     description: '设置头像的形状',
      //     type: 'String',
      //     optional: 'square / circle',
      //     default: 'square',
      //   },
      //   {
      //     parameter: 'size',
      //     description: '设置头像的大小',
      //     type: 'String',
      //     optional: '整数即可，属性的值我们推荐使用偶数。',
      //     default: '50',
      //   },
      //   {
      //     parameter: 'icon',
      //     description: '设置头像的图标',
      //     type: 'String',
      //     optional: '参考[Icon 图标]页面',
      //     default: '无',
      //   },
      //   {
      //     parameter: 'src',
      //     description: '设置头像的图片',
      //     type: 'String',
      //     optional: '图片链接',
      //     default: '无',
      //   },
      //   {
      //     parameter: 'single',
      //     description: '设置头像的文字处理方式',
      //     type: 'Boolean',
      //     optional: 'true / false',
      //     default: 'false',
      //   }
      // ]
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
}
</script>

<style>
</style>