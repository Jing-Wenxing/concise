<template>
  <div>
    <div class="co-tag border-radius flex align-center" :class="[
    'co-tag-color-'+mode+'-'+type,
    'co-tag-bg-'+mode+'-'+type,
    ]">
      <slot></slot>
      <div v-if="close" class="cursor-pointer co-tag-close" style="margin-left: 5px; margin-top: 1.8px;"
        @click="closeTag()">
        <co-icon name="icon-guanbi"></co-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-tag',
  props: {
    mode: {
      type: String,
      default: 'dark'
    },
    type: {
      type: String,
      default: 'theme'
    },
    close: {
      type: Boolean,
    },
  },
  data () {
    return {
    }
  },
  methods: {
    closeTag (evt) {
      this.$emit('close', evt);
    }
  }
}
</script>

<style>
.co-tag {
  width: auto;
  font-size: 13px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px #fff solid;
}

.co-tag-close:hover {
}

.co-tag-color-dark-theme,
.co-tag-color-dark-primary,
.co-tag-color-dark-success,
.co-tag-color-dark-warning,
.co-tag-color-dark-danger,
.co-tag-color-dark-info {
  color: #fff;
}

.co-tag-bg-dark-theme {
  background: #3a3632;
}

.co-tag-bg-dark-primary {
  background: #409eff;
}

.co-tag-bg-dark-success {
  background: #67c23a;
}

.co-tag-bg-dark-warning {
  background: #e6a23c;
}

.co-tag-bg-dark-danger {
  background: #f56c6c;
}

.co-tag-bg-dark-info {
  background: #909399;
}

.co-tag-color-light-theme {
  color: #3a3632;
}

.co-tag-color-light-primary {
  color: #409eff;
}

.co-tag-color-light-success {
  color: #67c23a;
}

.co-tag-color-light-warning {
  color: #e6a23c;
}

.co-tag-color-light-danger {
  color: #f56c6c;
}

.co-tag-color-light-info {
  color: #909399;
}

.co-tag-bg-light-theme {
  border: 1px rgba(58, 54, 50, 0.1) solid;
  background: rgba(58, 54, 50, 0.1);
}

.co-tag-bg-light-primary {
  border: 1px rgba(64, 158, 255, 0.1) solid;
  background: rgba(64, 158, 255, 0.1);
}

.co-tag-bg-light-success {
  border: 1px rgba(103, 194, 58, 0.1) solid;
  background: rgba(103, 194, 58, 0.1);
}

.co-tag-bg-light-warning {
  border: 1px rgba(230, 162, 60, 0.1) solid;
  background: rgba(230, 162, 60, 0.1);
}

.co-tag-bg-light-danger {
  border: 1px rgba(245, 108, 108, 0.1) solid;
  background: rgba(245, 108, 108, 0.1);
}

.co-tag-bg-light-info {
  border: 1px rgba(144, 147, 153, 0.1) solid;
  background: rgba(144, 147, 153, 0.1);
}

.co-tag-color-plain-theme {
  color: #3a3632;
}

.co-tag-color-plain-primary {
  color: #409eff;
}

.co-tag-color-plain-success {
  color: #67c23a;
}

.co-tag-color-plain-warning {
  color: #e6a23c;
}

.co-tag-color-plain-danger {
  color: #f56c6c;
}

.co-tag-color-plain-info {
  color: #909399;
}

.co-tag-bg-plain-theme {
  border: 1px #3a3632 solid;
  background: #fff;
}

.co-tag-bg-plain-primary {
  border: 1px #409eff solid;
  background: #fff;
}

.co-tag-bg-plain-success {
  border: 1px #67c23a solid;
  background: #fff;
}

.co-tag-bg-plain-warning {
  border: 1px #e6a23c solid;
  background: #fff;
}

.co-tag-bg-plain-danger {
  border: 1px #f56c6c solid;
  background: #fff;
}

.co-tag-bg-plain-info {
  border: 1px #909399 solid;
  background: #fff;
}
</style>