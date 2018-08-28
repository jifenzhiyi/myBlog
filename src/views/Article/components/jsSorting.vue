<template>
  <div class="abs articleDiv">
    <div id="log">
      <h2>{{ articleInfo.title }}(学习笔记)</h2>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin';
import * as sorting from '../js/sorting';

export default {
  name: 'JsSorting',
  mixins: [mixin],
  mounted() {
    sorting.articleInit();
  },
};
</script>
