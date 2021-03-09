<template>
  <div>
    <div class="part">
      <h1>Progress 进度条</h1>
      <p>我们使用 <a href="https://xrkffgg.js.cool/Knotes/course/k-progress.html">k-progress</a> 来提供更好的服务。</p>
    </div>
    <div class="part">
      <h2>基础用法</h2>
      <p>可设置不同的 <em>status</em>、<em>border</em>、<em>color</em>、<em>bg-color</em> 展示不同的颜色效果</p>
      <co-codeshow :codetext="codetext_base" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <k-progress :percent="10"></k-progress>
            <k-progress :percent="20" status="success"></k-progress>
            <k-progress :percent="30" status="warning" :border="false"></k-progress>
            <k-progress :percent="40" status="error"></k-progress>
            <k-progress :percent="50" color="#9254de"></k-progress>
            <k-progress :percent="60" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :border="false">
            </k-progress>
            <k-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be"></k-progress>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>不同类型</h2>
      <p>可设置 <em>lump</em> 类型，同时支持宽度和颜色设置</p>
      <co-codeshow :codetext="codetext_lump" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <k-progress :percent="20"></k-progress>
            <k-progress :percent="40" status="success" type="lump"></k-progress>
            <k-progress :percent="60" status="warning" type="lump" active :border="false"></k-progress>
            <k-progress :percent="80" :color="['#40a9ff', '#5cdbd3']" type="lump" :cut-width="2" cut-color="#389e0d">
            </k-progress>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>高度设置</h2>
      <p>可设置不同的 <em>line-height</em> 展示不同的尺寸，默认为 <em>6</em></p>
      <co-codeshow :codetext="codetext_height" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <k-progress :percent="10"></k-progress>
            <k-progress :percent="20" status="success" :line-height="8"></k-progress>
            <k-progress :percent="30" status="warning" :line-height="10"></k-progress>
            <k-progress :percent="40" status="error" :line-height="12"></k-progress>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>文字设置</h2>
      <p>可通过 <em>show-text</em> 设置是否显示文字，可 <em>format</em> 自定义文字显示</p>
      <co-codeshow :codetext="codetext_text" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <k-progress :percent="50"></k-progress>
            <k-progress :percent="60" status="success" :show-text="false"></k-progress>
            <k-progress :percent="80" status="warning" :format="format"></k-progress>
            <k-progress :percent="100" status="error" :format="format"></k-progress>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>动效设置</h2>
      <p>可通过 <em>active</em>、<em>active-color</em>、<em>color-flow</em> 来设置进度条动态效果</p>
      <co-codeshow :codetext="codetext_active" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <k-progress :percent="40" active></k-progress>
            <k-progress :percent="60" active active-color="#f12711"></k-progress>
            <k-progress :percent="80" active :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']">
            </k-progress>
            <k-progress :percent="100" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']"
              :color-flow="true"></k-progress>
          </div>
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
      codetext_base: '<template>\n  <div>\n    <k-progress :percent="10"></k-progress>\n    <k-progress :percent="20" status="success"></k-progress>\n    <k-progress :percent="30" status="warning" :border="false"></k-progress>\n    <k-progress :percent="40" status="error"></k-progress>\n    <k-progress :percent="50" color="#9254de"></k-progress>\n    <k-progress :percent="60" :color="[\'#f5af19\', \'#f12711\', \'#9254de\', \'#40a9ff\', \'#5cdbd3\']" :border="false"></k-progress>\n    <k-progress :percent="70" :color="[\'#40a9ff\', \'#5cdbd3\']" bg-color="#d9f7be"></k-progress>\n    <k-progress :percent="percent" :color="getColor"></k-progress>\n  </div>\n</template>',
      codetext_lump: '<template>\n  <div>\n    <k-progress :percent="20" ></k-progress>\n    <k-progress :percent="40" status="success" type="lump" ></k-progress>\n    <k-progress :percent="60" status="warning" type="lump" active :border="false" ></k-progress>\n    <k-progress :percent="80" :color="[\'#40a9ff\', \'#5cdbd3\']" type="lump"\n    :cut-width="2" cut-color="#389e0d"></k-progress>\n  </div>\n</template>',
      codetext_height: '<template>\n  <div>\n    <k-progress :percent="10" ></k-progress>\n    <k-progress :percent="20" status="success" :line-height="8"></k-progress>\n    <k-progress :percent="30" status="warning" :line-height="10"></k-progress>\n    <k-progress :percent="40" status="error" :line-height="12"></k-progress>\n  </div>\n</template>',
      codetext_text: '<template>\n  <div>\n    <k-progress :percent="50" ></k-progress>\n    <k-progress :percent="60" status="success" :show-text="false" ></k-progress>\n    <k-progress :percent="80" status="warning" :format="format"></k-progress>\n    <k-progress :percent="100" status="error" :format="format"></k-progress>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      format(percent) {\n        if(percent == 100){\n          return \' ^ _ ^ \'\n        }\n        return \'QAQ\'\n      }\n    },\n  }\n<\/script>',
      codetext_active: '<template>\n  <div>\n    <k-progress :percent="40" active></k-progress>\n    <k-progress :percent="60" active active-color="#f12711"></k-progress>\n    <k-progress :percent="80" active :color="[\'#f5af19\', \'#f12711\', \'#9254de\', \'#40a9ff\', \'#5cdbd3\']">\n    </k-progress>\n    <k-progress :percent="100" :color="[\'#f5af19\', \'#f12711\', \'#9254de\', \'#40a9ff\', \'#5cdbd3\']"\n    :color-flow="true"></k-progress>\n  </div>\n</template>',
      // tableData: [
      //   {
      //     parameter: 'percent',
      //     description: '进度条百分比（必填）',
      //     type: 'Number',
      //     optional: '0 ~ 100',
      //     default: '0',
      //   },
      //   {
      //     parameter: 'line-height',
      //     description: '进度条高度',
      //     type: 'Number',
      //     optional: '无',
      //     default: '6',
      //   },
      //   {
      //     parameter: 'type',
      //     description: '进度条类型',
      //     type: 'String',
      //     optional: 'line / lump',
      //     default: 'line',
      //   },
      //   {
      //     parameter: 'status',
      //     description: '设置头像的形状',
      //     type: 'String',
      //     optional: '	success / warning / error',
      //     default: '无',
      //   },
      //   {
      //     parameter: 'color',
      //     description: '进度条颜色；当使用Array时，限制个数为 6；当使用 Function 时，参数为 percent',
      //     type: 'String / Array / Function',
      //     optional: '无',
      //     default: '无',
      //   },
      //   {
      //     parameter: 'color-flow',
      //     description: '是否开启颜色流动',
      //     type: 'Boolean',
      //     optional: '无',
      //     default: 'false',
      //   },
      //   {
      //     parameter: 'flow-second',
      //     description: '流动所需时间，即时间越小，速度越快',
      //     type: 'Number',
      //     optional: '1 ~ 6',
      //     default: '5',
      //   },
      //   {
      //     parameter: 'bg-color',
      //     description: '进度条背景颜色',
      //     type: 'String',
      //     optional: '颜色代码',
      //     default: '#ebeef5',
      //   },
      //   {
      //     parameter: 'border',
      //     description: '是否圆弧',
      //     type: 'Boolean',
      //     optional: '无',
      //     default: 'true',
      //   },
      //   {
      //     parameter: 'show-text',
      //     description: '是否显示进度条文字',
      //     type: 'Boolean',
      //     optional: '无',
      //     default: 'true',
      //   },
      //   {
      //     parameter: 'format',
      //     description: '自定义文字显示，参数为 percent',
      //     type: 'Function',
      //     optional: '无',
      //     default: '无',
      //   },
      //   {
      //     parameter: 'cut-width',
      //     description: 'lump 宽度',
      //     type: 'Number',
      //     optional: '无',
      //     default: '1',
      //   },
      //   {
      //     parameter: 'cut-color',
      //     description: 'lump 颜色',
      //     type: 'String',
      //     optional: '颜色代码',
      //     default: '#ebeef5',
      //   },
      //   {
      //     parameter: 'active',
      //     description: '是否开启动效',
      //     type: 'Boolean',
      //     optional: '无',
      //     default: 'false',
      //   },
      //   {
      //     parameter: 'active-color',
      //     description: '动效颜色',
      //     type: 'String',
      //     optional: '无',
      //     default: '无',
      //   },
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
  methods: {
    format (percent) {
      if (percent == 100) {
        return '^_^'
      }
      return 'QAQ'
    }
  },
}
</script>

<style>
</style>