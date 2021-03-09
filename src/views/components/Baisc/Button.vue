<template>
  <div>
    <div class="part">
      <h1>Button 按钮</h1>
      <p>常用的操作按钮。</p>
    </div>
    <div class="part">
      <h2>基础用法</h2>
      <co-codeshow :codetext='codetext_base' :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex">
              <co-button width="125">默认</co-button>
            </div>
          </div>

          <div class="part-xs padding-xs">
            <div class="flex">
              <co-button class="margin-right-sm" width="125" type="dark">dark</co-button>
              <co-button class="margin-right-sm" width="125" type="dark-light">dark-light</co-button>
            </div>
          </div>

          <div class="part-xs padding-xs co-bg-darkgray border-radius">
            <div class="flex">
              <co-button class="margin-right-sm" width="125" type="white">white</co-button>
              <co-button class="margin-right-sm" width="125" type="white-light">white-light</co-button>
            </div>
          </div>
        </div>

        <div slot="explain">
          <span>根据主题的风格，我们提供了四种样式：<em>dark</em>、<em>dark-light</em>、<em>white</em>、<em>white-light</em>。</span>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>图标按钮</h2>
      <co-codeshow :codetext='codetext_icon' :langs="'html'">
        <div slot="content">
          <div class="part-xs padding-xs">
            <div class="flex">
              <co-button class="margin-right-sm" width="125" icon="icon-shouye" type="dark">首页</co-button>
              <co-button class="margin-right-sm" width="125" icon="icon-sousuo" type="dark-light">搜索
              </co-button>
              <co-button class="margin-right-sm" icon="icon-sousuo" type="dark">
              </co-button>
              <co-button class="margin-right-sm" icon="icon-sousuo" type="dark" iconcolor="#12B7F5">
              </co-button>
              <co-button class="margin-right-sm" icon="icon-sousuo" type="dark" iconsize="20">
              </co-button>
            </div>
          </div>

          <div class="part-xs padding-xs co-bg-darkgray border-radius">
            <div class="flex">
              <co-button class="margin-right-sm" width="125" icon="icon-shouye" type="white">首页</co-button>
              <co-button class="margin-right-sm" width="125" icon="icon-sousuo" type="white-light">搜索
              </co-button>
              <co-button class="margin-right-sm" icon="icon-sousuo" type="white">
              </co-button>
              <co-button class="margin-right-sm" icon="icon-sousuo" type="white" iconcolor="#12B7F5" iconsize="20">
              </co-button>
              <co-button class="margin-right-sm" icon="icon-sousuo" type="white" iconsize="20">
              </co-button>
              <co-button class="margin-right-sm" icon="icon-sousuo" type="white" iconsize="20" iconmode="symbol">
              </co-button>
            </div>
          </div>
        </div>

        <div slot="explain">
          <span>这里我们使用引入的Icon图标，与按钮搭配使用，并提供四个参数：<em>icon</em>、<em>iconcolor</em>、<em>iconsize</em>、<em>iconmode</em>。</span>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>不同风格</h2>
      <co-codeshow :codetext='codetext_style' :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <co-button class="margin-right-sm" size="small">small</co-button>
              <co-button class="margin-right-sm">normal</co-button>
              <co-button class="margin-right-sm" size="large">large
              </co-button>
              <co-button class="margin-right-sm" size="extra">extra
              </co-button>
              <co-button class="margin-right-sm" width="125" round>round</co-button>
              <co-button class="margin-right-sm" width="125" disable>disable</co-button>
            </div>
          </div>
        </div>

        <div slot="explain">
          <span>我们还提供了不同的按钮风格，供日常作用：<em>normal</em>、<em>large</em>、<em>round</em>、<em>disable</em>。</span>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>自定义图标</h2>
      <co-codeshow :codetext='codetext_custom' :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex align-center">
              <co-button class="margin-right-sm" type="dark" width="125">width</co-button>
              <co-button class="margin-right-sm" type="dark" height="60">height
              </co-button>
              <co-button class="margin-right-sm" type="dark" fontsize="25">fontsize</co-button>
              <co-button class="margin-right-sm" type="dark" fontweight="bold">fontweight</co-button>
              <co-button class="margin-right-sm" type="dark" fontcolor="#bfbfbf">fontcolor</co-button>
              <co-button class="margin-right-sm" type="dark" background="#bfbfbf">fontcolor</co-button>
              <co-button class="margin-right-sm" type="dark" bordercolor="red">fontcolor</co-button>
            </div>
          </div>
        </div>

        <div slot="explain">
          <span>如果你不喜欢我们预设的样式，你可以自己来设计它：<em>width</em>、<em>height</em>、<em>fontsize</em>、<em>fontweight</em>。</span>
        </div>
      </co-codeshow>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codetext_base: '<template>\n  <div>\n    <co-button width="125">默认</co-button>\n\n    <co-button type="dark">dark</co-button>\n    <co-button type="dark-light">dark-light</co-button>\n\n    <co-button type="white">white</co-button>\n    <co-button type="white-light">white-light</co-button>\n  </div>\n</template>',
      codetext_icon: '<template>\n  <div>\n    <co-button icon="icon-shouye" type="dark" width="125">首页</co-button>\n    <co-button icon="icon-sousuo" type="dark-light" width="125">搜索</co-button>\n    <co-button icon="icon-sousuo" type="dark"></co-button>\n    <co-button icon="icon-sousuo" type="dark" iconcolor="#12B7F5"></co-button>\n    <co-button icon="icon-sousuo" type="dark" iconsize="20"></co-button>\n	\n    <co-button icon="icon-shouye" type="white" width="125">首页</co-button>\n    <co-button icon="icon-sousuo" type="white-light" width="125">搜索</co-button>\n    <co-button icon="icon-sousuo" type="white"></co-button>\n    <co-button icon="icon-sousuo" type="white" iconcolor="#12B7F5"></co-button>\n    <co-button icon="icon-sousuo" type="white" iconsize="20"></co-button>\n    <co-button icon="icon-sousuo" type="white" iconsize="20" iconmode="symbol"></co-button>\n  </div>\n</template>',
      codetext_style: '<template>\n  <div>\n    <co-button width="125" size="small">small</co-button>\n    <co-button width="125">normal</co-button>\n    <co-button width="125" size="large">large</co-button>\n    <co-button width="125" size="extra">extra</co-button>\n    <co-button width="125" round>round</co-button>\n    <co-button width="125" disable>disable</co-button>\n  </div>\n</template>',
      codetext_custom: '<template>\n  <div>\n    <co-button width="125">width</co-button>\n    <co-button height="60">height</co-button>\n    <co-button fontsize="25">fontsize</co-button>\n    <co-button fontweight="bold">fontweight</co-button>\n    <co-button fontcolor="#bfbfbf">fontcolor</co-button>\n    <co-button background="#bfbfbf">fontcolor</co-button>\n    <co-button bordercolor="red">fontcolor</co-button>\n  </div>\n</template>',
    }
  },
}
</script>

<style>
</style>