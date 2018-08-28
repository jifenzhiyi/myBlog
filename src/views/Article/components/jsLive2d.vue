<template>
  <div class="abs articleDiv">
    <div id="log">
      <h2>{{ articleInfo.title }}(学习笔记)</h2>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin';
import * as live2d from '../js/live2d';

export default {
  name: 'JsLive2d',
  mixins: [mixin],
  mounted() {
    live2d.articleInit();
  },
};
</script>
