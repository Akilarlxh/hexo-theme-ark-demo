'use strict'

hexo.extend.helper.register('swiper_list', function (locals) {
  var posts_list = hexo.locals.get('posts').data;
  var swiper_list = []
  // 若文章的front_matter内设置了index和描述，则将其放到swiper_list内
  for (var item of posts_list) {
    if (item.swiper_index) {
      swiper_list.push(item)
    }
  }
  // 对swiper_list进行处理，使其按照index大小进行排序
  function sortNumber(a, b) {
    return a.swiper_index - b.swiper_index
  }
  swiper_list = swiper_list.sort(sortNumber);
  // 排序反转，使得数字越大越靠前
  swiper_list = swiper_list.reverse();
  return swiper_list;
})