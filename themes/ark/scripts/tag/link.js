'use strict';

// {% link title, url %}
// {% link title, url, img %}
hexo.extend.tag.register('link', function(args) {
  var configtemp = hexo.config.tag_plugins || hexo.theme.config.tag_plugins
  args = args.join(' ').split(',')
  let text = args[0];
  let url = args[1];
  let img = args[2];
  // 获取网页favicon
  let urlNoProtocol = url.replace(/^https?\:\/\//i, "");
  let imgUrl = "https://api.iowen.cn/favicon/" + urlNoProtocol + ".png";
  let result = '';
  // 发现如果不套一层 div 在其它可渲染 md 的容器中容易被分解
  result += '<div class="tag link"><a class="link-card" title="' + text + '" href="' + url + '">';
  // left
  result += '<div class="left">';
  result += '<img src="' + (img || imgUrl) + '"/>';
  result += '</div>';
  // right
  result += '<div class="right"><p class="text">' + text + '</p><p class="url">' + url + '</p></div>';
  result += '</a></div>';

  return result;
});

hexo.extend.tag.register('linkgroup', function(args, content) {
  let ret = '';
  ret += '<div class="link-group">';
  ret += content;
  ret += '</div>';
  return ret;
}, {ends: true});
