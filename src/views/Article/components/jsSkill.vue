<template>
  <div class="abs articleDiv">
    <div id="log">
      <h2>{{ articleInfo.title }}(学习笔记)</h2>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin';
import * as skill from '../js/skill';

export default {
  name: 'JsSkill',
  mixins: [mixin],
  mounted() {
    skill.articleInit();
  },
};
</script>
