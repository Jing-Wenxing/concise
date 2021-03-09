<template>
  <div>
    <div class="co-avatar flex justify-center align-center"
      :class="shape=='square'?'co-avatar-square':'co-avatar-circle'" :style="'width:'+size+'px;'+'height:'+size+'px;'">
      <co-icon v-if="src==''&&icon!=''" :name="icon" :size="String(size-15)" color="#ffffff"></co-icon>
      <img v-if="src!=''" class="co-avatar-img" :src="src" :style="'width:'+size+'px;'+'height:'+size+'px;'"
        ondragstart="return false;">
      <div v-if="src==''&&icon==''" class="co-color-white" style="margin-bottom: 2px;"
        :style="'font-size:'+String(size/2)+'px;'">
        {{single?this.$slots.default[0].text.substr(0,1):this.$slots.default[0].text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-avatar',
  props: {
    size: {
      type: String,
      default: '50'
    },
    icon: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: 'square'
    },
    src: {
      type: String,
      default: ''
    },
    single: {
      type: Boolean,
    }
  },
}
</script>

<style>
.co-avatar {
  background: #c0c4cc;
  overflow: hidden;
}

.co-avatar-square {
  border-radius: 4px;
}

.co-avatar-circle {
  border-radius: 1000px;
}
</style>