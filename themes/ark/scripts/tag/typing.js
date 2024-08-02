'use strict';

function typing(args) {
  return `<p class="typing">${args}</p>`;
}

hexo.extend.tag.register('typing',typing);
