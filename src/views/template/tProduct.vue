<template>
  <div :class="tindex===3 ? 'abs template tempSelect' : 'abs template'">
    <div class="template_main">
      <div class="template_a">
        <a
          class="abs fa-arrow-up"
          @click="setTindex(2)"/>
      </div>
      <h2><span>项目展示 📖</span></h2>
      <div class="template_c">
        <div class="abs template_bg"/>
        <div class="content">123456</div>
      </div>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';

export default {
  name: 'TemplateProduct',
  mixins: [
    templateMixin,
  ],
};
</script>

<style lang="less" scoped>
.content {
  margin: 40px;
  padding: 40px;
  background:#fff;
}
h2:after {
  content: "项目展示 📖" !important;
}
</style>
