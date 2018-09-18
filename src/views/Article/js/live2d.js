import './public.js';

/* eslint no-bitwise: ["error", { "int32Hint": true }] */
export const articleInit = () => {
  window.log('\\n首先需要引入 <a style="color:#fff;" href="static/live2d.js" target="_blank">live2d.js</a> 文件\\n ');
  window.log('在页面中引用 import \'@/assets/live2d.js\';');
  window.log('\\n使用vuex状态管理 store.js\\n ');
  window.log(`<xmp>state: {
    modelId: 1, // 小萝莉人物 id
    modelCid: 0, // 小萝莉衣服 id
    modal_ready: '', // 小萝莉文字预加载
    modal_tips: '', // 小萝莉头上文字显示
    text: [ // 小萝莉文字模板
      '110吗，这里有个变态一直在摸我(ó﹏ò｡)',
      '欢迎你，这是我家主人的地盘~😊',
      '再摸的话我可要报警了！⌇●﹏●⌇',
      '是…是不小心碰到了吧',
      '你看到我的小熊了吗',
      '不要再碰我了...',
      '啊啊啊~呜呜呜呜',
      '萝莉控是什么呀?',
      '你走开~',
    ],
  },
  mutations: {
    SET_MODEL_ID(state, param) {
      state.modelId = param;
    },
    SET_MODEL_CID(state, param) {
      state.modelCid = param;
    },
    SET_MODEL_TIPS(state, text, time = 3000) {
      state.modal_tips = text;
      clearTimeout(window.timeout);
      window.timeout = setTimeout(() => {
        state.modal_tips = '';
        state.modal_ready = '';
      }, time);
    },
    clear_MODEL_TIPS(state) {
      clearTimeout(window.timeout);
      state.modal_tips = '';
      state.modal_ready = '';
    },
  },</xmp>`);
  window.log('页面初始化看板娘');
  window.log('<xmp>window.loadlive2d(\'live2d\', \'http://api.fghrsh.net/live2d/get/?id={modelId}-{modelCid}\');</xmp>');
  window.log('点击看板娘的事件');
  window.log(`<xmp>modalTips() {
    let text = '';
    if (Array.isArray(this.text)) text = this.text[Math.floor(Math.random() * this.text.length + 1) - 1];
    this.$store.commit('SET_MODEL_TIPS', text);
  }</xmp>`);
  window.log('\\n创建画布和提示框\\n ');
  window.log(`<xmp><div
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
  </div></xmp>`);
  window.log('\\n页面样式 less\\n ');
  window.log(`<xmp><style lang="less" scoped>
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
  </style></xmp>`);
};
