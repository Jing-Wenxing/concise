<template>
  <div>
    <div id="button_top" class="part">
      <h1>Transition 内置过渡动画</h1>
      <p>我们提供部分组件的过渡动画，你也可以直接使用。</p>
    </div>
    <div class="part">
      <h2>fade 淡入淡出</h2>
      <co-codeshow :codetext='codetext_fade' :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex">
              <co-button width="125" @click="fade_show = !fade_show" type="dark">Click Here</co-button>
            </div>
          </div>
          <div class="padding-xs">
            <div class="flex" style="height: 100px;">
              <transition name="co-fade-in-linear">
                <div v-show="fade_show"
                  class="margin-right-sm co-bg-darkgray border-radius flex justify-center align-center"
                  style="color: #ffffff; height: 100px; width: 200px;">
                  co-fade-in-linear
                </div>
              </transition>
              <transition name="co-fade-in">
                <div v-show="fade_show" class="co-bg-darkgray border-radius flex justify-center align-center"
                  style="color: #ffffff; height: 100px; width: 200px;">
                  co-fade-in
                </div>
              </transition>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>zoom 缩放</h2>
      <co-codeshow :codetext='codetext_zoom' :langs="'html'">
        <div slot="content">
          <div class="padding-xs">
            <div class="flex">
              <co-button width="125" @click="zoom_show = !zoom_show" type="dark">Click Here</co-button>
            </div>
          </div>

          <div class="padding-xs">
            <div class="margin-bottom-xs flex" style="height: 100px;">
              <transition name="co-zoom-in-center">
                <div v-show="zoom_show"
                  class="margin-right-sm co-bg-darkgray border-radius flex justify-center align-center"
                  style="color: #ffffff; height: 100px; width: 200px;">
                  co-zoom-in-center
                </div>
              </transition>
              <transition name="co-zoom-in-top">
                <div v-show="zoom_show"
                  class="margin-right-sm co-bg-darkgray border-radius flex justify-center align-center"
                  style="color: #ffffff; height: 100px; width: 200px;">
                  co-zoom-in-top
                </div>
              </transition>
              <transition name="co-zoom-in-bottom">
                <div v-show="zoom_show" class="co-bg-darkgray border-radius flex justify-center align-center"
                  style="color: #ffffff; height: 100px; width: 200px;">
                  co-zoom-in-bottom
                </div>
              </transition>
            </div>

            <div class="flex" style="height: 100px;">
              <transition name="co-zoom-in-left">
                <div v-show="zoom_show"
                  class="margin-right-sm co-bg-darkgray border-radius flex justify-center align-center"
                  style="color: #ffffff; height: 100px; width: 200px;">
                  co-zoom-in-left
                </div>
              </transition>
              <transition name="co-zoom-in-right">
                <div v-show="zoom_show" class="co-bg-darkgray border-radius flex justify-center align-center"
                  style="color: #ffffff; height: 100px; width: 200px;">
                  co-zoom-in-right
                </div>
              </transition>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fade_show: true,
      zoom_show: true,
      codetext_fade: '    <transition name="co-fade-in-linear"></transition>\n    <transition name="co-fade-in"></transition>',
      codetext_zoom: '    <transition name="co-zoom-in-center"></transition>\n    <transition name="co-zoom-in-top"></transition>\n    <transition name="co-zoom-in-bottom"></transition>\n    <transition name="co-zoom-in-left"></transition>\n    <transition name="co-zoom-in-right"></transition>',
    }
  },
  created () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },
  methods: {
    codePost () {
      window.scrollTo({
        top: document.getElementById("button_base").offsetTop - 60 - 15,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
</style>