wow = new WOW({
  boxClass: 'wow',
  // 当用户滚动时显示隐藏框的类名称
  animateClass: 'animate__animated',
  // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）
  offset: 0,
  // 定义浏览器视口底部与隐藏框顶部之间的距离。
  // 当用户滚动并到达此距离时，将显示隐藏的框。
  mobile: false,
  // 在移动设备上打开/关闭wow.js。
  // 经测试此项配置无效。
  live: true
  // 在页面上检查新的 wow.js元素。
})
wow.init();
