<template>
  <div class="abs THEME">
    <a
      class="s1"
      @click="tabnext"
      @mouseover="showTips('要不要换个背景看一看？', 'none')">切换背景</a>
    <a
      class="s2"
      @click="changeClothes"
      @mouseover="showTips('要不要换件衣服看一看？', 'none')">切换衣服</a>
    <a
      class="s3"
      @click="changeModel"
      @mouseover="showTips('要不要换个人物看一看？', 'none')">切换人物</a>
    <a
      class="s4"
      v-if="tindex===1"
      @click="changeMode"
      @mouseover="showTips('点击这里可以切换文章模式~', 'none')">切换文章模式</a>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import * as api from '@/utils/api';
import * as help from '@/utils/help';

export default {
  name: 'IndexTab',
  computed: {
    ...mapState({
      modelId: state => state.Index.modelId,
      modelCid: state => state.Index.modelCid,
      tindex: state => state.Index.tindex,
      articleMode: state => state.Index.articleMode,
    }),
  },
  methods: {
    tabnext() {
      this.$store.commit('SET_BG_INDEX');
    },
    showTips(text) {
      window.store.commit('SET_MODEL_TIPS', text);
    },
    async changeClothes() {
      const res = await api.getData(`http://api.fghrsh.net/live2d/rand_textures/?id=${this.modelId}`);
      this.$store.commit('SET_MODEL_CID', res.data.textures.id);
      help.loadModel(this.modelId, res.data.textures.id);
      window.store.commit('clear_MODEL_TIPS');
      window.store.state.Index.modal_ready = '我这件衣服好看吗？';
    },
    async changeModel() {
      const res = await api.getData(`http://api.fghrsh.net/live2d/switch/?id=${this.modelId}`);
      this.$store.commit('SET_MODEL_ID', res.data.model.id);
      help.loadModel(res.data.model.id);
      window.store.commit('clear_MODEL_TIPS');
      window.store.state.Index.modal_ready = '我这个样子好看吗？';
    },
    changeMode() {
      if (this.articleMode === 'view1') {
        window.store.commit('CHANGE_MODE', 'view2');
      } else {
        window.store.commit('CHANGE_MODE', 'view1');
      }
    },
  },
};
</script>

<style lang="less" scoped>
.THEME {
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 5;
  a {
    background: #000;
    cursor: pointer;
    float: right;
    color: #fff;
    margin-right: 20px;
    line-height: 50px;
    padding: 0 20px;
    opacity: 0.7;
    border-radius:0 0 5px 5px;
    border: solid 2px #000;
    border-top: 0;
  }
  a:hover {
    border: solid 2px #f00;
    border-top: 0;
    color: #f00;
  }
}
</style>
