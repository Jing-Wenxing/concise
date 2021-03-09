<template>
  <div>
    <div class="co-image flex justify-center align-center" :style="'width:'+width+'px;'+'height:'+height+'px;'">
      <img v-if="src!=''" class="co-image-img width-100" :src="src"
        :class="['co-image-'+fit,border!='none'?border=='all'?'border-radius':'border-radius-'+border:'']"
        :style="'width:'+width+'px;'+'height:'+height+'px;'" ondragstart="return false;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-image',
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    fit: {
      type: String,
      default: 'cover'
    },
    border: {
      type: String,
      default: 'none' // none, all, top, bottom
    }
  },
}
</script>

<style>
.co-image {
  overflow: hidden;
}

.co-image-fill {
  object-fit: fill;
}

.co-image-contain {
  object-fit: contain;
}

.co-image-cover {
  object-fit: cover;
}

.co-image-none {
  object-fit: none;
}

.co-image-scale-down {
  object-fit: scale-down;
}
</style>