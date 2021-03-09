<template>
  <div class="shadow border-radius co-cardo">
    <div class="co-text">
      123
    </div>

    <div class="co-overlay border-radius"></div>

    <div class="co-image">
      <co-image :src="url" fit="cover" border="all" height="350" width="500">
      </co-image>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg'
    }
  },
}
</script>

<style>
.co-cardo {
  height: 350px;
  width: 500px;
  position: relative;
}

.co-text {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 350px;
  width: 500px;
  z-index: 1;
}

.co-overlay {
  background: rgba(34, 41, 47, 0.45);
  height: 350px;
  width: 500px;
  z-index: -1;
}

.co-image {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 350px;
  width: 500px;
  z-index: -99;
}
</style>