<template>
  <div :class="tindex===4 ? 'abs template tempSelect' : 'abs template'"/>
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
