export default {
  state: {
    bgList: [
      { imgurl: 'static/1.jpg', selected: true },
      { imgurl: 'static/2.jpg', selected: false },
      { imgurl: 'static/3.jpg', selected: false },
      { imgurl: 'static/4.jpg', selected: false },
      { imgurl: 'static/5.jpg', selected: false },
    ], // 背景列表
    bgIndex: 0, // 背景图片 index
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
    ],
    tindex: 0, // 模块显示
    articleList: [
      {
        title: '自我介绍',
        banner: 'static/bg5.jpg',
        url: '#',
        type: '待定',
        date: '',
      },
      {
        title: 'JS的排序算法',
        banner: 'static/bg3.jpg',
        url: 'jsSorting',
        type: 'javascript',
        date: '2018-7-27',
      },
      {
        title: '看板娘(Live2D)',
        banner: 'static/bg2.jpg',
        url: 'jsLive2d',
        type: 'javascript',
        date: '2018-7-26',
      },
      {
        title: 'JS中可以提升幸福度的小技巧',
        banner: 'static/bg1.jpg',
        url: 'jsSkill',
        type: 'javascript',
        date: '2018-7-25',
      },
      {
        title: 'JS的浅拷贝和深拷贝',
        banner: 'static/bg0.jpg',
        url: 'jsCopy',
        type: 'javascript',
        date: '2018-7-23',
      },
      {
        title: 'anime.js',
        banner: 'static/bg4.jpg',
        url: 'jsAnime',
        type: 'javascript',
        date: '2018-6-15',
      },
    ],
    musicList: null,
    articleMode: 'view1',
    articleUrl: '',
    articleTitle: '',
    articleInfo: null,
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    SET_BG_INDEX(state) {
      state.bgIndex += 1;
      if (state.bgIndex === 5) {
        state.bgIndex = 0;
      }
      for (let i = 0; i < 5; i += 1) {
        if (state.bgList[i].selected) {
          state.bgList[i].selected = false;
          break;
        }
      }
      state.bgList[state.bgIndex].selected = true;
    },
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
    SET_TEMPLATE_INDEX(state, index) {
      state.tindex = index;
    },
    SET_MUSIC_LIST(state, param) {
      state.musicList = param;
    },
    SET_ARTICLE_URL(state, param) {
      state.articleUrl = param;
    },
    SET_ARTICLE_TITLE(state, param) {
      state.articleTitle = param;
    },
    SET_ARTICLE_INFO(state, param) {
      state.articleInfo = param;
    },
    CHANGE_MODE(state, param) {
      state.articleUrl = '';
      state.articleMode = param;
    },
    clear_MODEL_TIPS(state) {
      clearTimeout(window.timeout);
      state.modal_tips = '';
      state.modal_ready = '';
    },
    /* eslint-enable no-param-reassign */
  },
  actions: {
  },
};
