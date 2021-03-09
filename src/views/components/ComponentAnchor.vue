<template>
  <div>
    <div v-for="(item,index) in this.anchor" :key="item.innerText">
      <co-button background="transparent" fontcolor="#000" bordercolor="transparent" @click="goAnchor(index)">
        {{item.innerText}}
      </co-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anchor: {
      type: HTMLCollection
    },
    thiss: {
      type: String
    }
  },
  mounted () {
    console.log(this.anchor)
  },
  updated () {

    // console.log('change')
    // console.log(this.anchor)
    // console.log(this.thiss)

    // for (let i = 0; i < this.anchor.length; i++) {
    //   console.log(this.anchor[i].innerText)
    // }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // // beforeRouteEnter不能通过this访问组件实例，但是可以通过 vm 访问组件实例
      // console.log(vm.demodata)   //vm.demodata即this.demodata
      // let anchor = document.getElementsByTagName('h2')
      // this.$emit('getmsg', anchor)
      // console.log(vm.routertext)
      // let anchor = document.getElementsByTagName('h2')
      // vm.$emit('getmsg', anchor)
      console.log(this.anchor)
      console.log(this.thiss)
    })
  },
}
</script>

<style>
</style>