<template>
  <div>
    <div class="part">
      <h1>Card 按钮</h1>
      <p>最基础的块状组件</p>
    </div>
    <div class="part">
      <h2>基础用法</h2>
      <co-codeshow>
        <div slot="content">
          <co-card title="卡片标题" subtitle="卡片副标题" text="这是正文部分"></co-card>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>包含图片</h2>
      <co-codeshow>
        <div slot="content">
          <div class="flex">
            <div>
              <co-card title="卡片标题" subtitle="卡片副标题" text="这是正文部分" :url="url" imagemode="top">
              </co-card>
            </div>
            <div>
              <co-card title="卡片标题" subtitle="卡片副标题" text="这是正文部分" :url="url" imagemode="center">
              </co-card>
            </div>
            <div>
              <co-card title="卡片标题" subtitle="卡片副标题" text="这是正文部分" :url="url" imagemode="bottom"></co-card>
            </div>
          </div>
        </div>
      </co-codeshow>
    </div>
    <div class="part">
      <h2>图片风格</h2>
      <co-codeshow>
        <div slot="content">
          <div class="flex">
            <div>
              <co-card title="卡片标题" subtitle="卡片副标题" text="这是正文部分" :url="url" imagemode="center" imagetype="none">
              </co-card>
            </div>
            <div>
              <co-card title="卡片标题" subtitle="卡片副标题" text="这是正文部分" :url="url" imagemode="center" imagetype="padding">
              </co-card>
            </div>
            <div>
              <co-card title="卡片标题" subtitle="卡片副标题" text="这是正文部分" :url="url" imagemode="center" imagetype="overlay"
                width="329.33" height="200">
              </co-card>
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
      url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/10.97fab91e.jpg'
    }
  },
  mounted () {

  }
}
</script>
  
<style>
</style>