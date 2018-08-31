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
            <div class="top"><span>总支出:{{ expenditure }}元</span><span>总收入:+{{ income }}元</span></div>
            <div
              class="bottom"
              v-if="bookList[listIndex]">
              <div
                class="public"
                v-if="isShow && publicList && publicList.year">
                <div class="title">年开支</div>
                <div class="list clearfix">
                  <div
                    class="one"
                    v-for="(item, index) in publicList.year"
                    :key="index">
                    <span class="s1 ellipsis">{{ index + 1 }}.{{ item.desc }}</span>
                    <span class="s2">{{ item.money }}元</span>
                  </div>
                </div>
              </div>
              <div
                class="public"
                v-if="isShow && publicList && publicList.month">
                <div class="title">月开支</div>
                <div class="list">
                  <div
                    class="one"
                    v-for="(item, index) in publicList.month"
                    :key="index">
                    <span class="s1 ellipsis">{{ index + 1 }}.{{ item.desc }}</span>
                    <span class="s2">{{ item.money }}元</span>
                  </div>
                </div>
              </div>
              <div
                class="private"
                v-if="bookList[listIndex].items">
                <div class="title">当天记录<span>当天共支出: <b>{{ expenditureToday }}</b> 元</span></div>
                <div class="list">
                  <div
                    class="one"
                    v-for="(item, index) in bookList[listIndex].items"
                    :key="index">
                    <span class="s1 ellipsis">{{ index + 1 }}.{{ item.desc }}</span>
                    <span class="s2">{{ item.money }}元</span>
                    <span class="s3">消费于：{{ item.date }}</span>
                  </div>
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
      expenditure: 0, // 总支出
      income: 0, // 总收入
      expenditureToday: 0, // 当天总支出
      isShow: true,
    };
  },
  created() {
    this.bookAjax();
    if (window.innerHeight <= 700) this.isShow = false;
    window.addEventListener('resize', () => {
      this.isShow = true;
      if (window.innerHeight <= 700) this.isShow = false;
    });
  },
  methods: {
    async bookAjax() {
      const res = await api.getData('/static/bookList.json');
      this.bookList = res.data;
      this.listLoad();
    },
    clearInfo() {
      this.expenditure = 0;
      this.expenditureToday = 0;
      this.income = 0;
      this.publicList = {};
    },
    listLoad() {
      this.clearInfo();
      this.bookList.forEach((bookone, index) => {
        bookone.items.forEach((element) => {
          if (element.money < 0) {
            this.expenditure += element.money;
            if (index === this.listIndex) {
              this.expenditureToday += element.money;
            }
          }
          if (element.money > 0) {
            this.income += element.money;
          }
        });
      });
      const month = parseInt(this.bookList[this.listIndex].date.split('-')[1], 10);
      this.bookList.forEach((list) => {
        list.items.forEach((one) => {
          if (one.frequency !== 'one') {
            if (!this.publicList[one.frequency]) {
              this.publicList[one.frequency] = [];
            }
            // this.publicList[one.frequency].push(one);
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
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-height: 62px;
          overflow-x: hidden;
          overflow-y: auto;
          .one {
            width: 50%;
            padding-top: 10px;
            display: flex;
            span {
              &.s1 {
                flex: 1,
              }
              &.s2 {
                width: 30%;
                text-align: right;
              }
            }
          }
          .one:nth-child(2n) {
            span.s1 {
              text-indent: 1em;
            }
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
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          height: 42px;
          span {
            line-height: 32px;
            font-size: 14px;
            font-weight: 100;
            height: 100%;
            color:#666;
            b {
              color:#f00;
            }
          }
        }
        .list {
          width: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          line-height: 20px;
          .one {
            padding-top: 10px;
            width: 100%;
            display: flex;
            span {
              &.s1 {
                flex: 1,
              }
              &.s2 {
                width: 25%;
                text-align: right;
              }
              &.s3 {
                width: 25%;
                text-align: right;
                color:#666;
              }
            }
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
