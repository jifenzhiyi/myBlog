<template>
  <div class="abs template_body">
    <div class="list_main clearfix">
      <div
        v-for="(item,index) in articleList"
        :key="index"
        class="content-box"
        @mouseover="showTips(item.title)"
        @click="gohtml(item)">
        <div class="info-box">
          <div class="info-row">
            <span class="hot">热</span>
            <span class="s1">专栏</span>
            <span>lv</span>
            <span>{{ getTimeInfo(item.date) }}</span>
            <span>{{ item.type }}</span>
          </div>
          <div class="info-row title-row"><h4>{{ item.title }}</h4></div>
        </div>
        <div
          class="thumb"
          :style="`background-image:url(${item.banner})`"/>
      </div>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';

export default {
  name: 'View2',
  mixins: [
    templateMixin,
  ],
};
</script>
