import './public.js';

/* eslint no-bitwise: ["error", { "int32Hint": true }] */
export const articleInit = () => {
  window.log('\\n首先需要引入 live2d.js 文件\\n ');
  window.log('\\n脚本 使用vuex状态管理\\n ');
  window.log('页面中的一些事件方法');
  window.log('<xmp>window.loadlive2d(\'live2d\', \'http://api.fghrsh.net/live2d/get/?id=modelId-modelCid\');</xmp>');
  window.log('看板娘的语言文本');
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
  window.log('\\n注意事项\\n ');
  window.log(`<xmp>// store.js
  modelId: 1, // 小萝莉人物 id
  modelCid: 0, // 小萝莉衣服 id
  modal_ready: '',
  modal_tips: '', // 小萝莉文字显示
  text: [
    '110吗，这里有个变态一直在摸我(ó﹏ò｡)',
    '欢迎你，这是我家主人的地盘~😊',
    '再摸的话我可要报警了！⌇●﹏●⌇',
    '是…是不小心碰到了吧',
    '你看到我的小熊了吗',
    '不要再碰我了...',
    '啊啊啊~呜呜呜呜',
    '萝莉控是什么呀?',
    '你走开~',
  ],</xmp>`);
};
