<template>
  <div :class="tindex===2 ? 'abs template tempSelect' : 'abs template'">
    <div class="template_main">
      <div class="template_a">
        <a
          class="abs fa-arrow-up"
          @click="setTindex(1)"/>
      </div>
      <h2><span>我喜欢的音乐 🎵</span></h2>
      <div class="template_c">
        <div class="abs template_bg"/>
        <div class="music_list">
          <aplayer
            theme="red"
            class="aplayer"
            v-if="musicList"
            :autoplay="true"
            :list="musicList"
            :music="musicList[0]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';
import Aplayer from 'vue-aplayer';
import * as api from '@/utils/api';

export default {
  name: 'TemplateIndex',
  components: {
    Aplayer,
  },
  mixins: [
    templateMixin,
  ],
  mounted() {
    this.getMusicList();
  },
  methods: {
    async getMusicList() {
      const res = await api.getData('https://api.i-meto.com/meting/api?server=netease&type=playlist&id=2152376407');
      const copy = [];
      res.data.forEach((item) => {
        const obj = { title: item.name, src: item.url, ...item };
        const { name, url, ...newobj } = obj;
        copy.push(newobj);
      });
      const random = () => (Math.random() > 0.5 ? -1 : 1);
      copy.sort(random);
      this.$store.commit('SET_MUSIC_LIST', copy);
    },
  },
};
</script>
