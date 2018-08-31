<template>
  <div :class="tindex===5 ? 'abs template tempSelect' : 'abs template'">
    <div class="template_main">
      <div class="template_a">
        <a
          class="abs fa-arrow-up"
          @click="setTindex(4)"/>
      </div>
      <h2><span>记账 💰</span></h2>
      <div class="template_c">
        <div class="abs template_bg"/>
        <div class="content">
          <div
            class="abs arrow arrow-l fa fa-arrow-left"
            @click="onPrevClick"/>
          <div
            class="abs arrow arrow-r fa fa-arrow-right"
            @click="onNextClick"/>
          <h5 v-html="getDate"/>
          <div class="book-main">
            <div class="top"><span>本月总支出:{{ expenditure }}元</span><span>本月总收入:+{{ income }}元</span></div>
            <div
              class="bottom"
              v-if="bookList[listIndex]">
              <div
                class="public"
                v-if="publicList && publicList.year">
                <div class="title">年开支</div>
                <div class="list clearfix">
                  <span
                    v-for="(item, index) in publicList.year"
                    :key="index">{{ index + 1 }}.{{ item.desc }} {{ item.money }}元</span>
                </div>
              </div>
              <div
                class="public"
                v-if="publicList && publicList.month">
                <div class="title">月开支</div>
                <div class="list clearfix">
                  <span
                    v-for="(item, index) in publicList.month"
                    :key="index">{{ index + 1 }}.{{ item.desc }} {{ item.money }}元</span>
                </div>
              </div>
              <div class="private">
                <div class="title">当天记录</div>
                <div class="list">
                  <span>1.20:00 -2000元 平安车险</span>
                  <span>2.12:32 -16元 菜饭 小炒肉 卤蛋</span>
                  <span>3.12:00 +100元 测试</span>
                  <span>4.11:54 -211元 公司9月停车费 我是截至到10月11日</span>
                  <span>5.10:00 -2000元 test</span>
                  <span>6.9:32 -16元 test</span>
                  <span>7.8:00 +100元 test</span>
                  <span>8.7:54 -211元 test</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';
import * as api from '@/utils/api';

export default {
  name: 'TemplateBook',
  mixins: [
    templateMixin,
  ],
  computed: {
    getDate() {
      let date = '';
      if (this.bookList && this.bookList[this.listIndex] && this.bookList[this.listIndex].date !== '') {
        const info = this.bookList[this.listIndex].date.split('-');
        date = `${info[0]}年<span class="dateCss">${info[1]}</span>月<span class="dateCss">${info[2]}</span>日`;
      }
      return date;
    },
  },
  data() {
    return {
      bookList: [],
      publicList: {},
      listIndex: 0,
      expenditure: 0, // 支出
      income: 0, // 收入
    };
  },
  created() {
    this.bookAjax();
  },
  methods: {
    async bookAjax() {
      const res = await api.getData('/static/bookList.json');
      this.bookList = res.data;
      this.listLoad();
    },
    listLoad() {
      this.expenditure = 0;
      this.income = 0;
      this.publicList = {};
      this.bookList[this.listIndex].items.forEach((element) => {
        if (element.money < 0) {
          this.expenditure += element.money;
        }
        if (element.money > 0) {
          this.income += element.money;
        }
      });
      const month = new Date().getMonth() + 1;
      this.bookList.forEach((list) => {
        list.items.forEach((one) => {
          if (one.frequency !== 'one') {
            if (!this.publicList[one.frequency]) {
              this.publicList[one.frequency] = [];
            }
            if ((parseInt(list.date.split('-')[1], 10) === month && one.frequency === 'month') || one.frequency === 'year') {
              this.publicList[one.frequency].push(one);
            }
          }
        });
      });
    },
    onPrevClick() {
      // left
      if (this.listIndex < this.bookList.length - 1) {
        this.listIndex += 1;
      }
      this.listLoad();
    },
    onNextClick() {
      // right
      if (this.listIndex !== 0) {
        this.listIndex -= 1;
      }
      this.listLoad();
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  margin: 40px;
  padding: 20px;
  background:#fff;
  color:#000;
  line-height: 1.35;
  counter-reset: section;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  .arrow {
    top: 30px;
    width: 40px;
    height: 24px;
    text-align: center;
    cursor: pointer;
  }
  .arrow::before {
    font-size: 24px;
    color:#000;
  }
  .arrow-l {
    left: 20px;
  }
  .arrow-r {
    right: 20px;
  }
  h5 {
    font-size: 1.4em;
    font-weight: 100;
    text-align: center;
    display: flex;
    justify-content: center;
    line-height: 2em;
  }
  .book-main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    margin-top: 20px;
    .top {
      width: 100%;
      height: 30px;
      text-align: center;
      display: flex;
      span {
        width: 50%;
        height: 30px;
        line-height: 30px;
        color:#666;
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      .public {
        margin-top: 20px;
        padding: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        border: solid 1px #ddd;
        .title {
          display: flex;
          font-size: 24px;
          font-weight: bold;
          padding-bottom: 10px;

        }
        .list {
          width: 100%;
          span {
            float: left;
            width: 50%;
            height: 30px;
            line-height: 30px;
          }
        }
      }
      .private {
        margin-top: 20px;
        padding: 10px;
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        border: solid 1px #ddd;
        .title {
          font-size: 24px;
          font-weight: bold;
          padding-bottom: 10px;
        }
        .list {
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          overflow-y: auto;
          line-height: 20px;
          span {
            padding-top: 10px;
            width: 100%;
          }
        }
      }
    }
  }
}
h2:after {
  content: "记账 💰" !important;
}
</style>
