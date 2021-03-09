<template>
  <div>
    <div class="flex justigt-center align-center">
      <div class="co-navbar--component">
        <div class="component-card">
          <div class="component-card-detail">
            <transition name="co-fade-in-linear" mode="out-in">
              <div v-if="this.tagvalue=='Baisc'" key="Baisc">
                <div class="component-card-h1">
                  Baisc - 基础
                </div>
                <div class="padding-left-sm">
                  <ul class="component-card-ul">
                    <li v-on:click="pageChange('/components/Baisc/Button')">Button 按钮</li>
                    <li v-on:click="pageChange('/components/Baisc/Color')">Color 颜色</li>
                    <li v-on:click="pageChange('/components/Baisc/Icon')">Icon 图标</li>
                    <li v-on:click="pageChange('/components/Baisc/Transition')">Transition 内置过渡动画</li>
                  </ul>
                </div>
              </div>
              <div v-if="this.tagvalue=='Data'" key="Data">
                <div class="component-card-h1">
                  Data - 数据
                </div>
                <div class="padding-left-sm">
                  <ul class="component-card-ul">
                    <li v-on:click="pageChange('/components/Data/Avatar')">Avatar 头像</li>
                    <li v-on:click="pageChange('/components/Data/Progress')">Progress 进度条</li>
                    <li v-on:click="pageChange('/components/Data/Tag')">Tag 标签</li>
                  </ul>
                </div>
              </div>
              <div v-if="this.tagvalue=='Form'" key="Form">
                <div class="component-card-h1">
                  Form - 表单
                </div>
                <div class="padding-left-sm">
                  <ul class="component-card-ul">
                    <li v-on:click="pageChange('/components/Form/Checkbox')">Checkbox 多选框</li>
                    <li v-on:click="pageChange('/components/Form/Input')">Input 输入框</li>
                    <li v-on:click="pageChange('/components/Form/Markdown')">Markdown 编辑器</li>
                    <li v-on:click="pageChange('/components/Form/Radio')">Radio 单选框</li>
                    <li v-on:click="pageChange('/components/Form/Select')">Select 选择器</li>
                    <li v-on:click="pageChange('/components/Form/Switch')">Switch 开关</li>
                    <li v-on:click="pageChange('/components/Form/Textarea')">Textarea 输入框</li>
                  </ul>
                </div>
              </div>
              <div v-if="this.tagvalue=='Navigation'" key="Navigation">
                <div class="component-card-h1">
                  Navigation - 导航
                </div>
                <div class="padding-left-sm">
                  <ul class="component-card-ul">
                    <li v-on:click="pageChange('/components/Navigation/Breadcrumb')">Breadcrumb 面包屑</li>
                    <li v-on:click="pageChange('/components/Navigation/Dropdown')">Dropdown 下拉代码菜单</li>
                  </ul>
                </div>
              </div>
              <div v-if="this.tagvalue=='Other'" key="Other">
                <div class="component-card-h1">
                  Other - 其他
                </div>
                <div class="padding-left-sm">
                  <ul class="component-card-ul">
                    <li v-on:click="pageChange('/components/Other/Card')">Card 卡片</li>
                    <li v-on:click="pageChange('/components/Other/Carousel')">Carousel 走马灯</li>
                    <li v-on:click="pageChange('/components/Other/Image')">Image 图片</li>
                    <li v-on:click="pageChange('/components/Other/Popover')">Popover 弹出框</li>
                    <li v-on:click="pageChange('/components/Other/Timeline')">Timeline 时间线</li>
                    <li v-on:click="pageChange('/components/Other/Tooltip')">Tooltip 文字提示</li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="component-tags padding-tb-sm">
          <div class="component-tag-single"
            :class="this.tagvalue=='Baisc'?'component-tag-click':'component-tag-noclick'" @click="clickTag('Baisc')"
            key="Baisc">
            Baisc - 基础
          </div>
          <div class="component-tag-single" :class="this.tagvalue=='Data'?'component-tag-click':'component-tag-noclick'"
            @click="clickTag('Data')" key="Data">
            Data - 数据
          </div>
          <div class="component-tag-single" :class="this.tagvalue=='Form'?'component-tag-click':'component-tag-noclick'"
            @click="clickTag('Form')" key="Form">
            Form - 表单
          </div>
          <div class="component-tag-single"
            :class="this.tagvalue=='Navigation'?'component-tag-click':'component-tag-noclick'"
            @click="clickTag('Navigation')" key="Navigation">
            Navigation - 导航
          </div>
          <div class="component-tag-single"
            :class="this.tagvalue=='Other'?'component-tag-click':'component-tag-noclick'" @click="clickTag('Other')"
            key="Other">
            Other - 其他
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tagvalue: '',
    }
  },
  created () {
    if (this.$route.path.split("/")[1] != 'components') {
      this.tagvalue = 'Baisc'
    }
    else {
      this.tagvalue = this.$route.path.split("/")[2]
    }
  },
  methods: {
    clickTag (tagvalue) {
      this.tagvalue = tagvalue
    },
    pageChange (path) {
      if (this.$route.fullPath != path)
        this.$router.push(path)
      this.$emit('getmsg')
    }
  }
}
</script>

<style>
.co-navbar--component {
  color: #fff;
  width: 1100px;
}

.component-card {
  width: 1100px;
  height: 450px;
  background: transparent;
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
}

.component-card-detail {
  width: 700px;
  height: 400px;
  padding: 25px 40px 25px 125px;

  border-radius: 10px;

  background: #f1efed;
}

.component-card-h1 {
  margin-bottom: 15px;
  color: #000000;
  font-size: 22px;
  font-weight: bolder;
}

.component-card-ul {
  color: #000;
}

.component-card-ul > li {
  padding: 7.5px 0;
  cursor: pointer;
  transition: all 0.1s linear;
}

.component-card-ul > li:hover {
  background: #e2e2e2;
}

.component-tags {
  position: absolute;
  margin: 10px 0;
}

.component-tag-single {
  padding: 15px 80px 15px 20px;
  border-radius: 5px;
  width: 225px;
  font-size: 20px;
  cursor: pointer;
}

.component-tag-noclick {
  color: #ffffff;
  background: transparent;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.component-tag-click {
  color: #000000;
  font-weight: bold;
  background: #f0cc71;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>