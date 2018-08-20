<template>
  <div
    class="modal"
    @click="modalTips">
    <div
      class="modal_tips"
      v-if="modal_tips !== ''"
      v-html="modal_tips" />
    <canvas
      id="live2d"
      width="280"
      height="250" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import '@/assets/live2d.js';
import * as help from '@/utils/help';

export default {
  name: 'IndexModel',
  mounted() {
    this.initModel();
    setTimeout(() => {
      window.store.commit('SET_MODEL_TIPS', '看到左边的小箭头了吗？移上去看看吧~');
    }, 10000);
  },
  computed: {
    ...mapState({
      modelId: state => state.Index.modelId,
      modelCid: state => state.Index.modelCid,
      modal_tips: state => state.Index.modal_tips,
      text: state => state.Index.text,
    }),
  },
  methods: {
    initModel() {
      window.loadlive2d('live2d', `http://api.fghrsh.net/live2d/get/?id=${this.modelId}-${this.modelCid}`);
      help.sayHello();
      const re = /x/;
      console.log('re', re);
      re.toString = () => {
        window.store.commit('SET_MODEL_TIPS', '哈哈，你打开了控制台，是想要看看我的秘密吗？');
        return '';
      };
    },
    modalTips() {
      let text = '';
      if (Array.isArray(this.text)) text = this.text[Math.floor(Math.random() * this.text.length + 1) - 1];
      window.store.commit('SET_MODEL_TIPS', text);
    },
  },
};
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  right: 5%;
  bottom: 0;
  width: 280px;
  height: 250px;
  z-index: 1;
  font-size: 0;
  transition: all .3s ease-in-out;
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
  .modal_tips {
    bottom: 100%;
    color: #fff;
    width: 250px;
    height: 80px;
    margin: -20px 20px;
    padding: 5px 10px;
    border: 1px solid rgba(224, 186, 140, 0.62);
    border-radius: 12px;
    background-color: rgba(148, 0, 211, 0.7);
    box-shadow: 0 3px 15px 2px rgba(191, 158, 118, 0.2);
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    position: absolute;
  }
  #live2d{
    position: relative;
    bottom:0;
  }
}
.modal:hover {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
</style>
