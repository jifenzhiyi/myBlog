<template>
  <div class="abs template_body">
    <div class="article_main clearfix">
      <div
        class="article_one"
        v-for="(item,index) in getArticleList"
        :key="index"
        @mouseover="showTips(item.title)"
        @click="gohtml(item)">
        <div
          class="article_t"
          :style="`background-image:url(${item.banner})`">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="article_b">
          <span class="s1">{{ item.type }}</span>
          <span class="s2">{{ getTimeInfo(item.date) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';

export default {
  name: 'View1',
  mixins: [
    templateMixin,
  ],
};
</script>
