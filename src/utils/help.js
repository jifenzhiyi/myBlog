import anime from 'animejs';
import store from '@/store';

export const loadModel = (modelId = 1, modelCId = 0) => {
  window.loadlive2d('live2d', `http://api.fghrsh.net/live2d/get/?id=${modelId}-${modelCId}`);
};

export const sayHello = () => {
  let text = '';
  if (window.location.href === 'http://localhost:8686/index') {
    const now = (new Date()).getHours();
    if (now > 23 || now <= 5) {
      text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
    } else if (now > 5 && now <= 7) {
      text = '早上好！一日之计在于晨，美好的一天就要开始了';
    } else if (now > 7 && now <= 11) {
      text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
    } else if (now > 11 && now <= 14) {
      text = '中午了，工作了一个上午，现在是午餐时间！';
    } else if (now > 14 && now <= 17) {
      text = '午后很容易犯困呢，今天的运动目标完成了吗？';
    } else if (now > 17 && now <= 19) {
      text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
    } else if (now > 19 && now <= 21) {
      text = '晚上好，今天过得怎么样？';
    } else if (now > 21 && now <= 23) {
      text = '已经这么晚了呀，早点休息吧，晚安~';
    } else {
      text = '嗨~ 快来逗我玩吧！';
    }
  } else {
    text = '欢迎来到<span style="color:#ff9900;">『Hello Word』</span>';
  }
  store.commit('SET_MODEL_TIPS', text);
};

export const getDateDiff = (dateTimeStamp) => {
  let result = '刚刚';
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return result;
  }
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  if (monthC >= 1) {
    result = `${parseInt(monthC, 10)}月前`;
  } else if (weekC >= 1) {
    result = `${parseInt(weekC, 10)}周前`;
  } else if (dayC >= 1) {
    result = `${parseInt(dayC, 10)}天前`;
  } else if (hourC >= 1) {
    result = `${parseInt(hourC, 10)}小时前`;
  } else if (minC >= 1) {
    result = `${parseInt(minC, 10)}分钟前`;
  } else {
    result = '刚刚';
  }
  return result;
};

export const getDateTimeStamp = dateStr => Date.parse(dateStr.replace(/-/gi, '/'));

window.human = null;
const numberOfParticules = 30;
let pointerX = 0;
let pointerY = 0;
const tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

const updateCoords = (e) => {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
};

const setParticuleDirection = (p) => {
  const angle = anime.random(0, 360) * Math.PI / 180;
  const value = anime.random(50, 180);
  const radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle),
  };
};

const createParticule = (x, y) => {
  const p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = () => {
    window.ctx.beginPath();
    window.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    window.ctx.fillStyle = p.color;
    window.ctx.fill();
  };
  return p;
};

const createCircle = (x, y) => {
  const p = {};
  p.x = x;
  p.y = y;
  p.color = '#FFF';
  p.radius = 0.1;
  p.alpha = 0.5;
  p.lineWidth = 6;
  p.draw = () => {
    window.ctx.globalAlpha = p.alpha;
    window.ctx.beginPath();
    window.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    window.ctx.lineWidth = p.lineWidth;
    window.ctx.strokeStyle = p.color;
    window.ctx.stroke();
    window.ctx.globalAlpha = 1;
  };
  return p;
};

const renderParticule = (anim) => {
  for (let i = 0; i < anim.animatables.length; i += 1) {
    anim.animatables[i].target.draw();
  }
};

const animateParticules = (x, y) => {
  const circle = createCircle(x, y);
  const particules = [];
  for (let i = 0; i < numberOfParticules; i += 1) {
    particules.push(createParticule(x, y));
  }
  anime.timeline().add({
    targets: particules,
    x(p) { return p.endPos.x; },
    y(p) { return p.endPos.y; },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
  })
    .add({
      targets: circle,
      radius: anime.random(80, 160),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: anime.random(600, 800),
      },
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule,
      offset: 0,
    });
};

export const canvasInit = () => {
  window.canvasEl = document.querySelector('.fireworks');
  window.ctx = window.canvasEl.getContext('2d');
  window.render_human = anime({
    duration: Infinity,
    update: () => {
      window.ctx.clearRect(0, 0, window.canvasEl.width, window.canvasEl.height);
    },
  });
  document.addEventListener(tap, (e) => {
    window.human = true;
    window.render_human.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
  }, false);
};

export const setCanvasSize = () => {
  window.canvasEl.width = window.innerWidth * 2;
  window.canvasEl.height = window.innerHeight * 2;
  window.canvasEl.style.width = `${window.innerWidth}px`;
  window.canvasEl.style.height = `${window.innerHeight}px`;
  window.canvasEl.getContext('2d').scale(2, 2);
};

export const autoClick = () => {
  if (window.human) return;
  animateParticules(
    anime.random(centerX - 500, centerX + 500),
    anime.random(centerY - 250, centerY + 250),
  );
  anime({ duration: 200 }).finished.then(autoClick);
};
