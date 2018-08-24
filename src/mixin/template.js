import { mapState } from 'vuex';
import * as help from '@/utils/help';

export default {
  computed: {
    ...mapState({
      tindex: state => state.Index.tindex,
      articleList: state => state.Index.articleList,
      musicList: state => state.Index.musicList,
      articleMode: state => state.Index.articleMode,
      articleUrl: state => state.Index.articleUrl,
    }),
  },
  methods: {
    setTindex(index) {
      window.store.commit('SET_TEMPLATE_INDEX', index);
      window.store.commit('SET_ARTICLE_URL', '');
    },
    getTimeInfo(time) {
      return help.getDateDiff(help.getDateTimeStamp(time));
    },
    showTips(text, color = '#f90', index) {
      if (color === 'none') {
        window.store.commit('SET_MODEL_TIPS', text);
      } else if (this.tindex === index) {
        window.store.commit('SET_MODEL_TIPS', `我们现在就在<span style="color:${color};">『${text}』</span>哦~`);
      } else {
        window.store.commit('SET_MODEL_TIPS', `让我们去看看<span style="color:${color};">『${text}』</span>吧~`);
      }
    },
    gohtml(item) {
      window.store.commit('SET_ARTICLE_URL', item.url);
      window.store.commit('SET_ARTICLE_TITLE', item.title);
      window.store.commit('SET_ARTICLE_INFO', item);
    },
  },
};
