<template>
  <div>
    <Navbar />
    <Content />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
import Content from "@/layout/Content.vue";
import Footer from "@/layout/Footer.vue";

export default {
  components: {
    Navbar,
    Content,
    Footer,
  }
}
</script>

<style>
::-webkit-scrollbar {
  background-color: rgba(27, 27, 27, 0.4);
  border-radius: 30px;
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 30px;
  background: rgba(27, 27, 27, 0.4);
}

::-webkit-scrollbar-track {
  border-radius: 30px;
  background: #fff;
}
</style>