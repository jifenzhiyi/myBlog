<template>
  <div :class="tindex===2 ? 'abs template tempSelect' : 'abs template'">
    <div class="template_main">
      <div class="template_a">
        <a
          class="abs button fa-arrow-up"
          @click="setTindex(1)"/>
      </div>
      <h2 :data-title="musicTypeList[musicIndex].title"><span>{{ musicTypeList[musicIndex].title }}</span></h2>
      <div class="template_c">
        <div class="abs template_bg"/>
        <div
          class="abs music_list"
          id="music_list">
          <aplayer
            v-if="listMaxHeight && musicList"
            theme="red"
            class="aplayer"
            :autoplay="true"
            :list="musicList"
            :music="musicList[0]"
            :list-max-height="listMaxHeight"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import templateMixin from '@/mixin/template';
import Aplayer from 'vue-aplayer';
import * as help from '@/utils/help';

export default {
  name: 'TemplateIndex',
  computed: {
    ...mapState({
      musicTypeList: state => state.musicTypeList,
      musicIndex: state => state.musicIndex,
      listMaxHeight: state => state.listMaxHeight,
    }),
  },
  components: {
    Aplayer,
  },
  mixins: [
    templateMixin,
  ],
  created() {
    help.getMusicList();
  },
  mounted() {
    window.store.commit('SET_LIST_MAX_HEIGHT', `${document.getElementById('music_list').clientHeight - 76}px`);
  },
};
</script>

<style lang="less" scoped>
h2:after {
  content: attr(data-title);
}
</style>
