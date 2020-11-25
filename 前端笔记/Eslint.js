const rules = {
  // 常用规则列表设置 rules
  'no-extra-semi': 2, // 提示不必要的分号
  'consistent-return': 0, // return 后面是否允许省略
  'no-var': 2, // 使用let和const代替var
  /* linebreak-style
  在--fix命令行上的选项可以自动修复一些被这条规则反映的问题
  其实就是Windows 和 Mac版本做一些代码兼容
  */
  'linebreak-style': [0, 'windows'],
  'max-len': 0, // 一行代码的最大长度限制，增加代码的可读性
  'no-new': 0, // 是否需要使用new构造函数的时候存储结果
  'no-undef': 'warn', // 任何对未声明的变量的引用都会导致警告
  'import/no-unresolved': 0, // import使用@别名时eslint识别忽略
  'import/prefer-default-export': 2, // import中的内容只有一个需要设置default
  'no-param-reassign': 2, // 能否修改赋值给声明为函数参数的变量
  'no-unused-expressions': 2, // 对程序状态没有影响的未使用表达式表示逻辑错误
  'no-plusplus': 0, // 是否允许使用一元运算符++和--
  'no-extra-boolean-cast': 'warn', // 该规则禁止不必要的布尔转换
  // 常用设置
  'no-var': 2,
  'no-extra-semi': 2,
  'linebreak-style': [0, 'windows'],
  'max-len': [2, 100],
  'no-new': 2,
  'import/no-unresolved': 0,
  'import/prefer-default-export': 2,
  'no-unused-expressions': 2,
}
