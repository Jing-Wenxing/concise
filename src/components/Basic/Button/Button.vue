<template>
  <div>
    <button class="co-button flex align-center justify-center" @click="handleClick" :class="[
    type ? 'co-button--' + type : '',
    round ? 'co-button--round' : '',
    disable ? 'co-button--disable' : '',
    size?'co-button--'+size:'']" :disabled="disable"
      :style="'font-size:'+fontsize+'px !important;'+'font-weight:'+fontweight+' !important;'+'width:'+width+'px;'+'height:'+height+'px;'
      +'color:'+fontcolor+' !important;'+'background:'+background+' !important;'+'border: 1px '+bordercolor+' solid !important;'">
      <div :class="$slots.default&&icon!='' ?'co-button-iconpadding':''" v-show="icon!=''">
        <co-icon :mode="iconmode" :size="iconsize" :name="icon" :color="iconcolor"></co-icon>
      </div>

      <div v-if="$slots.default">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'co-button',
  props: {
    type: {
      // white, dark, white-light, dark-light, transparent-light-icon, transparent-light, transparent-dark-icon, transparent-dark
      type: String,
      default: 'dark'
    },

    // Icon元素
    icon: {
      type: String,
      default: ''
    },
    iconmode: {
      // class, symbol
      type: String,
      default: 'class'
    },
    iconsize: {
      type: String,
      default: '18'
    },
    iconcolor: {
      type: String,
    },
    // 风格
    size: {
      type: String,
      default: 'normal'
    },
    round: {
      type: Boolean,
    },
    disable: {
      type: Boolean,
    },
    // 自定义
    fontsize: {
      type: String,
    },
    fontweight: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    fontcolor: {
      type: String,
    },
    background: {
      type: String,
    },
    bordercolor: {
      type: String,
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style>
.co-button {
  cursor: pointer;
}

.co-button--small {
  padding: 0px 15px;
  height: 30px;
  font-size: 15px;
}

.co-button--normal {
  padding: 0px 15px;
  height: 40px;
  font-size: 15px;
}

.co-button--large {
  padding: 0px 15px;
  height: 50px;
  font-size: 16px;
}

.co-button--extra {
  padding: 0px 15px;
  height: 60px;
  font-size: 17px;
}

.co-button:focus,
.co-button:active:focus {
  outline: none;
  border-color: transparent;
  box-shadow: none;
}

.co-button--white-light {
  border: 1px #fff solid;
  border-radius: 5px;
  background: transparent;
  color: #fff;

  transition: 0.2s;
}

.co-button--white-light:hover {
  background: #fff;
  color: #312d2a;
}

.co-button--white {
  border: 1px #fff solid;
  border-radius: 5px;
  background: #fff;
  color: #312d2a;

  transition: 0.2s;
}

.co-button--white:hover {
  border: 1px #f1efed solid;
  background: #f1efed;
}

.co-button--dark-light {
  border: 1px #312d2a solid;
  border-radius: 5px;
  background: transparent;
  color: #312d2a;

  transition: 0.2s;
}

.co-button--dark-light:hover {
  background: #312d2a;
  color: #fff;
}

.co-button--dark {
  border: 1px #312d2a solid;
  border-radius: 5px;
  background: #312d2a;
  color: #fff;

  transition: 0.2s;
}

.co-button--dark:hover {
  border: 1px #161513 solid;
  background: #161513;
}

.co-button--transparent-light-icon {
  background: transparent;
  color: #fff;
  transition: 0.1s;
}

.co-button--transparent-dark-icon {
  background: transparent;
  color: #161513;
  transition: 0.1s;
}

.co-button--transparent-light {
  background: transparent;
  color: #fff;

  transition: 0.1s;
}

.co-button--transparent-light:hover {
  padding-top: 14px;
  padding-bottom: 9px;
}

.co-button--transparent-dark {
  background: transparent;
  color: #312d2a;

  transition: 0.1s;
}

.co-button--transparent-dark:hover {
  padding-top: 14px;
  padding-bottom: 9px;
}

.co-button-iconpadding {
  padding-right: 4px;
}

.co-button--round {
  border-radius: 1000px;
}

.co-button--disable {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>