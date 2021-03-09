<template>
  <div>
    <div class="flex height-calc60">
      <div class="component-list flex justify-end">
        <div style="width: calc(50vw - 803px);"></div>
        <div style="width: 250px;">
          <div class="padding">
            <div v-for="(item,index) in anchor_name[this.$route.path]" :key="index">
              <co-button background="transparent" fontcolor="#000" bordercolor="transparent" @click="goAnchor(index)">
                {{item}}
              </co-button>
            </div>
          </div>
        </div>
      </div>
      <div id="top" class="component-main flex justify-start" @scroll="scrollEvent">
        <div style="width:1150px;">
          <div class="padding">
            <router-view key="content"></router-view>
          </div>
        </div>
        <div style="width: calc(50vw - 603px);"></div>
        <transition name="co-fade-in-linear">
          <co-button v-if="goup_flag" id="goup" type="dark" round height="46.86" fontsize="15" background="#3A3632"
            bordercolor="#3A3632" @click="toTop()">▲
          </co-button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentAnchor from './ComponentAnchor.vue'

export default {
  data () {
    return {
      navBarFixed: false,
      clientHeight: '',
      goup_flag: false,
      routevalue: '',
      anchor: null,
      anchor_name: {
        "/components/Baisc/Button": [
          "基础用法", "图标按钮", "不同风格", "自定义图标"
        ],
        "/components/Baisc/Color": [
          "主色", "辅助色", "中性色", "其他"
        ],
        "/components/Baisc/Icon": [
          "使用方法", "图标集合"
        ],
        "/components/Baisc/Transition": [
          "fade 淡入淡出", "zoom 缩放"
        ],
        "/components/Data/Avatar": [
          "基础用法", "展示类型"
        ],
        "/components/Data/Progress": [
          "基础用法", "不同类型", "高度设置", "文字设置", "动效设置"
        ],
        "/components/Data/Tag": [
          "基础用法", "不同模式", "可移除标签", "动态编辑标签"
        ],
        "/components/Other/Tooltip": [
          "基础用法", "展示类型"
        ],
      },

    }
  },
  components: {
    ComponentAnchor
  },
  mounted () {
    this.toTop()
    this.routevalue = this.$route.path

    for (let i = 0; i < this.$children.length; i++) {
      if (this.$children[i].$vnode.key == 'content') {
        this.anchor = this.$children[i].$el.getElementsByTagName('h2')
        // console.log(this.anchor)
      }
    }
  },
  updated () {
    if (this.$route.path != this.routevalue) {
      this.toTop()
      this.routevalue = this.$route.path
    }
  },
  methods: {
    scrollEvent () {
      if (this.$el.querySelector('#top').scrollTop > 60)
        this.goup_flag = true
      else
        this.goup_flag = false
    },
    toTop () {
      document.getElementById('top').scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    goAnchor (index) {
      document.getElementById('top').scrollTo({
        top: this.anchor[index].offsetTop - 75,
        behavior: "smooth"
      })
    }
  },
}
</script>

<style>
.component {
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.component-list {
  overflow: auto;
}

.component-main {
  overflow: auto;
}

#goup {
  position: absolute;
  right: 75px;
  bottom: 100px;
}
</style>