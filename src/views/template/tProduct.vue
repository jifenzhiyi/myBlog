<template>
  <div :class="tindex===3 ? 'abs template tempSelect' : 'abs template'">
    <div class="template_main">
      <div class="template_a">
        <a
          class="abs button fa-arrow-up"
          @click="setTindex(2)"/>
      </div>
      <h2><span>项目展示 📖</span></h2>
      <div class="template_c">
        <div class="abs template_bg"/>
        <div
          class="abs arrow arrow-l fa fa-arrow-left"
          @click="onPrevClick"/>
        <div
          class="abs arrow arrow-r fa fa-arrow-right"
          @click="onNextClick"/>/>
        <div
          class="abs content"
          v-if="productInfo">
          <div class="content-l">
            <div class="imageDiv slow-face">
              <img
                src="/static/iPhone.png"
                height="100%">
              <span class="abs">
                <img src="/static/apple-touch-icon-next.png">
              </span>
            </div>
          </div>
          <div class="content-r">
            <div class="title ellipsis">{{ productInfo.title }}</div>
            <div
              class="intro"
              v-html="productInfo.intro"/>
            <div class="bottom"><span>点击查看</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import templateMixin from '@/mixin/template';

export default {
  name: 'TemplateProduct',
  computed: {
    ...mapState({
      productList: state => state.productList,
      productIndex: state => state.productIndex,
      productInfo: state => state.productInfo,
    }),
  },
  mixins: [
    templateMixin,
  ],
  data() {
    return {
      clickFlag: true,
    };
  },
  watch: {
    tindex() {
      if (this.tindex === 3) {
        window.store.commit('SET_PRODUCT_INFO', this.productList[this.productIndex]);
      } else {
        window.store.commit('SET_PRODUCT_INFO', null);
      }
    },
  },
  created() {
    window.store.commit('SET_PRODUCT_INFO', this.productList[this.productIndex]);
  },
  methods: {
    onPrevClick() {
      window.store.commit('SET_PRODUCT_INDEX', 'prev');
    },
    onNextClick() {
      window.store.commit('SET_PRODUCT_INDEX', 'next');
    },
  },
};
</script>

<style lang="less" scoped>
.arrow {
  top: 50%;
  width: 40px;
  height: 24px;
  margin-top: -12px;
  text-align: center;
  cursor: pointer;
}
.arrow::before {
  font-size: 24px;
  color:#fff;
}
.arrow-l {
  left: 10px;
}
.arrow-r {
  right: 10px;
}
.content {
  top: 50px;
  left: 50px;
  right: 50px;
  bottom: 50px;
  display: flex;
  .content-l {
    width: 50%;
    height: 100%;
    text-align: center;
    .imageDiv {
      height: 100%;
      position: relative;
      display: inline-block;
      margin: 0 auto;
      span {
        top: 12%;
        left: 6.8%;
        right: 7%;
        bottom: 12%;
        overflow: hidden;
        img {
          width:100%;
          height: 100%;
          display: block;
        }
      }
      span::before {
        content: " ";
        position: absolute;
        background: hsla(0,0%,100%,.8);
        width: 100%;
        height: 100%;
        top: 0;
        left: 200%;
        opacity: .3;
        transition: all .15s ease-out;
        transform: skewX(45deg);
        z-index: 10;
      }
    }
    .imageDiv:hover {
      span::before {
        width: 20%;
        left:-150%;
      }
    }
  }
  .content-r {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 32px;
    }
    .intro {
      padding: 10px 0;
      text-indent: 2em;
      flex: 1;
    }
    .bottom {
      height: 50px;
      line-height: 50px;
      text-align: center;
      span {
        padding: 5px 20px;
        background: #fff;
        color:#666;
        font-size:14px;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
}
h2:after {
  content: "项目展示 📖" !important;
}
.slow-face {
  animation-name:slowOpacity;
  animation-fill-mode:forwards;
  animation-timing-function:linear;
  animation-delay:.2s;
  animation-duration:.4s;
  opacity:0;
  transform:scale(.6)
}
@keyframes slowOpacity{
  0% {
    opacity: 0;
    transform: scale(.6)
  } to {
    opacity: 1;
    transform: scale(1)
  }
}
</style>
