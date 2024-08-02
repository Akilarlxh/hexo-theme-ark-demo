'use strict'

function wow (args, content) {
  args = args.join(' ').split(',')
  let p0 = args[0]?args[0].trim():''
  let p1 = args[1]?args[1].trim():''
  let p2 = args[2]?args[2].trim():''
  let p3 = args[3]?args[3].trim():''
  let p4 = args[4]?args[4].trim():''
  return `<div class='wow ${p0}' data-wow-duration='${p1}' data-wow-delay='${p2}' data-wow-offset='${p3}'  data-wow-iteration='${p4}' >${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`
}

hexo.extend.tag.register('wow',wow,{ ends: true });
