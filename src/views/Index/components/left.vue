<template>
  <div class="meny meny1">
    <div class="abs blackbg" />
    <div class="meny-menuwarp">
      <ul>
        <li
          v-for="(one,index) in tamplate"
          :key="index"
          @click="setTindex(index)"
          @mouseover="showTips(one.name, '#f90' , index)">
          <a :class="tindex===index ? 'meny_a colorRed' : 'meny_a'">
            <i :class="`menu-item-icon fa fa-fw ${one.ico}`"/>
            {{ one.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="hexagon">
      <div
        class="abs loginOut"
        @click="loginOut"
        @mouseover="showTips('点击这里可以返回登录界面~', 'none')">退出</div>
      <div class="boxF">
        <div class="boxS">
          <div
            class="boxT"
            style="background-image: url(../../../static/me.jpg);"
            @mouseover="showTips('这个是主人的头像,<br>是不是帅帅哒~~~', 'none')">
            <svg class="boxTsvg">
              <defs>
                <linearGradient
                  inkscape:collect="always"
                  id="linearGradient"
                  gradientUnits="userSpaceOnUse">
                  <stop
                    style="stop-color:#ff00ff;"
                    offset="0"
                    id="stop876"/>
                  <stop
                    style="stop-color:#ff0000;"
                    offset="1"
                    id="stop878"/>
                </linearGradient>
              </defs>
              <path d="M 0,17 L 0,46 L 25,60 L 50,46 L 50,17 L 25,2 Z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="abs username"><a>疾风之翼<br>Blog</a></div>
    </div>
  </div>
</template>

<script>
import * as storage from '@/utils/storage';
import templateMixin from '@/mixin/template';

export default {
  name: 'MainLeft',
  data() {
    return {
      tamplate: [
        {
          name: '首页',
          type: 'tIndex',
          ico: 'fa-home',
        },
        {
          name: '文章',
          type: 'tArticle',
          ico: 'fa-book',
        },
        {
          name: '音乐',
          type: 'tMusic',
          ico: 'fa-music',
        },
        {
          name: '项目',
          type: 'tList',
          ico: 'fa-rocket',
        },
        {
          name: '简历',
          type: 'tResume',
          ico: 'fa-archive',
        },
      ],
    };
  },
  mixins: [
    templateMixin,
  ],
  methods: {
    loginOut() {
      storage.clear();
      window.location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
.hexagon:hover .loginOut {
  left: 60px;
}
.hexagon {
  position: absolute;
  bottom: 15%;
  left: 50%;
  margin-left: -40px;
  .loginOut {
    top: 17px;
    left: 10px;
    width: 50px;
    height: 29px;
    line-height: 25px;
    text-align: center;
    color: #fff;
    border: solid 2px #f00;
    border-left: 0;
    transition: all .3s ease-in-out 0s;
    cursor: pointer;
    font-size: 10px;
  }
  .boxF, .boxS, .boxT {
    width: 50px;
    height: 62px;
    overflow: hidden;
  }
  .boxF, .boxS {
    visibility: hidden;
  }
  .boxF {
    float: left;
    margin-left: 10px;
    transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    -moz-transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
  }
  .boxS, .boxT {
    transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
  }
  .boxT {
    visibility: visible;
    background: no-repeat 50% center;
    background-size: 120% auto;
    transition: all .3s ease-in-out 0s;
    .boxTsvg {
      position: absolute;
      top:0;
      left:0;
      width:50px;
      height:62px;
    }
    .boxTsvg path {
      fill: none;
      stroke: url(#linearGradient);
      stroke-width: 4;
    }
  }
  .boxT:hover {
    background-size: 240% auto;
  }
  .username {
    top: 110%;
    left: 50%;
    width: 100px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    margin-left: -44px;
    text-align: center;
    a {
      color: #fff;
      cursor: pointer;
      font-weight: 700;
      text-shadow: 6px 5px 10px #000;
    }
    a:hover {
      color: #f90;
    }
  }
}
</style>
