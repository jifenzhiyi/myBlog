<template>
  <div class="login">
    <div class="container">
      <div class="left">
        <div class="left_word">Login</div>
        <div class="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
      </div>
      <div class="right">
        <svg viewBox="0 0 320 300">
          <defs>
            <linearGradient
              inkscape:collect="always"
              id="linearGradient"
              x1="13"
              y1="193.49992"
              x2="307"
              y2="193.49992"
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
          <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"/>
        </svg>
        <div class="form">
          <label for="username">username</label>
          <input
            type="text"
            autocomplete="off"
            id="username"
            v-model="loginForm.username"
            @focus="inputFocus1">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="loginForm.password"
            @focus="inputFocus2"
            @keyup="keyup">
          <input
            type="submit"
            id="submit"
            value="Submit"
            @focus="inputFocus3"
            @click="submitForm">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import * as storage from '@/utils/storage';
import * as globalMessage from '@/utils/feedback';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      current: null,
    };
  },
  computed: {
    redirectTo() {
      return this.$route.query.target || '/index';
    },
  },
  methods: {
    inputFocus1() {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    },
    inputFocus2() {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    },
    inputFocus3() {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    },
    keyup(event) {
      if (event.keyCode === 13) {
        this.submitForm();
      }
    },
    submitForm() {
      if (this.loginForm.username === '') {
        globalMessage.error('账号不能为空');
      } else if (this.loginForm.password === '') {
        globalMessage.error('密码不能为空');
      } else if (this.loginForm.password.length < 6) {
        globalMessage.error('密码长度不能少于6个字符');
      } else if (this.loginForm.username === 'lv' || this.loginForm.username === 'aaa') {
        storage.set('user_id', '007');
        globalMessage.info('登录成功');
        setTimeout(() => {
          this.$router.push({ path: this.redirectTo });
        }, 1000);
      } else {
        globalMessage.error('账号密码不正确');
        this.loginForm.username = '';
        this.loginForm.password = '';
      }
    },
  },
};
</script>

<style lang="less" scoped>
svg {
  position: absolute;
  width: 320px;
}
path {
  fill: none;
  stroke: url(#linearGradient);
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}
.login {
  background: #e2e2e5;
  display: flex;
  flex-direction: column;
  position: absolute;
  place-content: center;
  height: calc(100%);
  width: calc(100%);
  .container {
    display: flex;
    height: 320px;
    margin: 0 auto;
    width: 640px;
    .left {
      background: white;
      height: calc(100% - 40px);
      top: 20px;
      position: relative;
      width: 50%;
      .left_word {
        font-size: 50px;
        font-weight: 900;
        margin: 50px 40px 40px;
      }
      .eula {
        color: #999;
        font-size: 14px;
        line-height: 1.5;
        margin: 40px;
      }
    }
    .right {
      background: #474A59;
      box-shadow: 0px 0px 40px 16px rgba(0,0,0,0.22);
      color: #F1F1F2;
      position: relative;
      width: 50%;
      .form {
        margin: 40px;
        position: absolute;
        label {
          color:  #c2c2c5;
          display: block;
          font-size: 14px;
          height: 16px;
          margin-top: 20px;
          margin-bottom: 5px;
        }
        input {
          background: transparent;
          border: 0;
          color: #f2f2f2;
          font-size: 20px;
          height: 30px;
          line-height: 30px;
          outline: none !important;
          width: 100%;
        }
        input::-moz-focus-inner {
          border: 0;
        }
        #submit {
          color: #707075;
          margin-top: 40px;
          transition: color 300ms;
        }
        #submit:focus {
          color: #f2f2f2;
        }
        #submit:active {
          color: #d0d0d2;
        }
      }
    }
  }
}
</style>
