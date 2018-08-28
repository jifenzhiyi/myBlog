// 判断数据类型
const type = (o) => {
  const s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null', 'undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp'].forEach(() => {
  window.typeIs = o => (type(o));
});

// 创建深copy方法
window.deepCloneTest = (initalObj, finalObj) => {
  const obj = finalObj || {};
  initalObj.forEach((item, i) => {
    if (typeof item === 'object') {
      obj[i] = (item.constructor === Array) ? [] : Object.create(item);
    } else {
      obj[i] = item;
    }
  });
  return obj;
};

window.log = (...message) => {
  let html = '<div>';
  message.forEach((item) => {
    if (window.typeIs(item) === 'object') {
      html += (JSON && JSON.stringify ? JSON.stringify(item) : item);
    } else {
      html += `${item} `;
    }
  });
  html += '</div>';
  html = html.replace(/<div>\\n/gi, '<h3>')
    .replace(/\\n {2}<\/div>/gi, '</h3>')
    .replace(/\(tab\)/gi, '&nbsp;&nbsp;')
    .replace(/\(func_color\)/gi, '<div class="func_color">');
  document.getElementById('log').innerHTML += html;
};
