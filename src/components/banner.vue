<template>
  <div class="swipermain">
    <!-- <div class="abs planing">Banner正在开发中。。。</div> -->
    <div class="abs banner">
      <div
        class="site-brand-wrapper demo-1"
        style="background-image: url(/)">
        <svg class="hidden">
          <symbol
            id="icon-nav-arrow"
            viewBox="0 0 90 64">
            <title>nav-arrow</title>
            <path
              d="M88.148 30.124H6.404L33.208 3.32a1.877 1.877 0 0 0 0-2.652 1.877 1.877 0 0 0-2.652 0L.552 30.67a1.942 1.942 0 0 0-.409.612 1.86 1.86 0 0 0 0 1.432c.094.233.233.44.41.612L30.555 63.33c.367.368.847.552 1.328.552.48 0 .96-.184 1.327-.548a1.877 1.877 0 0 0 0-2.652L6.404 33.874h81.743a1.876 1.876 0 0 0 0-3.75z"
            />
          </symbol>
        </svg>
        <div class="DecoLetter">
          <div class="content">
            <div class="slideshow">
              <div class="slide slide--current">
                <h2 class="word word--1">枯木逢春犹再发,人无两度再少年</h2>
              </div>
              <div class="slide">
                <h2 class="word word--2">长江后浪推前浪,世上今人胜古人</h2>
              </div>
              <div class="slide">
                <h2 class="word word--3">若使年华虚度过,到老空留后悔心</h2>
              </div>
              <div class="slide">
                <h2 class="word word--4">有志不在年高,无志空长百岁</h2>
              </div>
              <div class="slide">
                <h2 class="word word--5">少壮不努力,老大徒伤悲</h2>
              </div>
              <div class="slide">
                <h2 class="word word--6">三百六十行,行行出状元</h2>
              </div>
              <div class="slide">
                <h2 class="word word--7">冰生于水而寒于水,青出于蓝而胜于蓝</h2>
              </div>
              <div class="slide">
                <h2 class="word word--8">书到用时方恨少,事非经过不知难</h2>
              </div>
              <div class="slide">
                <h2 class="word word--9">疾风之翼</h2>
              </div>
            </div>
            <nav class="slidenav">
              <button class="slidenav__item slidenav__item--prev">
                <svg class="icon icon--navarrow">
                  <use xlink:href="#icon-nav-arrow"/>
                </svg>
              </button>
              <button class="slidenav__item slidenav__item--next">
                <svg class="icon icon--navarrow">
                  <use xlink:href="#icon-nav-arrow"/>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/styles/DecorativeLetter.less';
import * as banner from '@/utils/banner';

export default {
  name: 'Banner',
  mounted() {
    banner.bannerLoad();
  },
};
</script>

<style lang="less" scoped>
.swipermain {
  display: relative;
  width: 100%;
  .planing {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 32px;
    opacity: 0.5;
  }
  .banner {
    top:0; left:0; right: 0; bottom:0;
    overflow: hidden;
    display: flex;
  }
}
</style>
