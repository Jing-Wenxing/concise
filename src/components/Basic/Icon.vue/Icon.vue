<template>
  <div>
    <div class="flex align-center" :style="'color:'+color+';'">
      <div v-if="mode=='class'" class="iconfont" :class="name"
        :style="'width: '+size+'px;'+'height: '+size+'px;'+'line-height: '+size+'px;'+'font-size: '+size+'px;'"></div>
      <svg v-if="mode=='symbol'" :style="'width: '+size+'px;'+'height: '+size+'px;'+'line-height: '+size+'px;'">
        <use :xlink:href="'#'+name"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-icon',
  props: {
    mode: {
      // class, symbol
      type: String,
      default: 'class'
    },
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '15'
    },
    color: {
      type: String,
    },
  }
}
</script>