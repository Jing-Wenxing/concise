<template>
  <div>
    <div class="width-100 shadow-resive-light">
      <div class="border border-radius-nobottom padding-lr-sm padding-tb-sm">
        <slot name="content"></slot>
      </div>
      <div class="padding-lr-sm" :class="code_show?'co-codeshow-code':'co-codeshow-nocode'">
        <div v-if="$slots.explain" class="margin-top-xsm border border-radius co-bg-white"
          style="font-family: consolas; padding: 26px 7px; line-height: 25px;">
          <slot name="explain"></slot>
        </div>
        <pre :id="'pre'" v-highlight>
            <code :class="langs" class="border-radius" style="font-size: 15px; font-family: consolas;">
{{codetext}}
            </code>
          </pre>
      </div>
      <div class="flex justify-center align-center" @click="codeChange()"
        :class="code_show?'co-codeshow-button-click':'co-codeshow-button-noclick'">
        <co-icon :name="code_show?'icon-jianshao':'icon-tianjia'" size="16"></co-icon>
        <div class="margin-left-xs text-15">{{code_show?'关闭代码':'显示代码'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-codeshow',
  props: {
    codetext: {
      type: String
    },
    langs: {
      type: String
    }
  },
  data () {
    return {
      code_show: true,
    }
  },
  mounted () {
    // document.getElementById('pre' + codetext).style.height = (document.getElementById("pre").clientHeight - 25) + 'px'
  },
  methods: {
    codeChange () {
      this.code_show = !this.code_show
    },
  }
}
</script>

<style>
pre {
  padding: 0;
}

.co-codeshow-button-noclick {
  height: 45px;
  background: #fff;
  border: 1px #dfdfdf solid;
  border-top: 0px;
  border-radius: 0px 0px 5px 5px;
  color: #c0c0c0;
  transition: all 0.1s linear;
  cursor: pointer;
}

.co-codeshow-button-noclick:hover {
  background: #fafafa;
  color: #666666;
}

.co-codeshow-button-click {
  height: 45px;
  background: #fafafa;
  border: 1px #dfdfdf solid;
  border-top: 0px;
  border-radius: 0px 0px 5px 5px;
  color: #666666;
  transition: all 0.1s linear;
  cursor: pointer;
}

.co-codeshow-nocode {
  max-height: 0px;
  min-height: 0px;
  border: 1px #dfdfdf solid;
  border-top: 0px;
  border-bottom: 0px;
  background: #fafafa;
  overflow: hidden;
  transition: max-height ease-out 0.25s;
}

.co-codeshow-code {
  max-height: 1000px;
  min-height: 0px;
  border: 1px #dfdfdf solid;
  border-top: 0px;
  border-bottom: 0px;
  background: #fafafa;
  overflow: hidden;
  transition: max-height ease-in 0.25s;
}
</style>