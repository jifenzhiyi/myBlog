<template>
  <div :class="tindex===3 ? 'abs template tempSelect' : 'abs template'"/>
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
