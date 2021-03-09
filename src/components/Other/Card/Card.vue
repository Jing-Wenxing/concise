<template>
  <div class="co-card border-radius margin-xs" :style="'width:'+width+'px;'+'height:'+height+'px;'">

    <div v-if="imagetype!='overlay'">
      <div v-if="imagemode=='top'&&url!=''" :class="imagetype=='padding'?'padding-lr-sm padding-top-sm':''">
        <co-image :src="url" fit="cover" :border="imagetype!='padding'?'top':''">
        </co-image>
      </div>

      <div class="padding-lr-sm padding-top-sm">
        <div style="margin-bottom: 10px; font-size: 20px; font-weight: bold; color: #5e5873;">{{title}}</div>
        <div style="font-size: 15px; font-weight: bold; color: #b9b9c3;">{{subtitle}}</div>
      </div>

      <div v-if="imagemode=='center'&&url!=''"
        :class="imagetype=='padding'?'padding-lr-sm padding-top-sm':'padding-top-sm'">
        <co-image :src="url" fit="cover">
        </co-image>
      </div>

      <div class="padding-lr-sm padding-tb-sm">
        <div style="font-size: 15px; color: #5e5873;">{{text}}</div>
      </div>

      <div v-if="imagemode=='bottom'&&url!=''"
        :class="[imagetype=='padding'?'padding-lr-sm padding-bottom-sm':'', this.$slots.default!=null?'margin-bottom-sm':'']">
        <co-image :src="url" fit="cover" :border="this.$slots.option==null&&imagetype!='padding'?'bottom':''">
        </co-image>
      </div>

      <div v-if="$slots.default" class="padding-lr-sm margin-tb-sm">
        <slot></slot>
      </div>
    </div>

    <div class="co-overlaytag" v-if="imagetype=='overlay'">
      <div class="co-text padding-sm">
        <div style="margin-bottom: 7.5px; font-size: 20px; font-weight: bold; color: #fff;">{{title}}</div>
        <div style="margin-bottom: 15px; font-size: 15px; font-weight: bold; color: #fff;">{{subtitle}}</div>
        <div style="font-size: 15px; color: #fff;">{{text}}</div>
      </div>

      <div class="co-overlay border-radius" :style="'width:'+width+'px;'+'height:'+height+'px;'"></div>

      <div class="co-overlay-image" :style="'width:'+width+'px;'+'height:'+height+'px;'">
        <co-image :src="url" fit="cover" border="all" :height="height" :width="width">
        </co-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-card',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    imagemode: {
      type: String,
      default: 'none'     // none, top, center, bottom
    },
    imagetype: {
      type: String,
      default: 'none'     // none, padding, overlay
    },
    url: {
      type: String,
      default: ''
    },
  },
}
</script>

<style>
.co-card {
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.co-text {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
}

.co-overlay {
  background: rgba(34, 41, 47, 0.45);
  z-index: -1;
}

.co-overlay-image {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -99;
}
</style>