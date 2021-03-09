<template>
  <div>
    <div class="part">
      <h1>Tag 标签</h1>
      <p>用于标记和选择。</p>
    </div>
    <div class="part">
      <h2>基础用法</h2>
      <co-codeshow :codetext="codetext_base" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex">
              <co-tag class="margin-right-sm" type="theme">标签一</co-tag>
              <co-tag class="margin-right-sm" type="primary">标签二</co-tag>
              <co-tag class="margin-right-sm" type="success">标签三</co-tag>
              <co-tag class="margin-right-sm" type="warning">标签四</co-tag>
              <co-tag class="margin-right-sm" type="danger">标签五</co-tag>
              <co-tag type="info">标签六</co-tag>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>不同模式</h2>
      <p>Tag 组件提供了三个不同的主题：<em>dark</em>、<em>light</em> 和 <em>plain</em></p>
      <co-codeshow :codetext="codetext_theme" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <div class="margin-right-sm text-15 text-center" style="width: 59px;">light</div>
              <co-tag class="margin-right-sm" mode="light">标签一</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="primary">标签二</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="success">标签三</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="warning">标签四</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="danger">标签五</co-tag>
              <co-tag mode="light" type="info">标签六</co-tag>
            </div>
          </div>

          <div class="padding-xs">
            <div class="flex align-center">
              <div class="margin-right-sm text-15 text-center" style="width: 59px;">plain</div>
              <co-tag class="margin-right-sm" mode="plain">标签一</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="primary">标签二</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="success">标签三</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="warning">标签四</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="danger">标签五</co-tag>
              <co-tag mode="plain" type="info">标签六</co-tag>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>可移除标签</h2>
      <p>你也可以使用可以移除标签来自定义标签模式。</p>
      <co-codeshow :codetext="codetext_close" :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <div class="margin-right-sm text-15 text-center" style="width: 59px;">dark</div>
              <co-tag class="margin-right-sm" type="theme" close>标签一</co-tag>
              <co-tag class="margin-right-sm" type="primary" close>标签二</co-tag>
              <co-tag class="margin-right-sm" type="success" close>标签三</co-tag>
              <co-tag class="margin-right-sm" type="warning" close>标签四</co-tag>
              <co-tag class="margin-right-sm" type="danger" close>标签五</co-tag>
              <co-tag type="info" close>标签六</co-tag>
            </div>
          </div>

          <div class="padding-xs">
            <div class="flex align-center">
              <div class="margin-right-sm text-15 text-center" style="width: 59px;">light</div>
              <co-tag class="margin-right-sm" mode="light" close>标签一</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="primary" close>标签二</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="success" close>标签三</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="warning" close>标签四</co-tag>
              <co-tag class="margin-right-sm" mode="light" type="danger" close>标签五</co-tag>
              <co-tag mode="light" type="info" close>标签六</co-tag>
            </div>
          </div>

          <div class="padding-xs">
            <div class="flex align-center">
              <div class="margin-right-sm text-15 text-center" style="width: 59px;">plain</div>
              <co-tag class="margin-right-sm" mode="plain" close>标签一</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="primary" close>标签二</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="success" close>标签三</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="warning" close>标签四</co-tag>
              <co-tag class="margin-right-sm" mode="plain" type="danger" close>标签五</co-tag>
              <co-tag mode="plain" type="info" close>标签六</co-tag>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>动态编辑标签</h2>
      <p>动态编辑标签可以通过点击标签关闭按钮后触发的close事件来实现</p>
      <co-codeshow :codetext="codetext_group" :langs="' '">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <transition-group name="co-zoom-in-center" class="flex align-center" style="margin: 0;">
                <co-tag :key="tag" v-for="(tag, index) in dynamicTags" class="margin-right-sm" close
                  @close="handleClose(index)" :disable-transitions="false">
                  {{tag}}
                </co-tag>
              </transition-group>
              <co-input v-if="inputVisible" v-model="inputValue" ref="saveTagInput" placeholder="ps: 回车保存标签" height="31"
                fontsize="13" @keyup.enter.native="handleInputConfirm()"></co-input>
              <co-button v-else type="darkgray" fontsize="13" width="81" height="32" @click="showInput()">+ 添加
              </co-button>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codetext_base: '<template>\n  <div>\n    <co-tag class="margin-right-sm" type="theme">标签一</co-tag>\n    <co-tag class="margin-right-sm" type="primary">标签二</co-tag>\n    <co-tag class="margin-right-sm" type="success">标签三</co-tag>\n    <co-tag class="margin-right-sm" type="warning">标签四</co-tag>\n    <co-tag class="margin-right-sm" type="danger">标签五</co-tag>\n    <co-tag type="info">标签六</co-tag>\n  </div>\n</template>',
      codetext_theme: '<template>\n  <div>\n    <co-tag mode="light">标签一</co-tag>\n    <co-tag mode="light" type="primary">标签二</co-tag>\n    <co-tag mode="light" type="success">标签三</co-tag>\n    <co-tag mode="light" type="warning">标签四</co-tag>\n    <co-tag mode="light" type="danger">标签五</co-tag>\n    <co-tag mode="light" type="info">标签六</co-tag>\n\n    <co-tag mode="plain">标签一</co-tag>\n    <co-tag mode="plain" type="primary">标签二</co-tag>\n    <co-tag mode="plain" type="success">标签三</co-tag>\n    <co-tag mode="plain" type="warning">标签四</co-tag>\n    <co-tag mode="plain" type="danger">标签五</co-tag>\n    <co-tag mode="plain" type="info">标签六</co-tag>\n  </div>\n</template>',
      codetext_close: '<template>\n  <div>\n    <co-tag type="theme" close>标签一</co-tag>\n    <co-tag type="primary" close>标签二</co-tag>\n    <co-tag type="success" close>标签三</co-tag>\n    <co-tag type="warning" close>标签四</co-tag>\n    <co-tag type="danger" close>标签五</co-tag>\n    <co-tag type="info" close>标签六</co-tag>\n	\n    <co-tag mode="light" close>标签一</co-tag>\n    <co-tag mode="light" type="primary" close>标签二</co-tag>\n    <co-tag mode="light" type="success" close>标签三</co-tag>\n    <co-tag mode="light" type="warning" close>标签四</co-tag>\n    <co-tag mode="light" type="danger" close>标签五</co-tag>\n    <co-tag mode="light" type="info" close>标签六</co-tag>\n	\n    <co-tag mode="plain" close>标签一</co-tag>\n    <co-tag mode="plain" type="primary" close>标签二</co-tag>\n    <co-tag mode="plain" type="success" close>标签三</co-tag>\n    <co-tag mode="plain" type="warning" close>标签四</co-tag>\n    <co-tag mode="plain" type="danger" close>标签五</co-tag>\n    <co-tag mode="plain" type="info" close>标签六</co-tag>\n  </div>\n</template>',
      codetext_group: '<template>\n  <div>\n    <transition-group name="co-zoom-in-center" class="flex align-center" style="margin: 0;">\n      <co-tag :key="tag" v-for="(tag, index) in dynamicTags" close\n        @close="handleClose(index)" :disable-transitions="false">\n        {{tag}}\n      </co-tag>\n    </transition-group>\n    <co-input v-if="inputVisible" v-model="inputValue" ref="saveTagInput" placeholder="ps: 回车保存标签"\n      height="31" fontsize="13" @keyup.enter.native="handleInputConfirm()"></co-input>\n    <co-button v-else type="darkgray" fontsize="13" width="81" height="32" @click="showInput()">+ 添加\n    </co-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      dynamicTags: [\'标签一\', \'标签二\', \'标签三\'],\n      inputVisible: false,\n      inputValue: \'\'\n    }\n  },\n  methods: {\n    showInput () {\n      this.inputVisible = true\n      this.$nextTick(() => {\n        this.$refs.saveTagInput.$refs.input.focus();\n      })\n    },\n    handleClose (index) {\n      this.dynamicTags.splice(index, 1);\n    },\n    handleInputConfirm () {\n      let inputValue = this.inputValue;\n      if (this.dynamicTags.indexOf(inputValue) == -1) {\n        this.dynamicTags.push(inputValue);\n      }\n      else {\n        this.$message({\n          message: \'标签已经存在了，请不要重复提交\',\n          type: \'warning\'\n        });\n      }\n      this.inputVisible = false;\n      this.inputValue = \'\';\n    }\n  }\n}\n</sript>	',

      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
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
    showInput () {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      })
    },
    handleClose (index) {
      this.dynamicTags.splice(index, 1);
    },
    handleInputConfirm () {
      let inputValue = this.inputValue;
      if (this.dynamicTags.indexOf(inputValue) == -1) {
        this.dynamicTags.push(inputValue);
      }
      else {
        this.$message({
          message: '标签已经存在了，请不要重复提交',
          type: 'warning'
        });
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style>
</style>