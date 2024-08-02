hexo.extend.helper.register('arkIcon', function () {
  var icon = [
      '#icon-fukong',
      '#icon-fan',
      '#icon-partial-discharge',
      '#icon-menu-zizhanbaowei',
      '#icon-YunTai-unfold',
      '#icon-camera-GOTO_PRESET',
      '#icon-d3',
      '#icon-copy',
      '#icon-config'
  ]
  // var icon = [
  //   '#icon-denglong',
  //   '#icon-qiandai',
  //   '#icon-denglong2',
  //   '#icon-juanzhou',
  //   '#icon-hongbao',
  //   '#icon-duilian',
  //   '#icon-bianpao',
  //   '#icon-shanzi',
  //   '#icon-tangguo',
  //   '#icon-yuanbao',
  //   '#icon-qianchuan'
  // ]
  var index = Math.floor(Math.random()*icon.length);
  return icon[index]
});