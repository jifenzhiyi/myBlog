<template>
  <div class="abs article">
    <div class="abs blackbg"/>
    <h1 v-if="articleUrl!=='#'">{{ articleTitle }}</h1>
    <component :is="articleUrl!=='#' ? articleUrl : 'isme'"/>
    <div
      class="abs goback"
      @click="goback">返回上一页</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import jsAnime from '@/views/Article/components/jsAnime';
import jsSorting from '@/views/Article/components/jsSorting';
import jsLive2d from '@/views/Article/components/jsLive2d';
import jsSkill from '@/views/Article/components/jsSkill';
import jsCopy from '@/views/Article/components/jsCopy';
import isme from '@/views/Article/components/me';

export default {
  name: 'Article',
  computed: {
    ...mapState({
      articleTitle: state => state.Index.articleTitle,
      articleUrl: state => state.Index.articleUrl,
    }),
  },
  components: {
    jsAnime,
    jsSorting,
    jsLive2d,
    jsSkill,
    jsCopy,
    isme,
  },
  methods: {
    goback() {
      window.store.commit('SET_ARTICLE_URL', '');
    },
  },
};
</script>

<style lang="less" scoped>
.article {
  left: 10%; right: 10%; top: 10%; bottom: 10%;
  border-radius: 20px;
  overflow: hidden;
  .blackbg {
    top: 0; left: 0; right:0; bottom:0;
    background:#000;
    opacity: 0.5;
  }
  h1 {
    position: absolute;
    top: 50%;
    margin-top: -150px;
    left:0; width: 100%;
    line-height: 300px;
    text-align: center;
    color:#f00;
    font-size:64px;
    opacity: 0.5;
  }
  .articleDiv {
    top:0;left:0;right:0;bottom:0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .goback {
    top:0; right:0;
    padding: 0 20px;
    height:50px;
    line-height: 50px;
    color:#fff;
    background:#000;
    z-index: 1;
    border-radius:0 0 0 20px;
    cursor: pointer;
    opacity: 0.7;
  }
  .goback:hover {
    color: #f00;
  }
}
</style>
