<template>
  <div>
    <div class="co-color border-radius padding-sm" :class="border?'border':''" :style="'background:'+colorrgb">
      <div class="text-15" :style="'color:'+textcolor+';'" style="margin-bottom: 5px;">{{colorname}}</div>
      <span class="text-14" :style="'color:'+textcolor+';'">{{colorrgb}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-color',
  props: {
    colorname: {
      type: String,
    },
    colorrgb: {
      type: String,
    },
    textcolor: {
      type: String,
      default: '#fff'
    },
    border: {
      type: Boolean,
    }
  }
}
</script>

<style>
.co-color {
  width: 200px;
}
</style>