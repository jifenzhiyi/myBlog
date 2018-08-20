<template>
  <div class="abs Index">
    <!-- 加载动画 -->
    <loader v-if="loading"/>
    <!-- 背景层 -->
    <index-mask />
    <!-- Tab -->
    <index-tab/>
    <!-- 小萝莉 -->
    <index-model/>
    <!-- 主体 -->
    <div class="meny-wrap">
      <main-right />
      <main-left />
    </div>
    <!-- 小三角放到外面 -->
    <div class="meny-arrow"/>
    <!-- 放到3D空间中 -->
    <main-canvas/>
    <!-- 全局遮罩 -->
    <div
      class="abs noclick"
      v-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import loader from '@/components/loader';
import indexMask from '@/components/mask';
import indexTab from '@/components/tab';
import indexModel from '@/components/model';
import indexMain from '@/views/Index/index';
import '@/styles/meny.less';
import '@/assets/meny.js';
import mainLeft from './components/left';
import mainRight from './components/right';
import mainCanvas from '@/components/canvas';

export default {
  name: 'Index',
  components: {
    loader,
    indexMask,
    indexTab,
    indexModel,
    indexMain,
    mainLeft,
    mainRight,
    mainCanvas,
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
    }),
  },
  mounted() {
    window.Meny.create({
      menuElement: document.querySelector('.meny'),
      contentsElement: document.querySelector('.meny-contents'),
      position: 'left',
      width: 200,
      threshold: 40,
      mouse: true,
      touch: false,
    });
  },
};
</script>

<style lang="less" scoped>
.Index {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  overflow: hidden;
  .meny-wrap{
    position: absolute;
    top:0; left:0; right:0; bottom:0;
    overflow: hidden;
  }
  .meny-arrow {
    position: fixed;
    left: 14px;
    top: 50%;
    margin-top: -16px;
    border: 10px solid transparent;
    border-left: 16px solid #fff;
    z-index: 10;
  }
}
</style>
