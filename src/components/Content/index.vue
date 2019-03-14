<template>
  <div
    class="tofu-content"
    :style="[
      {marginBottom:`${marginBottom}px`}
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tofu-content',
  props: {
    marginBottom: {
      type: [String, Number],
      default: 18
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/var.scss";

.tofu-content {
  padding: 16px;
  background-color: $clr-theme-2;
  border-radius: 4px;
}
</style>
