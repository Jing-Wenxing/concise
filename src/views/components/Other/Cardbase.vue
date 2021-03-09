<template>
  <div class="shadow border-radius" :style="'width:'+width+';'">
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
</template> 

<script>
export default {
  name: 'co-card',
  props: {
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
    width: {
      type: String,
      default: ''
    },
  },
  mounted () {
    console.log(this.$slots)
  }
}
</script>

<style>
.shadow {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>