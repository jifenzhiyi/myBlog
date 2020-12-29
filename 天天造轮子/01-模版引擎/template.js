module.exports = {
  compile(template) {
    // 转换template
    template = template.replace(/\{\{(.+)\}\}/g, function() {
      let key = arguments[1].trim();
      return '${'+key+'}';
    });
    const body = "let str = ''; with(obj) { str += `" + template + "`} return str";
    return new Function('obj', body);
  }
}