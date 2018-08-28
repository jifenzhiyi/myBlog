import { mapState } from 'vuex';

export default {
  data() {
    return {
      text: '文章正在创建中。。。',
    };
  },
  computed: {
    ...mapState({
      articleInfo: state => state.Index.articleInfo,
    }),
  },
};
