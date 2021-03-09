<template>
  <div>
    <input ref="input" class="co-input" type="text" @input="changes" :value="value" :class="[disable ? 'co-input--disable' : '',
    size?'co-input--'+size:'',
  noborder?'co-input--noborder':'',]" :style="'width:'+width+'px;'+'height:'+height+'px;'+'font-size:'+fontsize+'px;'"
      :placeholder="placeholder" :disabled="disable" />
  </div>
</template>

<script>
export default {
  name: 'co-input',
  props: {
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
    },
    disable: {
      type: Boolean,
    },
    noborder: {
      type: Boolean,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    fontsize: {
      type: String,
    },
  },
  data () {
    return {
    }
  },
  methods: {
    changes (e) {
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style>
input {
  background: none;
  outline: none;
  border: none;
}

.co-input {
  border: 1px #e0e0e0 solid;

  background: #fff;
  transition: 0.2s;
}

.co-input:focus {
  border: 1px #312d2a solid;
}

.co-input::-webkit-input-placeholder {
  color: #aaaaaa;
}

.co-input--disable {
  cursor: not-allowed;
  opacity: 0.7;
  background: rgba(0, 0, 0, 0.05);
}

.co-input--normal {
  padding: 0 15px;
  border-radius: 5px;

  font-size: 15px;
  height: 38px;
  width: 150px;
}

.co-input--small {
  padding: 0px 10px;
  border-radius: 5px;

  font-size: 13px;
  height: 32px;
  width: 59px;
}

.co-input--large {
  padding: 2.5px 20px;
  border-radius: 5px;

  font-size: 16px;
  height: 38px;
  width: 200px;
}

.co-input--noborder {
  border: 1px #fff solid;
  border-radius: 0px;
}

.co-input--noborder:focus {
  border: 1px #fff solid;
}
</style>