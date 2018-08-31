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
    <!-- 记账详情 -->
    <div
      class="abs bookInfo"
      v-if="popFlag"
      @click="closePop">
      <div class="abs bookMain">test</div>
    </div>
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
      popFlag: state => state.popFlag,
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
  methods: {
    closePop() {
      window.store.commit('SET_POP_FLAG');
    },
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
  .bookInfo {
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 100;
    .bookMain {
      top: 208px;
      bottom: 142px;
      left: 50%;
      overflow: hidden;
      width: 692px;
      margin-left: -346px;
      background:#fff;
    }
  }
  .bookInfo::before {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#000;
    opacity: 0.5;
    content: ' ';
  }
}
</style>
