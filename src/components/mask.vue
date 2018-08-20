<template>
  <div class="abs mask">
    <span
      v-for="(one,index) in bgList"
      :key="index"
      :class="one.selected ? 'abs now' : 'abs'"
      :style="{ backgroundImage: `url(${one.imgurl})`}" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IndexMask',
  computed: {
    ...mapState({
      bgList: state => state.Index.bgList,
    }),
  },
};
</script>

<style lang="less" scoped>
.mask {
  left: 0;right: 0;bottom: 0;top: 0; overflow: hidden; z-index: -1;
  span {
    left: 0;right: 0;bottom: 0;top: 0;
    display: none;
    animation-name: maskshow;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-timing-function: ease-in;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-filter: blur(0.05rem);
    filter: blur(0.05rem);
    &.now {
      display: block;
    }
  }
}
</style>
