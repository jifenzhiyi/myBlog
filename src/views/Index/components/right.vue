<template>
  <div class="meny-contents">
    <div class="container">
      <t-index />
      <t-article />
      <t-Music />
      <t-product />
      <t-resume />
    </div>
  </div>
</template>

<script>
import '@/styles/template.less';
import tIndex from '@/views/template/tIndex';
import tArticle from '@/views/template/tArticle';
import tMusic from '@/views/template/tMusic';
import tProduct from '@/views/template/tProduct';
import tResume from '@/views/template/tResume';

export default {
  name: 'MainRight',
  components: {
    tIndex,
    tArticle,
    tMusic,
    tProduct,
    tResume,
  },
};
</script>
