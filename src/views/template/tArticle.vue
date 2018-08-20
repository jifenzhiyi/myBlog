<template>
  <div :class="tindex===1 ? 'abs template tempSelect' : 'abs template'">
    <transition
      name="component-fade"
      mode="out-in">
      <component :is="getComponent"/>
    </transition>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';
import view1 from '@/views/template/article/view1';
import view2 from '@/views/template/article/view2';
import view3 from '@/views/Article/index';

export default {
  name: 'TemplateIndex',
  components: {
    view1,
    view2,
    view3,
  },
  mixins: [
    templateMixin,
  ],
  computed: {
    getComponent() {
      let mode = this.articleMode;
      if (this.articleUrl !== '') {
        mode = 'view3';
      }
      return mode;
    },
  },
};
</script>

<style lang="less" scoped>
.articleType {
  top:20px;
  left:50%;
  width:200px;
  margin-left:-100px;
  background:#fff;
  height:50px;
  border-radius: 5px;
  border: solid 1px #ddd;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
