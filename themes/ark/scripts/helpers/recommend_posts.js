/**
 * Butterfly
 * Related Posts
 * According the tag
 */

'use strict'

hexo.extend.helper.register('related_posts', function (currentPost, allPosts) {
  let relatedPosts = []
  currentPost.tags.forEach(function (tag) {
    allPosts.forEach(function (post) {
      if (isTagRelated(tag.name, post.tags)) {
        const relatedPost = {
          title: post.title,
          subtitle: post.subtitle ? post.subtitle : post.title,
          descr: post.description ? post.description : post.title,
          path: post.path,
          cover: post.cover,
          randomcover: post.randomcover,
          weight: 1,
          updated: post.updated,
          created: post.date
        }
        const index = findItem(relatedPosts, 'path', post.path)
        if (index !== -1) {
          relatedPosts[index].weight += 1
        } else {
          if (currentPost.path !== post.path) {
            relatedPosts.push(relatedPost)
          }
        }
      }
    })
  })
  if (relatedPosts.length === 0) {
    return ''
  }
  let result = ''
  const hexoConfig = hexo.config
  const config = hexo.theme.config

  const limitNum = config.related_post.limit || 6
  const dateType = config.related_post.date_type || 'created'
  const headlineLang = this._p('post.recommend')

  relatedPosts = relatedPosts.sort(compare('weight'))

  if (relatedPosts.length > 0) {
    result += '<input class="card-widget-visible" id="card-recommend-post-anchor" type="radio" name="card-widget-visible" value="card-recommend-post"><div class="card-widget card-recommend-post">'
    result += `<div class="item-headline"><i class="fas fa-dharmachakra"></i><span>${headlineLang}</span></div>`
    result += '<div class="aside-list">'
    for (let i = 0; i < Math.min(relatedPosts.length, limitNum); i++) {
      const cover =
        relatedPosts[i].cover === false
          ? relatedPosts[i].randomcover
          : relatedPosts[i].cover
      const title = this.escape_html(relatedPosts[i].title)
      result += `<div class="aside-list-item">`
      result += `<a class="thumbnail" href="${this.url_for(relatedPosts[i].path)}" title="${relatedPosts[i].descr}"><img src="${this.url_for(cover)}" alt="${relatedPosts[i].descr}"></a>`
      result += `<div class="content">`
      result += `<a class="title" href="${this.url_for(relatedPosts[i].path)}" title="${title}">${title}</a>`
      if (dateType === 'created') {
        result += `<time datetime="${this.date(relatedPosts[i].created, hexoConfig.date_format)}" title="发表于 ${this.date(relatedPosts[i].created, hexoConfig.date_format)}">${this.date(relatedPosts[i].created, hexoConfig.date_format)}</time>`
      } else {
        result += `<time datetime="${this.date(relatedPosts[i].updated, hexoConfig.date_format)}" title="发表于 ${this.date(relatedPosts[i].updated, hexoConfig.date_format)}">${this.date(relatedPosts[i].updated, hexoConfig.date_format)}</time>`
      }
      result += `</div></div>`
    }
    result += '</div></div>'
    return result
  }
})

function isTagRelated (tagName, TBDtags) {
  let result = false
  TBDtags.forEach(function (tag) {
    if (tagName === tag.name) {
      result = true
    }
  })
  return result
}

function findItem (arrayToSearch, attr, val) {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][attr] === val) {
      return i
    }
  }
  return -1
}

function compare (attr) {
  return function (a, b) {
    const val1 = a[attr]
    const val2 = b[attr]
    return val2 - val1
  }
}
