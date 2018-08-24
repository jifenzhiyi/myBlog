<template>
  <div class="abs articleDiv"/>
</template>

<script>
import mixin from '../mixin';
import * as sorting from '../js/sorting';

export default {
  name: 'JsSorting',
  mixins: [mixin],
  created() {
      sorting.articleInit();
  },
};
</script>
