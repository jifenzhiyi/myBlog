<template>
  <div :class="tindex===4 ? 'abs template tempSelect' : 'abs template'">
    <div class="template_main">
      <div class="template_a">
        <a
          class="abs fa-arrow-up"
          @click="setTindex(3)"/>
      </div>
      <h2><span>个人简历 🎫</span></h2>
      <div class="template_c">
        <div class="abs template_bg"/>
        <div class="content">
          <h5>My Name is 吕寅 nickname Yin</h5>
          <h6>个人信息</h6>
          <p>男 1986年 上海</p>
          <p>If you find this project useful, you can buy me a cup of coffee</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';

export default {
  name: 'TemplateResume',
  mixins: [
    templateMixin,
  ],
};
</script>

<style lang="less" scoped>
.content {
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  margin: 40px;
  padding: 40px;
  background:#fff;
  color:#000;
  flex: 1;
  line-height: 1.35;
  counter-reset: section;
  h5 {
    font-size: 1.2em;
    font-weight: 100;
  }
  h6 {
    font-size:2em;
    font-weight: 100;
    padding: 1.2em 0 0.6em;
  }
  p {
    line-height: 2;
  }
}
h2:after {
  content: "个人简历 🎫" !important;
}
</style>
