hexo.extend.helper.register('arkTags', function (options = {}) {
  const env = this
  let source = options.source
  const limit = options.limit
  const posts = options.posts

  let result = ''
  if (limit > 0) {
    source = source.limit(limit)
  }

  source.forEach(tag => {

    result += `<a class="ark-tags-box" href="${env.url_for(tag.path)}"><span class="ark-tags-name-box"><span class="ark-tags-name">${tag.name}</span></span><span class="ark-tags-length" style="--percentage: calc(${tag.length}/${posts} * 100%)">${tag.length}</span></a>`
  })
  return result
})