<template>
  <div class="introduction">
    <tt>我是吕寅<br>web前端开发</tt>
    <canvas class="abs iCanvas"/>
  </div>
</template>

<script>
import * as help from '@/utils/help';
import anime from 'animejs';

export default {
  name: 'IsMe',
  mounted() {
    anime({
      targets: 'tt',
      translateX: 0,
      rotate: 360,
      duration: 5000,
      direction: 'alternate',
      loop: false,
    });
    window.human = null;
    help.autoClick();
    help.setCanvasSize();
  },
};
</script>

<style lang="less" scoped>
.introduction {
  height: 100%;
  position: relative;
  tt {
    text-align: center;
    position:absolute;
    font-size: 100px;
    left: 50%; top: 50%;
    margin-top: -210px;
    margin-left: -275px;
    text-shadow: 6px 5px 10px #fff;
    color: #f90;
    transform:rotate(-360deg);
    -ms-transform:rotate(-360deg);
    -webkit-transform:rotate(-360deg);
    font-family: "微软雅黑";
  }
  .iCanvas {
    top:0; left:0;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
