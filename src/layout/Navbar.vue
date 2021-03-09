<template>
  <div>
    <div class="co-navbar">
      <!-- 菜单栏 -->
      <div class="co-navbar-hr co-bg-darkgray">
        <div class="resive flex justify-between">
          <!-- LOGO -->
          <div>123</div>

          <!-- 菜单 -->
          <transition name="co-zoom-in-center" mode="out-in">
            <!-- 菜单栏 -->
            <div class="width-100 flex justify-center align-center" v-if="!this.search_show" key="index">
              <co-button class="margin-right-sm" type="transparent-light-icon" icon="icon-sousuo" iconsize="22"
                @click="searchOpen()" />
              <co-button class="margin-lr-sm" type="transparent-light" fontsize="17" @click="menuOpen('documentation')"
                :class="[this.menu_single=='documentation'?'co-navbar--button-click':'co-navbar--button-noclick']">
                文档
              </co-button>
              <co-button class="margin-lr-sm" type="transparent-light" fontsize="17" @click="menuOpen('component')"
                :class="[this.menu_single=='component'?'co-navbar--button-click':'co-navbar--button-noclick']">
                组件
              </co-button>
              <co-button class="margin-lr-sm" type="transparent-light" fontsize="17" @click="menuOpen('sourcecode')"
                :class="[this.menu_single=='sourcecode'?'co-navbar--button-click':'co-navbar--button-noclick']">
                源码
              </co-button>
            </div>

            <!-- 搜索栏 -->
            <div class="co-navbar-search flex padding-lr-xs" v-else key="search">
              <co-button type="transparent-dark-icon" icon="icon-fanhui" iconsize="20" fontweight="bold"
                @click="searchClose()"></co-button>
              <co-input v-model="search_text" noborder fontsize="17" width="500"></co-input>
              <div style="width: 45px;">
                <co-button type="transparent-dark-icon" icon="icon-guanbi" iconsize="15" fontweight="bold"
                  v-show="search_text!=''?true:false" @click="searchClean()"></co-button>
              </div>
              <co-button type="transparent-dark-icon" icon="icon-sousuo" iconsize="20" fontweight="bold"
                @click="searchPost()"></co-button>
            </div>
          </transition>

          <!-- 用户 -->
          <div>123</div>
        </div>
      </div>

      <transition name="co-fade-in-linear">
        <div class="co-navbar-content-meng" v-show="menu_show" @click="menuClose">
          <transition name="co-zoom-in-top">
            <div class="co-navbar-content-submenu flex justify-center padding-tb-sm" v-show="menu_show" v-on:click.stop>
              <transition name="co-fade-in-linear" mode="out-in">
                <div v-if="this.menu_single=='documentation'" key="documentation">
                  documentation
                </div>
                <!-- <div v-if="this.menu_single=='component'" key="component">
                  components
                </div> -->
                <Components v-if="this.menu_single=='component'" key="component" v-on:getmsg="menuClose()" />
                <div v-if="this.menu_single=='sourcecode'" key="sourcecode">
                  sourcecode
                </div>
              </transition>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Components from "./navbar/Component.vue";

export default {
  name: 'Navbar',
  components: {
    Components,
  },
  data () {
    return {
      search_show: false,
      menu_show: false,
      search_text: '',
      menu_single: '',
    }
  },
  methods: {
    menuOpen (single) {
      if (this.menu_single == single) {
        this.menu_single = ''
        this.menu_show = false
      }
      else {
        this.menu_single = single
        this.menu_show = true
      }
    },
    menuClose () {
      this.menu_single = ''
      this.menu_show = false
    },
    searchOpen () {
      this.search_show = true
      this.search_text = ''
      this.menu_single = ''
      this.menu_show = false
    },
    searchClose () {
      this.search_show = false
    },
    searchClean () {
      this.search_text = ''
    },
    searchPost () {
      console.log(this.search_text)
    }
  }
}
</script>

<style>
.co-navbar {
  width: 100%;
  /* position: relative; */
  display: inline-block;
  position: fixed;
  z-index: 999;
}

.co-navbar-hr {
  width: 100%;
  height: 44px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.co-navbar-search {
  background: #fff;
  border-radius: 50px;
}

.co-navbar-br {
  width: 175px;
}

.co-navbar--button-click {
  border-bottom: 1px #fff solid;
}

.co-navbar-search {
  background: #fff;
  border-radius: 50px;
}

.co-navbar-content-meng {
  position: absolute;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(0, 0, 0, 0.5);
}

.co-navbar-content-submenu {
  width: 100%;
  height: 450px;
  background-color: #312d29;
}

.co-navbar--button-noclick:hover {
  border-bottom: 1px #fff solid;
}
</style>