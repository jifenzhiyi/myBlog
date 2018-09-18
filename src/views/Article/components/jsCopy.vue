<template>
  <div class="abs articleDiv">
    <div id="log">
      <h2>{{ articleInfo.title }}(学习笔记)</h2>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin';
import * as copy from '../js/copy';

export default {
  name: 'JsCopy',
  mixins: [mixin],
  mounted() {
    copy.articleInit();
  },
};
</script>
