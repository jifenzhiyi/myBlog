<template>
  <div class="abs article">
    <div class="abs blackbg"/>
    <h1 v-if="articleInfo.url!=='#'">{{ articleInfo.title }}</h1>
    <component :is="articleInfo.url!=='#' ? articleInfo.url : 'isme'"/>
    <div
      class="abs go-back"
      @click="goback">返回上一页</div>
    <div
      class="abs post-date"
      v-if="getDate"
      v-html="getDate"/>
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
      articleInfo: state => state.Index.articleInfo,
    }),
    getDate() {
      let date = '';
      if (this.articleInfo.date !== '') {
        const info = this.articleInfo.date.split('-');
        date = `${info[1]}月<span>${info[2]}</span>`; 
      }
      return date;
    },
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

<style lang="less">
.article {
  left: 10%; right: 10%; top: 10%; bottom: 10%;
  border-radius: 10px 10px 0 0;
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
    opacity: 0.2;
  }
  .go-back {
    top:0; right:0;
    padding: 0 20px;
    height:50px;
    line-height: 50px;
    color: #000;
    background:#fff;
    z-index: 1;
    border-radius:0 0 0 10px;
    cursor: pointer;
    opacity: 0.9;
  }
  .go-back:hover {
    color:#fff;
    background:#000;
    opacity: 0.6;
  }
  .post-date {
    top:0; left:0;
    width: 120px;
    height: 50px;
    line-height: 50px;
    color:#000;
    background:#fff;
    z-index: 1;
    border-radius: 0 0 10px 0;
    opacity: 0.9;
    display: flex;
    justify-content:center;
    span {
      font-size: 24px;
    }
  }
  .articleDiv {
    top:0; left:0; right:0; bottom:0;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
