<template>
  <div :class="tindex===0 ? 'abs template tempSelect' : 'abs template'">
    <div id="swiper">
      <!--<div class="abs blackbg" />-->
      <banner />
    </div>
    <div id="intro">
      <h1>This is My Site</h1>
      <p> Whatever is worth doing is worth doing well <br> I'll think of you every step of the way</p>
      <a
        class="abs button fa-arrow-down"
        @click="setTindex(1)"/>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';
import banner from '@/components/banner';

export default {
  name: 'TemplateIndex',
  components: {
    banner,
  },
  mixins: [
    templateMixin,
  ],
};
</script>
