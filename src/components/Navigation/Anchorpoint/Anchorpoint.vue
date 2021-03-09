<template>
  <div>
    <div class="anchor">
      <co-button @click="codePost()">
        base
      </co-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-anchorpoint',
  mounted () {
  },
  methods: {
    codePost () {
      console.log('click')
      window.scrollTo({
        top: document.getElementById("button_base").offsetTop - 60 - 15,
        behavior: 'smooth'
      });
    },
  },
}
</script>

<style>
.anchor {
  /* position: absolute; */
  /* position: -webkit-sticky;
  position: sticky; */
  /* top: 0; */
  /* padding: 5px; */
  /* background-color: #cae8ca;
  border: 2px solid #4caf50; */
}
</style>