---
title: Tag Plugins Plus
subtitle: 基于Butterfly的外挂标签引入
businesscard: true
top_img:
cover:
highlight_shrink: false
swiper_index: 10
tags:
  - "\U0001F4C1Hexo"
  - "\U0001F98BButterfly"
categories: "\U0001F361Akilarの糖葫芦"
description: 添加大量外挂标签样式。
abbrlink: 615e2dec
date: 2020-11-14 15:55:44
updated: 2022-04-29 15:29:37
comments:
---
{% tip home %}
如有使用了本站的外挂标签插件的读者，请确保自己的配置内容为最新。

同理，若您在使用本帖教程后，发现样式无法完全还原文档内效果，请重点排查您的其余第三方魔改css样式，例如css中是否存在**circle**、**square**等易重class名。
{% endtip %}
{% folding red , 点开查看开发记录 %}

{% note blue 'fas fa-bullhorn' modern %}
本文所涉及的样式，主要参考的是各类已有主题，并对相应styl文件进行样式修改以及添加夜间模式适配。已尽可能追根溯源找到了各部分魔改内容最初的作者，如有错误和遗漏还请联系我修改。
{% endnote %}

{% timeline 开发记录,green %}
<!-- timeline 2022-04-29:发布插件版v1.0.17 -->
1. 在bubble气泡外挂标签基础上新增reference引用文献标签
2. 修复了bubble气泡外挂标签层级过高遮挡提示框的bug
<!-- endtimeline -->
<!-- timeline 2022-04-28:发布插件版v1.0.16 -->
1. 移除timeline外挂标签，请使用butterfly新版自带的timeline标签，效果更好。
2. 修复tip标签自定义图标无效的bug
<!-- endtimeline -->
<!-- timeline 2022-04-07:发布插件版v1.0.15 -->
1. 调整气泡显隐动画逻辑，避免透明度变换瞬间遮挡到正文。
<!-- endtimeline -->
<!-- timeline 2022-04-07:发布插件版v1.0.14 -->
1. 新增气泡注释bubble标签样式。效果比nota标签更好。
2. 支持自定义气泡背景色。
<!-- endtimeline -->
<!-- timeline 2022-03-03:发布插件版v1.0.13 -->
1. 新增开关逻辑，iconfont，carousel设为false则不引入。
2. site标签新增灯箱屏蔽，不再支持点击放大图片。
<!-- endtimeline -->
<!-- timeline 2022-02-14:发布插件版v1.0.12 -->
1. 剔除了link卡片的无效css
<!-- endtimeline -->
<!-- timeline 2022-01-26:发布插件版v1.0.11 -->
1. butterfly_v4.0新增了`timeline`标签，与本插件标签名冲突。可以选择改用标签文档中的源码配置方案并剔除timeline标签或者删除主题原有的timeline标签文件`Blogroot\themes\butterfly\scripts\tag\timeline.js`和`Blogroot\themes\butterfly\source\css\_tags\timeline.styl`。（总之不能共存）
2. 修复了carousel标签刷新后不加载的bug。
<!-- endtimeline -->
<!-- timeline 2021-12-23:发布插件版v1.0.10 -->
1. 将所有CDN链接迁移至`unpkg.zhimg.com`
2. 外露所有CDN配置项，支持读者自行更改CDN源
<!-- endtimeline -->
<!-- timeline 2021-12-09:发布插件版v1.0.9 -->
1. 调整`link`标签的默认图片缺省值适配，新增`tag_plugins.link.placeholder`配置项。
2. 因为新增了默认图片，新增配置项，所以需要更新版本。如果本身使用link标签就有自己加图片的习惯的，无需升级。
  ```bash
  npm install hexo-butterfly-tag-plugins-plus@1.0.9 --save
  ```
<!-- endtimeline -->
<!-- timeline 2021-12-07:发布插件版v1.0.5 -->
1. 调整`folding`标签，解决与twikoo设置面板样式的冲突问题
2. 因为调整了`folding`标签的编译函数，低版本会出现folding样式失效的情况，请各位更新至最新版本。
  ```bash
  npm install hexo-butterfly-tag-plugins-plus@1.0.5 --save
  ```
<!-- endtimeline -->
<!-- timeline 2021-12-01:发布插件版v1.0.4 -->
1. 调整`tip`标签，字体垂直居中
<!-- endtimeline -->
<!-- timeline 2021-08-06:发布插件版v1.0.3 -->
1. 新增`carousel`旋转相册
<!-- endtimeline -->
<!-- timeline 2021-07-07:发布插件版v1.0.0 -->
1. 使用npm插件安装。
2. 测试版本为butterfly_v3.1.0、3.3.0、3.7.8、3.8.0
3. 插件写法调整为高内聚，理论上不受butterfly主题版本影响。
4. 为了获得完整效果，建议打开主题的beautify配置项和theme_color配置项。
<!-- endtimeline -->
<!-- timeline 2021-03-19:正式版v1.61 -->
1. 修复行内图片换行错误。
<!-- endtimeline -->
<!-- timeline 2021-02-24:正式版v1.6 -->
1. 新增一个样式标签，进度条progress
<!-- endtimeline -->
<!-- timeline 2020-12-31:正式版v1.5 -->
1. 新增两个样式标签，github徽标ghbdage和特效标签wow
2. 移除静态资源中的`fontawesome-animation.min.css`以及`issues.js`，改为CDN引用。
3. 本帖不专门提供特效标签wow的配置方案，若有需要，请查看站内教程[使用wowjs给博客添加动画效果](/posts/abab51cf/)

<!-- endtimeline -->
<!-- timeline 2020-12-17:正式版v1.4 -->
1. 新增两个样式标签poem和icon
2. 修复了folding标签嵌套字体逐级放大的bug。
3. 不再更新v3.4.0以下版本的适配内容。
<!-- endtimeline -->
<!-- timeline 2020-12-13:正式版v1.3 -->
1. 新增Butterfly_v3.4.0的配置文件。
2. 请读者根据自己的主题版本选择替换。
<!-- endtimeline -->
<!-- timeline 2020-12-07:正式版v1.21 -->
1. 资源文件无任何改动。
2. 更新了动态标签的使用说明。补全参数配置，更换示例。使得教程更加通俗易懂。
<!-- endtimeline -->
<!-- timeline 2020-12-03:正式版v1.2 -->
1. 新增当初弃用的issues.js标签，以配合友链魔改教程中的issues自动更新功能。
2. 更新了静态资源文件，请之前的读者重新覆盖安装。
3. 修改了`fontawesome-animation.min.css`的引入方式，改成使用`@import`注入`index.css`。
<!-- endtimeline -->
<!-- timeline 2020-11-16:正式版v1.1 -->
1. 新增tip.js，将小康大佬的渐变色上标标签写法从HTML的方式改成用标签语法编写。
2. 新增动态标签样式anima，使用了fontawesome-animation项目。
3. 新增标签内容夜间模式适配。
<!-- endtimeline -->
<!-- timeline 2020-11-15:正式版v1.0 -->
1. 基本完成Volantis外挂标签移植。
2. 移除了btn标签，因为存在冲突。而且不如butterfly自带的button样式好看。
3. 适配了folding标签的夜间模式。
4. 打包了静态资源文件，上传蓝奏云。
<!-- endtimeline -->
<!-- timeline 2020-11-14:内测版v0.05 -->
1. 主要使用了[Volantis](https://github.com/volantis-x/hexo-theme-volantis)的标签样式。引入`[tag].js`，并针对`butterfly`主题修改了相应的`[tag].styl`。在此鸣谢`Volantis`主题众开发者。
2. 主要参考内容
  - [Volantis文档:内置标签插件](https://volantis.js.org/tag-plugins/)
  - [Butterfly 安装文档:标签外挂（Tag Plugins）](https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89)
  - [小弋の生活馆全样式预览](https://lovelijunyi.gitee.io/posts/c898.html)
  - [l-lin-font-awesome-animation](https://github.com/l-lin/font-awesome-animation)
  - [小康的butterfly主题使用文档](https://www.antmoe.com/posts/3b43914f/)
<!-- endtimeline -->
{% endtimeline %}
{% endfolding %}
{% tabs 配置方案,1 %}
<!-- tab npm插件安装方案（推荐） -->
1. 安装插件,在博客根目录`[Blogroot]`下打开终端，运行以下指令：
  ```bash
  npm install hexo-butterfly-tag-plugins-plus --save
  ```
  考虑到hexo自带的markdown渲染插件`hexo-renderer-marked`与外挂标签语法的兼容性较差，建议您将其替换成[hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed)
  ```bash
  npm uninstall hexo-renderer-marked --save
  npm install hexo-renderer-kramed --save
  ```
2. 添加配置信息，以下为写法示例
    在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加
  ```yaml
  # tag-plugins-plus
  # see https://akilar.top/posts/615e2dec/
  tag_plugins:
    enable: true # 开关
    priority: 5 #过滤器优先权
    issues: false #issues标签依赖注入开关
    link:
      placeholder: /img/link.png #link_card标签默认的图标图片
    CDN:
      anima: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/font-awesome-animation.min.css #动画标签anima的依赖
      jquery: https://npm.elemecdn.com/jquery@latest/dist/jquery.min.js #issues标签依赖
      issues: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/issues.js #issues标签依赖
      iconfont: //at.alicdn.com/t/font_2032782_8d5kxvn09md.js #参看https://akilar.top/posts/d2ebecef/
      carousel: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/carousel-touch.js
      tag_plugins_css: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/tag_plugins.css
  ```
3. 参数释义

|参数|备选值/类型|释义|
|:--|:--|:--|
|enable|true/false|【必选】控制开关|
|priority|number|【可选】过滤器优先级，数值越小，执行越早，默认为10，选填|
|issues|true/false|【可选】issues标签控制开关，默认为false|
|link.placeholder|【必选】link卡片外挂标签的默认图标|
|CDN.anima|URL|【可选】动画标签anima的依赖|
|CDN.jquery|URL|【可选】issues标签依赖|
|CDN.issues|URL|【可选】issues标签依赖|
|CDN.iconfont|URL|【可选】iconfont标签symbol样式引入，如果不想引入，则设为false|
|CDN.carousel|URL|【可选】carousel旋转相册标签鼠标拖动依赖，如果不想引入则设为false|
|CDN.tag_plugins_css|URL|【可选】外挂标签样式的CSS依赖，为避免CDN缓存延迟，建议将@latest改为具体版本号|
<!-- endtab -->
<!-- tab 源码修改配置方案 -->
{% tip info %}
源码修改配置方案适用于不想应用全部外挂标签的用户，供熟悉外挂标签原理的用户自行选择装配需要的标签文件。
{% endtip %}
1. 下载资源文件
{% ghcard Akilarlxh/hexo-butterfly-tag-plugins-plus, theme="vue" %}
2. 将下载的`hexo-butterfly-tag-plugins-plus.zip`解压得到资源文件夹,下文以`[tag_plugins_file]`指代该文件夹。
3. 将`[tag_plugins_file]\lib\scripts`目录下的文件放到`[Blogroot]\themes\butterfly\scripts\tag\`文件夹内。
4. 将`[tag_plugins_file]\lib\style`目录下的文件放到`[Blogroot]\themes\butterfly\source\css\tags\`文件夹内。
5. 修改`[Blogroot]\_config.butterfly.yml`的`inject`配置项，添加`CDN`依赖项。由于`issues`写入`timeline`和`site-card`标签要用到`jquery`，请务必根据注释指示的版本决定是否添加。
  ```yml
  inject:
    head:
      - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css"  media="defer" onload="this.media='all'">  #动画标签anima的依赖
      - <script async src="https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/carousel-touch.min.js"></script> #carousel相册鼠标动作的依赖
    bottom:
      - <script defer src="https://npm.elemecdn.com/jquery@latest/dist/jquery.min.js"></script>
      # 自butterfly_v3.4.0+开始，主题基本实现去jquery化，需要自己添加引用，请读者根据版本自行决定是否添加这行引用。
      - <script defer src="https://npm.elemecdn.com/hexo-theme-volantis@4.3.1/source/js/issues.js"></script>
      #数据集合标签issues的依赖
  ```
5. 考虑到hexo自带的markdown渲染插件`hexo-renderer-marked`与外挂标签语法的兼容性较差，建议您将其替换成[hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed)
  ```bash
  npm uninstall hexo-renderer-marked --save
  npm install hexo-renderer-kramed --save
  ```
6. 外挂标签使用方案请参阅下文。
<!-- endtab -->
{% endtabs %}

## 行内文本样式 text
{% tabs text,2 %}
<!-- tab 标签语法 -->
```markdown
{% u 文本内容 %}
{% emp 文本内容 %}
{% wavy 文本内容 %}
{% del 文本内容 %}
{% kbd 文本内容 %}
{% psw 文本内容 %}
```
<!-- endtab -->
<!-- tab 样式预览 -->
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
```
<!-- endtab -->
{% endtabs%}


## 行内文本 span
{% tabs span,3 %}
<!-- tab 标签语法 -->
```markdown
{% span 样式参数(参数以空格划分), 文本内容 %}
```
<!-- endtab -->
<!-- tab 配置参数 -->
1. 字体: logo, code
2. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
3. 大小: small, h4, h3, h2, h1, large, huge, ultra
4. 对齐方向: left, center, right
<!-- endtab -->
<!-- tab 样式预览 -->
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% span center logo large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% span center logo large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}
```
<!-- endtab -->
{% endtabs%}


## 段落文本 p
{% tabs p,3 %}
<!-- tab 标签语法 -->
```markdown
{% p 样式参数(参数以空格划分), 文本内容 %}
```
<!-- endtab -->
<!-- tab 配置参数 -->
1. 字体: logo, code
2. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
3. 大小: small, h4, h3, h2, h1, large, huge, ultra
4. 对齐方向: left, center, right
<!-- endtab -->
<!-- tab 样式预览 -->
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
```
<!-- endtab -->
{% endtabs%}


## 引用 note

{% note warning %}
最新版`butterfly`标签支持引用`fontawesome V5`图标，效果上已经优于`volantis`的note标签。故不再额外引入`volantis的note样式`。~~做样式适配好麻烦的啊，能偷懒就偷懒吧~~
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
以下是`butterfly`主题的note写法。
{% endnote %}
{% tabs note,4 %}
<!-- tab 通用配置 -->
修改主题配置文件
```yml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```
`Note`标签外挂有两种用法。`icons`和`light_bg_offset`只对方法一生效。
<!-- endtab -->
<!-- tab 语法格式 -->
{% folding cyan , 方法一 %}
```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```
{% endfolding %}

{% folding blue , 方法二 %}
```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```
{% endfolding %}
<!-- endtab -->
<!-- tab 配置参数 -->
{% folding cyan , 方法一 %}
|参数|用法|
|:--|:-------------|
|class|【可选】标识，不同的标识有不同的配色<br>（ default / primary / success / info / warning / danger ）|
|no-icon|【可选】不显示 icon|
|style|	【可选】可以覆盖配置中的 style<br>（simple/modern/flat/disabled）|
{% endfolding %}
{% folding blue , 方法二 %}
|参数|用法|
|:--|:-------------|
|class|【可选】标识，不同的标识有不同的配色<br>（ default / blue / pink / red / purple / orange / green ）|
|no-icon|【可选】可配置自定义 icon (只支持 fontawesome 图标, 也可以配置 no-icon )|
|style|	【可选】可以覆盖配置中的 style<br>（simple/modern/flat/disabled）|
{% endfolding %}

<!-- endtab -->
<!-- tab 样式预览 -->
{% folding cyan , 方法一 %}

1. `simple`样式

  {% note simple %}默认 提示块标签{% endnote %}

  {% note default simple %}default 提示块标签{% endnote %}

  {% note primary simple %}primary 提示块标签{% endnote %}

  {% note success simple %}success 提示块标签{% endnote %}

  {% note info simple %}info 提示块标签{% endnote %}

  {% note warning simple %}warning 提示块标签{% endnote %}

  {% note danger simple %}danger 提示块标签{% endnote %}

2. `modern`样式

  {% note modern %}默认 提示块标签{% endnote %}

  {% note default modern %}default 提示块标签{% endnote %}

  {% note primary modern %}primary 提示块标签{% endnote %}

  {% note success modern %}success 提示块标签{% endnote %}

  {% note info modern %}info 提示块标签{% endnote %}

  {% note warning modern %}warning 提示块标签{% endnote %}

  {% note danger modern %}danger 提示块标签{% endnote %}

3. `flat`样式

  {% note flat %}默认 提示块标签{% endnote %}

  {% note default flat %}default 提示块标签{% endnote %}

  {% note primary flat %}primary 提示块标签{% endnote %}

  {% note success flat %}success 提示块标签{% endnote %}

  {% note info flat %}info 提示块标签{% endnote %}

  {% note warning flat %}warning 提示块标签{% endnote %}

  {% note danger flat %}danger 提示块标签{% endnote %}

4. `disabled`样式

  {% note disabled %}默认 提示块标签{% endnote %}

  {% note default disabled %}default 提示块标签{% endnote %}

  {% note primary disabled %}primary 提示块标签{% endnote %}

  {% note success disabled %}success 提示块标签{% endnote %}

  {% note info disabled %}info 提示块标签{% endnote %}

  {% note warning disabled %}warning 提示块标签{% endnote %}

  {% note danger disabled %}danger 提示块标签{% endnote %}

5. `no-icon`样式

  {% note no-icon %}默认 提示块标签{% endnote %}

  {% note default no-icon %}default 提示块标签{% endnote %}

  {% note primary no-icon %}primary 提示块标签{% endnote %}

  {% note success no-icon %}success 提示块标签{% endnote %}

  {% note info no-icon %}info 提示块标签{% endnote %}

  {% note warning no-icon %}warning 提示块标签{% endnote %}

  {% note danger no-icon %}danger 提示块标签{% endnote %}

{% endfolding %}
{% folding blue , 方法二 %}

1. simple样式

  {% note 'fab fa-cc-visa' simple %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' simple %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' simple %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' simple%}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' simple %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' simple %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' simple %}前端最讨厌的浏览器{% endnote %}

2. modern样式

  {% note 'fab fa-cc-visa' modern %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' modern %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' modern %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' modern%}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' modern %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' modern %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' modern %}前端最讨厌的浏览器{% endnote %}

3. flat样式

  {% note 'fab fa-cc-visa' flat %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' flat %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' flat %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' flat%}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' flat %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' flat %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' flat %}前端最讨厌的浏览器{% endnote %}


4. disabled样式

  {% note 'fab fa-cc-visa' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' disabled %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' disabled %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' disabled %}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' disabled %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' disabled %}前端最讨厌的浏览器{% endnote %}

5. no-icon样式

  {% note no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue no-icon %}2021年快到了....{% endnote %}

  {% note pink no-icon %}小心开车 安全至上{% endnote %}

  {% note red no-icon %}这是三片呢？还是四片？{% endnote %}

  {% note orange no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple no-icon %}剪刀石头布{% endnote %}

  {% note green no-icon %}前端最讨厌的浏览器{% endnote %}

{% endfolding %}

<!-- endtab -->
<!-- tab 示例源码 -->
{% folding cyan , 方法一 %}


1. `simple`样式

  ```markdown
  {% note simple %}默认 提示块标签{% endnote %}

  {% note default simple %}default 提示块标签{% endnote %}

  {% note primary simple %}primary 提示块标签{% endnote %}

  {% note success simple %}success 提示块标签{% endnote %}

  {% note info simple %}info 提示块标签{% endnote %}

  {% note warning simple %}warning 提示块标签{% endnote %}

  {% note danger simple %}danger 提示块标签{% endnote %}
  ```

2. `modern`样式

  ```markdown
  {% note modern %}默认 提示块标签{% endnote %}

  {% note default modern %}default 提示块标签{% endnote %}

  {% note primary modern %}primary 提示块标签{% endnote %}

  {% note success modern %}success 提示块标签{% endnote %}

  {% note info modern %}info 提示块标签{% endnote %}

  {% note warning modern %}warning 提示块标签{% endnote %}

  {% note danger modern %}danger 提示块标签{% endnote %}
  ```

3. `flat`样式

  ```markdown
  {% note flat %}默认 提示块标签{% endnote %}

  {% note default flat %}default 提示块标签{% endnote %}

  {% note primary flat %}primary 提示块标签{% endnote %}

  {% note success flat %}success 提示块标签{% endnote %}

  {% note info flat %}info 提示块标签{% endnote %}

  {% note warning flat %}warning 提示块标签{% endnote %}

  {% note danger flat %}danger 提示块标签{% endnote %}
  ```

4. `disabled`样式

  ```markdown
  {% note disabled %}默认 提示块标签{% endnote %}

  {% note default disabled %}default 提示块标签{% endnote %}

  {% note primary disabled %}primary 提示块标签{% endnote %}

  {% note success disabled %}success 提示块标签{% endnote %}

  {% note info disabled %}info 提示块标签{% endnote %}

  {% note warning disabled %}warning 提示块标签{% endnote %}

  {% note danger disabled %}danger 提示块标签{% endnote %}
  ```

5. `no-icon`样式

  ```markdown
  {% note no-icon %}默认 提示块标签{% endnote %}

  {% note default no-icon %}default 提示块标签{% endnote %}

  {% note primary no-icon %}primary 提示块标签{% endnote %}

  {% note success no-icon %}success 提示块标签{% endnote %}

  {% note info no-icon %}info 提示块标签{% endnote %}

  {% note warning no-icon %}warning 提示块标签{% endnote %}

  {% note danger no-icon %}danger 提示块标签{% endnote %}
  ```

{% endfolding %}
{% folding blue , 方法二 %}

1. `simple`样式

  ```markdown
  {% note 'fab fa-cc-visa' simple %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' simple %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' simple %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' simple%}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' simple %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' simple %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' simple %}前端最讨厌的浏览器{% endnote %}
  ```

2. `modern`样式

  ```markdown
  {% note 'fab fa-cc-visa' modern %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' modern %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' modern %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' modern%}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' modern %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' modern %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' modern %}前端最讨厌的浏览器{% endnote %}
  ```

3. `flat`样式

  ```markdown
  {% note 'fab fa-cc-visa' flat %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' flat %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' flat %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' flat%}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' flat %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' flat %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' flat %}前端最讨厌的浏览器{% endnote %}
  ```

4. `disabled`样式

  ```markdown
  {% note 'fab fa-cc-visa' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue 'fas fa-bullhorn' disabled %}2021年快到了....{% endnote %}

  {% note pink 'fas fa-car-crash' disabled %}小心开车 安全至上{% endnote %}

  {% note red 'fas fa-fan' disabled %}这是三片呢？还是四片？{% endnote %}

  {% note orange 'fas fa-battery-half' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple 'far fa-hand-scissors' disabled %}剪刀石头布{% endnote %}

  {% note green 'fab fa-internet-explorer' disabled %}前端最讨厌的浏览器{% endnote %}
  ```

5. `no-icon`样式

  ```markdown
  {% note no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note blue no-icon %}2021年快到了....{% endnote %}

  {% note pink no-icon %}小心开车 安全至上{% endnote %}

  {% note red no-icon %}这是三片呢？还是四片？{% endnote %}

  {% note orange no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}

  {% note purple no-icon %}剪刀石头布{% endnote %}

  {% note green no-icon %}前端最讨厌的浏览器{% endnote %}
  ```
{% endfolding %}

<!-- endtab -->
{% endtabs %}

## 上标标签 tip

{% tip cogs %}
主要样式参考自[小康的butterfly渐变背景标签](https://www.antmoe.com/posts/3b43914f/),自己写了个`tip.js`来渲染标签，精简了一下代码。
{% endtip %}

{% tabs tip,3 %}
<!-- tab 标签语法 -->
```markdown
{% tip [参数，可选] %}文本内容{% endtip %}
```
<!-- endtab -->
<!-- tab 配置参数 -->
1. 样式: success,error,warning,bolt,ban,home,sync,cogs,key,bell
2. 自定义图标: 支持fontawesome。
<!-- endtab -->
<!-- tab 样式预览 -->
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
```
<!-- endtab -->
{% endtabs%}

## 动态标签 anima
{% tip fa-gamepad faa-horizontal animated %}
动态标签的实质是引用了[font-awesome-animation](https://github.com/l-lin/font-awesome-animation)的css样式，不一定局限于tip标签，也可以是其他标签。
只不过这里`tip.js`是我自己写的，所以我清楚它会怎么被渲染成html，才用的这个写法。
可以熟读文档，使用html语言来编写其他标签类型。{% endtip %}

{% tabs tip,3 %}

<!-- tab 标签语法 -->
```markdown
{% tip [参数，可选] %}文本内容{% endtip %}
```
<!-- endtab -->
<!-- tab 配置参数 -->


{% note blue 'fas fa-bullhorn' simple %}
更多详情请参看[font-awesome-animation文档](http://l-lin.github.io/font-awesome-animation/)
1. 将所需的CSS类添加到图标（或DOM中的任何元素）。
2. 对于父级悬停样式，需要给目标元素添加指定CSS类，同时还要给目标元素的父级元素添加CSS类`faa-parent animated-hover`。（详情见示例及示例源码）
You can regulate the speed of the animation by adding the CSS class or . faa-fastfaa-slow
3. 可以通过给目标元素添加CSS类`faa-fast`或`faa-slow`来控制动画快慢。
{% endnote %}

|On DOM load<br>当页面加载时<br>显示动画|On hover<br>当鼠标悬停时<br>显示动画|On parent hover<br>当鼠标悬停<br>在父级元素时<br>显示动画|
|:-----|:-----|:-----|
|<span><i class="fas fa-wrench faa-wrench animated"></i>&nbsp;faa-wrench animated</span>|<span><i class="fas fa-wrench faa-wrench animated-hover"></i>&nbsp;faa-wrench animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-wrench faa-wrench"></i>&nbsp;faa-wrench</span>|
|<span><i class="fas fa-bell faa-ring animated"></i>&nbsp;faa-ring animated</span>|<span><i class="fas fa-bell faa-ring animated-hover"></i>&nbsp;faa-ring animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-bell faa-ring"></i>&nbsp;faa-ring</span>|
|<span><i class="fas fa-envelope faa-horizontal animated"></i>&nbsp;faa-horizontal animated</span>|<span><i class="fas fa-envelope faa-horizontal animated-hover"></i>&nbsp;faa-horizontal animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-envelope faa-horizontal"></i>&nbsp;faa-horizontal</span>|
|<span><i class="fas fa-thumbs-up faa-vertical animated"></i>&nbsp;faa-vertical animated</span>|<span><i class="fas fa-thumbs-up faa-vertical animated-hover"></i>&nbsp;faa-vertical animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-thumbs-up faa-vertical"></i>&nbsp;faa-vertical</span>|
|<span><i class="fas fa-exclamation-triangle faa-flash animated"></i>&nbsp;faa-flash animated</span>|<span><i class="fas fa-exclamation-triangle faa-flash animated-hover"></i>&nbsp;faa-flash animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-exclamation-triangle faa-flash"></i>&nbsp;faa-flash</span>|
|<span><i class="fas fa-thumbs-up faa-bounce animated"></i>&nbsp;faa-bounce animated</span>|<span><i class="fas fa-thumbs-up faa-bounce animated-hover"></i>&nbsp;faa-bounce animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-thumbs-up faa-bounce"></i>&nbsp;faa-bounce</span>|
|<span><i class="fas fa-spinner faa-spin animated"></i>&nbsp;faa-spin animated</span>|<span><i class="fas fa-spinner faa-spin animated-hover"></i>&nbsp;faa-spin animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-spinner faa-spin"></i>&nbsp;faa-spin</span>|
|<span><i class="fas fa-plane faa-tada animated"></i>&nbsp;faa-tada animated</span>|<span><i class="fas fa-plane faa-tada animated-hover"></i>&nbsp;faa-tada animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-plane faa-tada"></i>&nbsp;faa-tada</span>|
|<span><i class="fas fa-heart faa-pulse animated"></i>&nbsp;faa-pulse animated</span>|<span><i class="fas fa-heart faa-pulse animated-hover"></i>&nbsp;faa-pulse animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-heart faa-pulse"></i>&nbsp;faa-pulse</span>|
|<span><i class="fas fa-envelope faa-shake animated"></i>&nbsp;faa-shake animated</span>|<span><i class="fas fa-envelope faa-shake animated-hover"></i>&nbsp;faa-shake animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-envelope faa-shake"></i>&nbsp;faa-shake</span>|
|<span><i class="fas fa-trophy faa-tada animated"></i>&nbsp;faa-tada animated</span>|<span><i class="fas fa-trophy faa-tada animated-hover"></i>&nbsp;faa-tada animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-trophy faa-tada"></i>&nbsp;faa-tada</span>|
|<span><i class="fas fa-space-shuttle faa-passing animated"></i>&nbsp;faa-passing animated</span>|<span><i class="fas fa-space-shuttle faa-passing animated-hover"></i>&nbsp;faa-passing animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-space-shuttle faa-passing"></i>&nbsp;faa-passing</span>|
|<span><i class="fas fa-space-shuttle faa-passing-reverse animated"></i>&nbsp;faa-passing-reverse animated</span>|<span><i class="fas fa-space-shuttle faa-passing-reverse animated-hover"></i>&nbsp;faa-passing-reverse animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-space-shuttle faa-passing-reverse"></i>&nbsp;faa-passing-reverse</span>|
|<span><i class="fas fa-circle faa-burst animated"></i>&nbsp;faa-burst animated</span>|<span><i class="fas fa-circle faa-burst animated-hover"></i>&nbsp;faa-burst animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-circle faa-burst"></i>&nbsp;faa-burst</span>|
|<span><i class="fas fa-star faa-falling animated"></i>&nbsp;faa-falling animated</span>|<span><i class="fas fa-star faa-falling animated-hover"></i>&nbsp;faa-falling animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-star faa-falling"></i>&nbsp;faa-falling</span>|
|<span><i class="fas fa-rocket faa-rising animated"></i>&nbsp;faa-rising animated</span>|<span><i class="fas fa-rocket faa-rising animated-hover"></i>&nbsp;faa-rising animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-rocket faa-rising"></i>&nbsp;faa-rising</span>|

<!-- endtab -->
<!-- tab 样式预览 -->
1. On DOM load（当页面加载时显示动画）

  {% tip warning faa-horizontal animated %}warning{% endtip %}
  {% tip ban faa-flash animated %}ban{% endtip %}

2. 调整动画速度。

  {% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
  {% tip ban faa-flash animated faa-slow %}ban{% endtip %}

3. On hover（当鼠标悬停时显示动画）

  {% tip warning faa-horizontal animated-hover %}warning{% endtip %}
  {% tip ban faa-flash animated-hover %}ban{% endtip %}

4. On parent hover（当鼠标悬停在父级元素时显示动画）

  {% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
  {% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}

<!-- endtab -->
<!-- tab 示例源码 -->
1. On DOM load（当页面加载时显示动画）

  ```markdown
  {% tip warning faa-horizontal animated %}warning{% endtip %}
  {% tip ban faa-flash animated %}ban{% endtip %}
  ```

2. 调整动画速度

  ```markdown
  {% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
  {% tip ban faa-flash animated faa-slow %}ban{% endtip %}
  ```

3. On hover（当鼠标悬停时显示动画）

  ```markdown
  {% tip warning faa-horizontal animated-hover %}warning{% endtip %}
  {% tip ban faa-flash animated-hover %}ban{% endtip %}
  ```

4. On parent hover（当鼠标悬停在父级元素时显示动画）

  ```markdown
  {% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
  {% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}
  ```

<!-- endtab -->
{% endtabs%}

## 复选列表 checkbox
{% tabs checkbox,3 %}
<!-- tab 标签语法 -->
```markdown
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```
<!-- endtab -->
<!-- tab 配置参数 -->
1. 样式: plus, minus, times
2. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
3. 选中状态: checked
<!-- endtab -->
<!-- tab 样式预览 -->
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```
<!-- endtab -->
{% endtabs%}


## 单选列表 radio
{% tabs radio,3 %}
<!-- tab 标签语法 -->
```markdown
{% radio 样式参数（可选）, 文本（支持简单md） %}
```
<!-- endtab -->
<!-- tab 配置参数 -->

1. 颜色: {% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
2. 选中状态: checked
<!-- endtab -->
<!-- tab 样式预览 -->
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```
<!-- endtab -->
{% endtabs%}


## 时间轴 timeline
{% tip fa-wrench %}
插件版v1.0.16以后，为避免与Butterfly_v4.0+版本中的timeline外挂标签冲突，已经移除了插件内的timeline外挂标签，请低于Butterfly_v4.0的用户升级主题或安装1.0.15版本的外挂标签插件，或者自行添加timeline.js和timeline.styl文件至对应文件夹。请使用了原有timeline外挂标签的用户受累替换语法格式。
Butterfly_v4.0+自带的timeline外挂标签样式更加好看。语法语意也更加清晰。
{% endtip %}

{% tabs timeline,3 %}
<!-- tab 标签语法 -->
```markdown
{% timeline 时间线标题（可选）[,color] %}
<!-- timeline 时间节点（标题） -->
正文内容
<!-- endtimeline -->
<!-- timeline 时间节点（标题） -->
正文内容
<!-- endtimeline -->
{% endtimeline %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
|参数	|解释|
|:--|:--|
|title	|标题/时间线|
|color	|`timeline`颜色:default(留空) / blue / pink / red / purple / orange / green|
<!-- endtab -->

<!-- tab 样式预览 -->
{% timeline 时间轴样式,blue %}

<!-- timenode 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) -->

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

<!-- endtimeline -->

<!-- timeline 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) -->

不需要额外处理。

<!-- endtimeline -->

<!-- timeline 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) -->

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

<!-- endtimeline -->

{% endtimeline %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% timeline 时间轴样式,blue %}

<!-- timeline 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) -->

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

<!-- endtimeline -->

<!-- timeline 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) -->

不需要额外处理。

<!-- endtimeline -->

<!-- timeline 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) -->

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

<!-- endtimeline -->

{% endtimeline %}
```
<!-- endtab -->
{% endtabs%}

## 链接卡片 link

{% tabs link,2 %}
<!-- tab 标签语法 -->
```markdown
{% link 标题, 链接, 图片链接（可选） %}
```
<!-- endtab -->

<!-- tab 样式预览 -->
{% link 糖果屋教程贴, https://akilar.top/posts/615e2dec/, /img/siteicon/favicon.ico %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% link 糖果屋教程贴, https://akilar.top/posts/615e2dec/, /img/siteicon/favicon.ico %}
```
<!-- endtab -->
{% endtabs%}

## 按钮 btns
{% note blue 'fas fa-bullhorn' simple %}
`Volantis`的按钮使用的是`btn`和`btns`标签。`btns`和`butterfly`的`button`不冲突，但是`btn`会被强制渲染，导致部分参数失效,而且`btn`的效果还是`butterfly`的`button`更好看些。所以就只适配了`btns`。
{% endnote %}
{% tabs btn,3 %}
<!-- tab 标签语法 -->

```markdown
{% btns 样式参数 %}
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```

<!-- endtab -->
<!-- tab 参数配置 -->

1. 圆角样式：rounded, circle
2. 增加文字样式：可以在容器内增加 `<b>标题</b> `和` <p>描述文字</p>`
3. 布局方式：
    默认为自动宽度，适合视野内只有一两个的情况。

|参数|含义|
|:--|:----|
|wide|宽一点的按钮|
|fill|填充布局，自动铺满至少一行，多了会换行|
|center|居中，按钮之间是固定间距|
|around|居中分散|
|grid2|等宽最多2列，屏幕变窄会适当减少列数|
|grid3|等宽最多3列，屏幕变窄会适当减少列数|
|grid4|等宽最多4列，屏幕变窄会适当减少列数|
|grid5|等宽最多5列，屏幕变窄会适当减少列数|



<!-- endtab -->
<!-- tab 样式预览 -->

1. 如果需要显示类似「团队成员」之类的一组含有头像的链接：

  {% btns circle grid5 %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% endbtns %}

2. 或者含有图标的按钮：

  {% btns rounded grid5 %}
  {% cell 下载源码, /, fas fa-download %}
  {% cell 查看文档, /, fas fa-book-open %}
  {% endbtns %}

3. 圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中

  {% btns circle center grid5 %}
  <a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
    <i class='fab fa-apple'></i>
    <b>心率管家</b>
    {% p red, 专业版 %}
    <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
  </a>
  <a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
    <i class='fab fa-apple'></i>
    <b>心率管家</b>
    {% p green, 免费版 %}
    <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
  </a>
  {% endbtns %}

<!-- endtab -->
<!-- tab 示例源码 -->

1. 如果需要显示类似「团队成员」之类的一组含有头像的链接：
  ```markdown
  {% btns circle grid5 %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
  {% endbtns %}
  ```
2. 或者含有图标的按钮：
  ```markdown
  {% btns rounded grid5 %}
  {% cell 下载源码, /, fas fa-download %}
  {% cell 查看文档, /, fas fa-book-open %}
  {% endbtns %}
  ```
3. 圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中
  ```markdown
  {% btns circle center grid5 %}
  <a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
    <i class='fab fa-apple'></i>
    <b>心率管家</b>
    {% p red, 专业版 %}
    <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
  </a>
  <a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
    <i class='fab fa-apple'></i>
    <b>心率管家</b>
    {% p green, 免费版 %}
    <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
  </a>
  {% endbtns %}
  ```
<!-- endtab -->
{% endtabs%}







## github卡片 ghcard

{% note blue 'fas fa-bullhorn' modern %}
ghcard使用了`github-readme-stats`的API，支持直接使用markdown语法来写。
{% endnote %}

{% tabs ghcard,3 %}
<!-- tab 标签语法 -->

```markdown
{% ghcard 用户名, 其它参数（可选） %}
{% ghcard 用户名/仓库, 其它参数（可选） %}
```
<!-- endtab -->
<!-- tab 配置参数 -->
更多参数可以参考：
{% ghcard anuraghazra/github-readme-stats %}
使用`,`分割各个参数。写法为：`参数名=参数值`
以下只写几个常用参数值。

|参数名|取值|释义|
|:--|:----|:-------------|
|hide|stars,commits,prs,issues,contribs|隐藏指定统计|
|count_private|true|将私人项目贡献添加到总提交计数中|
|show_icons|true|显示图标|
|theme|请查阅[Available Themes](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md)|主题|

<!-- endtab -->
<!-- tab 样式预览 -->

1. 用户信息卡片

| {% ghcard xaoxuu %} | {% ghcard xaoxuu, theme=vue %} |
| -- | -- |
| {% ghcard xaoxuu, theme=buefy %} | {% ghcard xaoxuu, theme=solarized-light %} |
| {% ghcard xaoxuu, theme=onedark %} | {% ghcard xaoxuu, theme=solarized-dark %} |
| {% ghcard xaoxuu, theme=algolia %} | {% ghcard xaoxuu, theme=calm %} |

2. 仓库信息卡片

| {% ghcard volantis-x/hexo-theme-volantis %} | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %} |
| -- | -- |
| {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %} |

<!-- endtab -->
<!-- tab 示例源码 -->
1. 用户信息卡片

  ```markdown
  | {% ghcard xaoxuu %} | {% ghcard xaoxuu, theme=vue %} |
  | -- | -- |
  | {% ghcard xaoxuu, theme=buefy %} | {% ghcard xaoxuu, theme=solarized-light %} |
  | {% ghcard xaoxuu, theme=onedark %} | {% ghcard xaoxuu, theme=solarized-dark %} |
  | {% ghcard xaoxuu, theme=algolia %} | {% ghcard xaoxuu, theme=calm %} |
  ```

2. 仓库信息卡片
  ```markdown
  | {% ghcard volantis-x/hexo-theme-volantis %} | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %} |
  | -- | -- |
  | {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
  | {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %} |
  | {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %} |
  ```
<!-- endtab -->
{% endtabs%}

## github徽标 ghbdage
{% tip cogs %}
关于ghbdage参数的更多具体用法可以参看站内教程：[添加github徽标](/posts/e87ad7f8)
{% endtip %}
{% tabs ghbdage,3 %}
<!-- tab 标签语法 -->
```markdown
{% bdage [right],[left],[logo]||[color],[link],[title]||[option] %}
```
<!-- endtab -->
<!-- tab 配置参数 -->
1. `left`：徽标左边的信息，必选参数。
2. `right`: 徽标右边的信息，必选参数，
3. `logo`：徽标图标，图标名称详见[simpleicons](https://simpleicons.org/)，可选参数。
4. `color`：徽标右边的颜色，可选参数。
5. `link`：指向的链接，可选参数。
6. `title`：徽标的额外信息，可选参数。主要用于优化SEO，但`object`标签不会像`a`标签一样在鼠标悬停显示`title`信息。
7. `option`：自定义参数，支持[shields.io](https://shields.io/)的全部API参数支持，具体参数可以参看上文中的拓展写法示例。形式为`name1=value2&name2=value2`。
<!-- endtab -->
<!-- tab 样式预览 -->
{% note info modern %}
本外挂标签的参数分为三组，用`||`分割。
{% endnote %}
1. 基本参数
<br>
{% bdage Theme,Butterfly %}
{% bdage Frame,Hexo,hexo %}
2. 信息参数
<br>
{% bdage CDN,JsDelivr,jsDelivr||abcdef,https://metroui.org.ua/index.html,本站使用JsDelivr为静态资源提供CDN加速 %}
{% bdage Source,GitHub,GitHub||,https://github.com/ %}
3. 拓展参数
<br>
{% bdage Hosted,Vercel,Vercel||brightgreen,https://vercel.com/,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=40 %}
{% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=40&logoColor=violet %}
<!-- endtab -->
<!-- tab 示例源码 -->
{% note info modern %}
本外挂标签的参数分为三组，用`||`分割。
{% endnote %}
1. 基本参数,定义徽标左右文字和图标
```markdown
{% bdage Theme,Butterfly %}
{% bdage Frame,Hexo,hexo %}
```
2. 信息参数，定义徽标右侧内容背景色，指向链接
```markdown
{% bdage CDN,JsDelivr,jsDelivr||abcdef,https://metroui.org.ua/index.html,本站使用JsDelivr为静态资源提供CDN加速 %}
//如果是跨顺序省略可选参数，仍然需要写个逗号,用作分割
{% bdage Source,GitHub,GitHub||,https://github.com/ %}
```
3. 拓展参数，支持shields的API的全部参数内容
```markdown
{% bdage Hosted,Vercel,Vercel||brightgreen,https://vercel.com/,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}
//如果是跨顺序省略可选参数组，仍然需要写双竖线||用作分割
{% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}
```
<!-- endtab -->
{% endtabs%}

## 网站卡片 sites

{% tabs site,2 %}
<!-- tab 标签语法 -->

```markdown
{% sitegroup %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% endsitegroup %}
```
<!-- endtab -->

<!-- tab 样式预览 -->

{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}

<!-- endtab -->
<!-- tab 示例源码 -->

```markdown
{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}
```

<!-- endtab -->
{% endtabs%}

## 行内图片 inlineimage


{% tabs inlineimage,3 %}
<!-- tab 标签语法 -->

```markdown
{% inlineimage 图片链接, height=高度（可选） %}
```
<!-- endtab -->
<!-- tab 参数配置 -->

1. 高度：height=20px

<!-- endtab -->
<!-- tab 样式预览 -->

这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。

<!-- endtab -->
<!-- tab 示例源码 -->

```markdown
这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。
```

<!-- endtab -->
{% endtabs%}

## 单张图片 image
{% tabs image,3 %}
<!-- tab 标签语法 -->

```markdown
{% image 链接, width=宽度（可选）, height=高度（可选）, alt=描述（可选）, bg=占位颜色（可选） %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
1. 图片宽度高度：width=300px, height=32px
2. 图片描述：alt=图片描述（butterfly需要在主题配置文件中开启图片描述）
3. 占位背景色：bg=#f2f2f2
<!-- endtab -->
<!-- tab 样式预览 -->

1. 添加描述：

  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}

2. 指定宽度：

  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px %}

3. 指定宽度并添加描述：

  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}

4. 设置占位背景色：

  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}

<!-- endtab -->
<!-- tab 示例源码 -->

1. 添加描述：

  ```markdown
  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, alt=每天下课回宿舍的路，没有什么故事。 %}
  ```
2. 指定宽度：
  ```markdown
  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px %}
  ```
3. 指定宽度并添加描述：
  ```markdown
  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}
  ```
4. 设置占位背景色：
  ```markdown
  {% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}
  ```

<!-- endtab -->
{% endtabs%}

## 音频 audio


{% tabs audio,2 %}
<!-- tab 标签语法 -->

```markdown
{% audio 音频链接 %}
```
<!-- endtab -->

<!-- tab 样式预览 -->

{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}

<!-- endtab -->
<!-- tab 示例源码 -->

```markdown
{% audio https://github.com/volantis-x/volantis-docs/releases/download/assets/Lumia1020.mp3 %}
```

<!-- endtab -->
{% endtabs%}


## 视频 video


{% tabs video,3 %}
<!-- tab 标签语法 -->

```markdown
{% video 视频链接 %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
1. 对其方向：left, center, right
2. 列数：逗号后面直接写列数，支持 1 ～ 4 列。
<!-- endtab -->
<!-- tab 样式预览 -->
1. 100%宽度

  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}

2. 50%宽度
    {% videos, 2 %}
    {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
    {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
    {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
    {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
    {% endvideos %}

3. 25%宽度

  {% videos, 4 %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% endvideos %}

<!-- endtab -->
<!-- tab 示例源码 -->


1. 100%宽度
  ```markdown
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  ```

2. 50%宽度
  ```markdown
  {% videos, 2 %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% endvideos %}
  ```

3. 25%宽度
  ```markdown
  {% videos, 4 %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
  {% endvideos %}
  ```

<!-- endtab -->
{% endtabs%}

## 相册 gallery
{% note blue 'fas fa-bullhorn' disabled %}
`Butterfly`自带`gallery`相册，而且会根据图片大小自动调整排版，效果比`Volantis`的`gallery`更好，故不再收录`Volantis`的`gallery`标签。
{% endnote %}
{% note %}
以下为`Butterfly`自带的`gallery`标签写法。相册图库和相册配合使用。
{% endnote %}

{% tabs gallery,3 %}
<!-- tab 标签语法 -->
1. gallerygroup 相册图库
  ```markdown
  <div class="gallery-group-main">
  {% galleryGroup name description link img-url %}
  {% galleryGroup name description link img-url %}
  {% galleryGroup name description link img-url %}
  </div>
  ```

2. gallery 相册
  ```markdown
  {% gallery %}
  markdown 圖片格式
  {% endgallery %}
  ```
<!-- endtab -->
<!-- tab 参数配置 -->
- gallerygroup 相册图库

|参数名|释义|
|:--|:--|
|name|图库名字|
|description|图库描述|
|link|链接到对应相册的地址|
|img-url|图库封面|

{% note info %}
思维拓展一下，相册图库的实质其实就是个快捷方式，可以自定义添加描述、封面、链接。那么我们未必要把它当做一个相册，完全可以作为一个链接卡片，链接到视频、QQ、友链都是不错的选择。
{% endnote %}

- gallery 相册
  区别于旧版的Gallery相册,新的Gallery相册会自动根据图片长度进行排版，书写也更加方便，与markdown格式一样。可根据需要插入到相应的md。无需再自己配置长宽。**建议在粘贴时故意使用长短、大小、横竖不一的图片**，会有更好的效果。（尺寸完全相同的图片只会平铺输出，效果很糟糕）
  <!-- endtab -->
  <!-- tab 样式预览 -->
- gallerygroup 相册图库

<div class="gallery-group-main">
{% galleryGroup MC 在Rikkaの六花服务器里留下的足迹 '/gallery/MC/' https://npm.elemecdn.com/akilar-candyassets/image/1.jpg %}
{% galleryGroup Gundam 哦咧哇gundam哒！ '/gallery/Gundam/' https://npm.elemecdn.com/akilar-candyassets/image/20200907110508327.png %}
{% galleryGroup I-am-Akilar 某种意义上也算自拍吧 '/gallery/I-am-Akilar/' https://npm.elemecdn.com/akilar-candyassets/image/20200907113116651.png %}
</div>


- gallery 相册

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

<!-- endtab -->
<!-- tab 示例源码 -->

{% note info %}
对于很多同学提问的`gallerygroup`和`gallery`相册页的链接问题。这里说下我个人的使用习惯。
一般使用相册图库的话，可以在导航栏加一个gallery的page(**使用指令`hexo new page gallery`添加**)，里面放相册图库作为封面。然后在`[Blogroot]/source/gallery/`下面建立相应的文件夹，例如若按照这里的示例，若欲使用`/gallery/MC/`路径访问MC相册，则需要新建`[Blogroot]/source/gallery/MC/index.md`，并在里面填入`gallery`相册内容。
{% endnote %}

1. gallerygroup 相册图库
  ```markdown
  <div class="gallery-group-main">
  {% galleryGroup MC 在Rikkaの六花服务器里留下的足迹 '/gallery/MC/' https://npm.elemecdn.com/akilar-candyassets/image/1.jpg %}
  {% galleryGroup Gundam 哦咧哇gundam哒！ '/gallery/Gundam/' https://npm.elemecdn.com/akilar-candyassets/image/20200907110508327.png %}
  {% galleryGroup I-am-Akilar 某种意义上也算自拍吧 '/gallery/I-am-Akilar/' https://npm.elemecdn.com/akilar-candyassets/image/20200907113116651.png %}
  </div>
  ```

2. gallery 相册
  ```markdown
  {% gallery %}
  ![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
  ![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
  ![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
  ![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
  ![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
  ![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
  ![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
  ![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
  {% endgallery %}
  ```
<!-- endtab -->
{% endtabs%}

## 折叠框 folding
{% note blue 'fas fa-bullhorn' disabled %}
`Butterfly`虽然也有内置折叠框`hideToggle`标签，但是`Volantis`的`folding`折叠框更好看一些。
{% endnote %}
{% tabs folding,3 %}
<!-- tab 标签语法 -->

```markdown
{% folding 参数（可选）, 标题 %}
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfolding %}
```
<!-- endtab -->
<!-- tab 配置参数 -->
1. 颜色：blue, cyan, green, yellow, red
2. 状态：状态填写 open 代表默认打开。
<!-- endtab -->
<!-- tab 样式预览 -->

{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
```markdown
![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
```
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}

<!-- endtab -->
<!-- tab 示例源码 -->

```markdown
{% folding 查看图片测试 %}

![](https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```

<!-- endtab -->
{% endtabs%}

## 分栏 tab

{% note blue 'fas fa-bullhorn' disabled %}
`Butterfly`的`tab`标签和`Volantis`的`tab`标签都是移值自`NexT`主题，所以写法和效果一模一样。
{% endnote %}
{% tabs folding,3 %}
<!-- tab 标签语法 -->

```markdown
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}


```
<!-- endtab -->
<!-- tab 配置参数 -->
1. Unique name :
    - 选项卡块标签的唯一名称，不带逗号。
    - 将在#id中用作每个标签及其索引号的前缀。
    - 如果名称中包含空格，则对于生成#id，所有空格将由破折号代替。
    - 仅当前帖子/页面的URL必须是唯一的！
2. [index]:
    - 活动选项卡的索引号。
    - 如果未指定，将选择第一个标签（1）。
    - 如果index为-1，则不会选择任何选项卡。
    - 可选参数。
3. [Tab caption]:
    - 当前选项卡的标题。
    - 如果未指定标题，则带有制表符索引后缀的唯一名称将用作制表符的标题。
    - 如果未指定标题，但指定了图标，则标题将为空。
    - 可选参数。
4. [@icon]:
    - FontAwesome图标名称（全名，看起来像“ fas fa-font”）
    - 可以指定带空格或不带空格；
    - 例如'Tab caption @icon' 和 'Tab caption@icon'.
    - 可选参数。
    <!-- endtab -->
    <!-- tab 样式预览 -->

{% note primary %}
Demo 1 - 预设选择第一个【默认】
{% endnote %}

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

{% note primary %}
Demo 2 - 预设选择tabs
{% endnote %}

{% tabs test2, 3 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

{% note primary %}
Demo 3 - 没有预设值
{% endnote %}

{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

{% note primary %}
Demo 4 - 自定义Tab名 + 只有icon + icon和Tab名
{% endnote %}

{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}

<!-- endtab -->
<!-- tab 示例源码 -->


{% note primary %}
Demo 1 - 预设选择第一个【默认】
{% endnote %}
```markdown
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```
{% note primary %}
Demo 2 - 预设选择tabs
{% endnote %}
```markdown
{% tabs test2, 3 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```
{% note primary %}
Demo 3 - 没有预设值
{% endnote %}
```markdown
{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```
{% note primary %}
Demo 4 - 自定义Tab名 + 只有icon + icon和Tab名
{% endnote %}
```markdown
{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}
```

<!-- endtab -->
{% endtabs%}


## 数据集合 issues

<script defer src="https://npm.elemecdn.com/jquery@latest/dist/jquery.min.js"></script>
<script defer src="https://npm.elemecdn.com/hexo-theme-volantis@4.3.1/source/js/issues.js"></script>

{% tabs issues,3 %}
<!-- tab 标签语法 -->

```markdown
{% issues type | api=url | group=key:value1,value2（可选） %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
{% span center logo large, type(类型)： %}
根据需求不同，会将 issues 内容解析成不同的 HTML 标签，目前支持的类型有：

1. 时间轴`timeline`: 解析成`timeline`标签，`issue`的标题对应`timeline`的时间，`issue`的内容对应`timeline`的内容。
2. 网站卡片`sites`: 解析成`sites`标签，需要有`JSON`代码块,各参数对应`sites`标签参数:

  ```json
  {
      "title": "",
      "screenshot": "",
      "url": "",
      "avatar": "",
      "description": "",
      "「keywords」": ""
  }
  ```

|参数|释义|
|:--|:--|
|title|网站名称|
|screenshot|网站预览图|
|url|网站链接，需要添加<br>`https://`协议组成完整域名。<br>否则可能被识别成站点相对路径。|
|avatar|站长头像|
|「keywords」|分组依据，<br>未必要叫「keywords」，<br>详见下文group(分组)|

{% span center logo large, api(接口)： %}
url为可以调的通的API，例如：
```
api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active
```

|参数|释义|
|:--|:--|
| https://gitee.com/api/v5/ | gitee仓库的api |
| https://api.github.com/ | github仓库的api |
| repos/xaoxuu/friends/issues | repos/用户名/仓库名/issues |
| sort=updated&state=open | 界定哪些类型的`issues`会<br>被读取过来渲染成相应的标签 |
|page=1&per_page=100|读取前100条issues|
|labels=active|控制默认的issue不显示，<br>只有自己审核通过<br>添加了active标签之后才会显示|


{% span center logo large, group(分组)： %}
`sites`类型的`issues`默认不分组，如果需要分组，可指定分组依据`「keywords」`，和分组白名单`「value1」`、`「value2」`等，例如：

```yml
group=version:v4,v3,v2
# 此处的version就是上文中的「keywords」
```

这个参数的作用就是，筛选出`JSON`中包含`"version": "v4"`或者`"version":"v3"`或者`"version": "v2"`的数据，并分组显示。

{% span center logo large, 仓库ISSUES模板配置 %}

{% folding green,Github仓库配置方案 %}

1. 新建一个仓库，仓库名随意，这里我命名为`friend_link`,
    新建文件`friend_link\.github\ISSUE_TEMPLATE.md`,
    并在其中输入以下内容作为`issues`模板。

  {% tip warning faa-horizontal animated fa-slow %}
  其中的json代码块前面的反斜杠记得删去。此处这么写主要是为了转义，否则无法嵌套代码块。
  {% endtip %}

  ```markdown
  ---
  name: 友链模板
  about: 请根据指示规范填写友链格式。
  ---

  <!-- 请在下方代码块的双引号中填写 -->
  \```json
  {
      "title": "",
      "screenshot": "",
      "url": "",
      "avatar": "",
      "description": "",
      "keywords": ""
  }
  \```

  <!--
  "title": "站点名称",
  "screenshot": "站点预览图链接",
  "url": "站点链接",
  "avatar": "头像链接",
  "description": "站点描述",
  "keywords": "关键词，作为分组名"
  -->

  <!-- 示例 -->

  <!--
  "title": "Akilarの糖果屋",
  "screenshot": "https://cdn.jsdelivr.net/gh/Akilarlxh/ScreenShot@gh-pages/akilar.top.jpg",
  "url": "https://akilar.top/",
  "avatar": "/img/siteicon/favicon.png",
  "description": "期待您的光临！",
  "keywords": "糖果屋"
  -->

  ```

2. 新建active label

  ![新建label用于控制审核结果](https://npm.elemecdn.com/akilar-candyassets/image/d63b5c0c.png)

  ![配置名称描述颜色](https://npm.elemecdn.com/akilar-candyassets/image/6311f960.png)

3. 提交示例

  ![填写规范](https://npm.elemecdn.com/akilar-candyassets/image/f87ebfd3.png)
  ![审核通过](https://npm.elemecdn.com/akilar-candyassets/image/efdfc67d.png)

4. 从审核通过到页面读取有一段api的缓存期，稍微有点耐心。

{% endfolding %}

{% folding yellow,Gitee仓库配置方案 %}

1. 新建一个仓库，仓库名随意，这里我命名为`friend_link`,
    新建文件`friend_link\.gitee\ISSUE_TEMPLATE.md`,
    并在其中输入以下内容作为`issues`模板。

  {% tip warning faa-horizontal animated fa-slow %}
  其中的json代码块前面的反斜杠记得删去。此处这么写主要是为了转义，否则无法嵌套代码块。
  {% endtip %}

  ```markdown
  ---
  name: 友链模板
  about: 请根据指示规范填写友链格式。
  ---

  <!-- 请在下方代码块的双引号中填写 -->
  \```json
  {
      "title": "",
      "screenshot": "",
      "url": "",
      "avatar": "",
      "description": "",
      "keywords": ""
  }
  \```

  <!--
  "title": "站点名称",
  "screenshot": "站点预览图链接",
  "url": "站点链接",
  "avatar": "头像链接",
  "description": "站点描述",
  "keywords": "关键词，作为分组名"
  -->

  <!-- 示例 -->

  <!--
  "title": "Akilarの糖果屋",
  "screenshot": "https://cdn.jsdelivr.net/gh/Akilarlxh/ScreenShot@gh-pages/akilar.top.jpg",
  "url": "https://akilar.top/",
  "avatar": "/img/siteicon/favicon.png",
  "description": "期待您的光临！",
  "keywords": "糖果屋"
  -->

  ```

2. 新建active标签

  ![新建标签用于控制审核结果](https://npm.elemecdn.com/akilar-candyassets/image/7522911b.png)


3. 提交示例

  ![填写规范](https://npm.elemecdn.com/akilar-candyassets/image/dd334eea.png)
  ![审核通过](https://npm.elemecdn.com/akilar-candyassets/image/72d06ae1.png)

4. 从审核通过到页面读取有一段api的缓存期，稍微有点耐心。

{% endfolding %}

<!-- endtab -->
<!-- tab 样式预览 -->

1. 时间轴标签`timeline`渲染
    对应的仓库`issues`链接:
    {% link xaoxuu/timeline, https://gitee.com/xaoxuu/timeline/issues, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/logo/256/safari.png %}

  {% issues timeline | api=https://gitee.com/api/v5/repos/xaoxuu/timeline/issues?state=open&creator=xaoxuu&sort=created&direction=desc&page=1&per_page=100 %}

2. 网站卡片标签`sites`渲染

  - gitee仓库示例

    对应的仓库`issues`链接:

    {% link xaoxuu/friends, https://gitee.com/xaoxuu/friends/issues, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/logo/256/safari.png %}

    渲染后的标签：

    {% issues sites | api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}

  - github仓库示例

    对应的仓库`issues`链接:

    {% link xaoxuu/friends, https://github.com/xaoxuu/friends/issues, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/logo/256/safari.png %}

    渲染后的标签：

    {% issues sites | api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}

3. 网站卡片标签`sites`分组渲染
    这是`Volantis`主题官网的「示例博客」页面的数据：
    对应的仓库`issues`链接:

  {% link 如何参与项目, https://github.com/volantis-x/examples/issues, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/logo/256/safari.png %}

  渲染后的标签：

  {% issues sites | api=https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:版本：^4.0,版本：^3.0,版本：^2.0 %}

<!-- endtab -->
<!-- tab 示例源码 -->

1. 时间轴标签`timeline`渲染

  ```markdown
  {% issues timeline | api=https://gitee.com/api/v5/repos/xaoxuu/timeline/issues?state=open&creator=xaoxuu&sort=created&direction=desc&page=1&per_page=100 %}
  ```

2. 网站卡片标签`sites`渲染

  - gitee仓库示例

    ```markdown
    {% issues sites | api=https://gitee.com/api/v5/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
    ```

  - github仓库示例

    ```markdown
    {% issues sites | api=https://api.github.com/repos/xaoxuu/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
    ```

3. 网站卡片标签`sites`分组渲染
    这是`Volantis`主题官网的「示例博客」页面的数据：

  ```markdown
  {% issues sites | api=https://api.github.com/repos/volantis-x/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:版本：^4.0,版本：^3.0,版本：^2.0 %}
  ```
<!-- endtab -->
{% endtabs%}

## 诗词标签 poem

{% tabs poem,3 %}
<!-- tab 标签语法 -->

```markdown
{% poem [title],[author] %}
诗词内容
{% endpoem %}
```
<!-- endtab -->
<!-- tab 参数配置 -->

1. title：诗词标题
2. author：作者，可以不写

<!-- endtab -->
<!-- tab 样式预览 -->

{% poem 水调歌头,苏轼 %}

明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？
转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

<!-- endtab -->

<!-- tab 示例源码 -->

```markdown
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}
```

<!-- endtab -->
{% endtabs%}


## 阿里图标 icon
{% tip cogs %}
本标签的图标需要自己额外引入阿里矢量图标库的样式，具体引入方案请移步：[Hexo引入阿里矢量图标库](/posts/d2ebecef/)
{% endtip %}

{% tabs icon示例,3 %}
<!-- tab 标签语法 -->
```markdown
{% icon [icon-xxxx],[font-size] %}
```
<!-- endtab -->
<!-- tab 参数释义 -->
1. `icon-xxxx`：表示图标`font-class`,可以在自己的阿里矢量图标库项目的`font-class`引用方案内查询并复制。
2. `font-size`：表示图标大小，直接填写数字即可，单位为`em`。图标大小默认值为`1em`。
<!-- endtab -->
<!-- tab 样式预览 -->

|{% icon icon-rat_zi %}|{% icon icon-rat,2 %}|{% icon icon-ox_chou,3 %}|{% icon icon-ox,4 %}|{% icon icon-tiger_yin,5 %}|{% icon icon-tiger,6 %}|
|:--|:--|:--|:--|:--|:--|
|{% icon icon-rabbit_mao,1 %}|{% icon icon-rabbit,2 %}|{% icon icon-dragon_chen,3 %}|{% icon icon-dragon,4 %}|{% icon icon-snake_si,5 %}|{% icon icon-snake,6 %}|
|{% icon icon-horse_wu %}|{% icon icon-horse,2 %}|{% icon icon-goat_wei,3 %}|{% icon icon-goat,4 %}|{% icon icon-monkey_shen,5 %}|{% icon icon-monkey,6 %}|
|{% icon icon-rooster_you %}|{% icon icon-rooster,2 %}|{% icon icon-dog_xu,3 %}|{% icon icon-dog,4 %}|{% icon icon-boar_hai,5 %}|{% icon icon-boar,6 %}|
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% icon icon-rat_zi %}{% icon icon-rat,2 %}

{% icon icon-ox_chou,3 %}{% icon icon-ox,4 %}

{% icon icon-tiger_yin,5 %}{% icon icon-tiger,6 %}

{% icon icon-rabbit_mao,1 %}{% icon icon-rabbit,2 %}

{% icon icon-dragon_chen,3 %}{% icon icon-dragon,4 %}

{% icon icon-snake_si,5 %}{% icon icon-snake,6 %}

{% icon icon-horse_wu %}{% icon icon-horse,2 %}

{% icon icon-goat_wei,3 %}{% icon icon-goat,4 %}

{% icon icon-monkey_shen,5 %}{% icon icon-monkey,6 %}

{% icon icon-rooster_you %}{% icon icon-rooster,2 %}

{% icon icon-dog_xu,3 %}{% icon icon-dog,4 %}

{% icon icon-boar_hai,5 %}{% icon icon-boar,6 %}
```
<!-- endtab -->
{% endtabs %}

## 特效标签wow
{% note blue 'fas fa-bullhorn' modern%}
特效标签的静态资源未添加在本帖的配置内容中（因为多为cdn配置），请移步站内教程完成相关配置：
{% link 使用wowjs给博客添加动画效果, /posts/abab51cf/, /img/siteicon/favicon.ico %}
{% endnote %}

{% tabs animate,3 %}
<!-- tab 标签语法 -->
```markdown
{% wow [animete],[duration],[delay],[offset],[iteration] %}
内容
{% endwow %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
1. `animate`: 动画样式，效果详见[animate.css参考文档](https://animate.style/)
2. `duration`: 选填项，动画持续时间，单位可以是`ms`也可以是`s`。例如`3s`，`700ms`。
3. `delay`: 选填项，动画开始的延迟时间，单位可以是`ms`也可以是`s`。例如`3s`，`700ms`。
4. `offset`: 选填项，开始动画的距离（相对浏览器底部）
5. `iteration`: 选填项，动画重复的次数

{% note warning %}
注意，后面四个虽然是选填项，但是当有跨位选填时，次序不能乱。详见示例。
支持嵌套其他外挂标签。
{% endnote %}
<!-- endtab -->
<!-- tab 样式预览 -->
1. `flip`动画效果。
    {% wow animate__flip %}
    {% note green 'fas fa-fan' modern%}
    `flip`动画效果。
    {% endnote %}
    {% endwow %}
2. `zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次。
    {% wow animate__zoomIn,5s,5s,100,10 %}
    {% note blue 'fas fa-bullhorn' modern%}
    `zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
    {% endnote %}
    {% endwow %}
3. `slideInRight`动画效果，持续`5s`，延时`5s`。
    {% wow animate__slideInRight,5s,5s %}
    {% note orange 'fas fa-car' modern%}
    `slideInRight`动画效果，持续`5s`，延时`5s`。
    {% endnote %}
    {% endwow %}
4. `heartBeat`动画效果，延时`5s`，重复`10`次。
    {% wow animate__heartBeat,,5s,,10 %}
    {% note red 'fas fa-battery-half' modern%}
    `heartBeat`动画效果，延时`5s`，重复`10`次。
    {% endnote %}
    {% endwow %}
    <!-- endtab -->
    <!-- tab 示例源码 -->
1. `flip`动画效果。
  ```markdown
  {% wow animate__flip %}
  {% note green 'fas fa-fan' modern%}
  `flip`动画效果。
  {% endnote %}
  {% endwow %}
  ```
2. `zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次。
  ```markdown
  {% wow animate__zoomIn,5s,5s,100,10 %}
  {% note blue 'fas fa-bullhorn' modern%}
  `zoomIn`动画效果，持续`5s`，延时`5s`，离底部`100`距离时启动，重复`10`次
  {% endnote %}
  {% endwow %}
  ```
3. `slideInRight`动画效果，持续`5s`，延时`5s`。
  ```markdown
  {% wow animate__slideInRight,5s,5s %}
  {% note orange 'fas fa-car' modern%}
  `slideInRight`动画效果，持续`5s`，延时`5s`。
  {% endnote %}
  {% endwow %}
  ```
4. `heartBeat`动画效果，延时`5s`，重复`10`次。此处注意不用的参数位置要留空，用逗号间隔。
  ```markdown
  {% wow animate__heartBeat,,5s,,10 %}
  {% note red 'fas fa-battery-half' modern%}
  `heartBeat`动画效果，延时`5s`，重复`10`次。
  {% endnote %}
  {% endwow %}
  ```
<!-- endtab -->
{% endtabs%}

## 进度条 progress

{% note info morden %}
进度条标签参考[沂佰孜猫-给HEXO文章添加彩色进度条](https://rongbuqiu.com/jdt.html)。
源样式提取自[Cuteen](https://zwying0814.gitbook.io/cuteen/)主题。
{% endnote %}
{% tabs progress,3 %}
<!-- tab 标签语法 -->
```markdown
{% progress [width] [color] [text] %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
`width`: 0到100的阿拉伯数字
`color`: 颜色，取值有{% span red, red %},{% span yellow, yellow %},{% span green, green %},{% span cyan, cyan %},{% span blue, blue %},{% span gray, gray %}
`text`:进度条上的文字内容
<!-- endtab -->
<!-- tab 样式预览 -->
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
```
<!-- endtab -->
{% endtabs%}

## 气泡注释 bubble

{% tabs bubble,3 %}
<!-- tab 标签语法 -->
```markdown
{% bubble [content] , [notation] ,[background-color] %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
`content`: 注释词汇
`notation`: 悬停显示的注解内容
`background-color`: 可选，气泡背景色。默认为“#71a4e3”
<!-- endtab -->
<!-- tab 样式预览 -->
{% raw %}
<p>最近我学到了不少新玩意儿（虽然对很多大佬来说这些已经是旧技术了），比如 CSS 的<span class="bubble-content">兄弟相邻选择器</span><span class="bubble-notation"><span class="bubble-item" style="background-color:#71a4e3;">例如 h1 + p {margin-top:50px;}</span></span>，<span class="bubble-content">flex 布局</span><span class="bubble-notation"><span class="bubble-item" style="background-color:#ec5830;"> Flex 是 Flexible Box 的缩写，意为弹性布局 "，用来为盒状模型提供最大的灵活性"</span></span>，<span class="bubble-content">transform 变换</span><span class="bubble-notation"><span class="bubble-item" style="background-color:#1db675;"> transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。</span></span>，animation 的<span class="bubble-content">贝塞尔速度曲线</span><span class="bubble-notation"><span class="bubble-item" style="background-color:#de4489;">贝塞尔曲线 (Bézier curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋</span></span>写法，还有今天刚看到的<span class="bubble-content"> clip-path</span><span class="bubble-notation"><span class="bubble-item" style="background-color:#868fd7;">clip-path 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。</span></span>属性。这些对我来说很新颖的概念狠狠的冲击着我以前积累起来的设计思路。</p>
{% endraw %}
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
最近我学到了不少新玩意儿（虽然对很多大佬来说这些已经是旧技术了），比如CSS的{% bubble 兄弟相邻选择器,"例如 h1 + p {margin-top:50px;}" %}，{% bubble flex布局,"Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性","#ec5830" %}，{% bubble transform变换,"transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。","#1db675" %}，animation的{% bubble 贝塞尔速度曲线,"贝塞尔曲线(Bézier curve)，又称贝兹曲线或贝济埃曲线，是应用于二维图形应用程序的数学曲线。一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋","#de4489" %}写法，还有今天刚看到的{% bubble clip-path,"clip-path属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。","#868fd7" %}属性。这些对我来说很新颖的概念狠狠的冲击着我以前积累起来的设计思路。
```
<!-- endtab -->
{% endtabs%}

## 引用文献 reference

{% tabs bubble,3 %}
<!-- tab 标签语法 -->
```markdown
{% referto [id] , [literature] %}
{% referfrom [id] , [literature] , [url] %}
```
<!-- endtab -->
<!-- tab 参数配置 -->

{% tip ban %}
考虑到锚点跳转的特性，不建议您将引用出处标签referfrom写在常隐外挂标签(如folding、tab、hideToggle)中，这样能有效避免跳转失败。
{% endtip %}

1. referto 引用上标
    `id`: 上标序号内容，需与referfrom标签的id对应才能实现跳转
    `literature`: 引用的参考文献名称

2. referfrom 引用出处
    `id`: 序号内容，需与referto标签的id对应才能实现跳转
    `literature`: 引用的参考文献名称
    `url`: 引用的参考文献链接，可省略

<!-- endtab -->
<!-- tab 样式预览 -->
{% raw %}
<p>Akilarの糖果屋(akilar.top)是一个私人性质的博客<span class="hidden-anchor" id="referto_[1]"></span><sup class="reference"><a href="#referfrom_[1]" data-pjax-state="">[1]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">Akilarの糖果屋群聊简介</span><span class="reference-title">参考资料</span></span></span>，从各类教程至生活点滴，无话不谈。建群的目的是提供一个闲聊的场所。博客采用Hexo框架<span class="hidden-anchor" id="referto_[2]"></span><sup class="reference"><a href="#referfrom_[2]" data-pjax-state="">[2]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">Hexo中文文档</span><span class="reference-title">参考资料</span></span></span>，Butterfly主题<span class="hidden-anchor" id="referto_[3]"></span><sup class="reference"><a href="#referfrom_[3]" data-pjax-state="">[3]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">Butterfly 安装文档(一) 快速开始</span><span class="reference-title">参考资料</span></span></span></p>
<p>本项目参考了Volantis<span class="hidden-anchor" id="referto_[4]"></span><sup class="reference"><a href="#referfrom_[4]" data-pjax-state="">[4]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">hexo-theme-volantis 标签插件</span><span class="reference-title">参考资料</span></span></span>的标签样式。引入<code>[tag].js</code>，并针对<code>butterfly</code>主题修改了相应的<code>[tag].styl</code>。在此鸣谢<code>Volantis</code>主题众开发者。<br>主要参考内容包括各个volantis的内置标签插件文档<span class="hidden-anchor" id="referto_[5]"></span><sup class="reference"><a href="#referfrom_[5]" data-pjax-state="">[5]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">Volantis文档:内置标签插件</span><span class="reference-title">参考资料</span></span></span><br>Butterfly主题的各个衍生魔改<span class="hidden-anchor" id="referto_[6]"></span><sup class="reference"><a href="#referfrom_[6]" data-pjax-state="">[6]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">Butterfly 安装文档:标签外挂（Tag Plugins</span><span class="reference-title">参考资料</span></span></span><span class="hidden-anchor" id="referto_[7]"></span><sup class="reference"><a href="#referfrom_[7]" data-pjax-state="">[7]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">小弋の生活馆全样式预览</span><span class="reference-title">参考资料</span></span></span><span class="hidden-anchor" id="referto_[8]"></span><sup class="reference"><a href="#referfrom_[8]" data-pjax-state="">[8]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">l-lin-font-awesome-animation</span><span class="reference-title">参考资料</span></span></span><span class="hidden-anchor" id="referto_[9]"></span><sup class="reference"><a href="#referfrom_[9]" data-pjax-state="">[9]</a></sup><span class="reference-bubble"><span class="reference-item"><span class="reference-literature">小康的butterfly主题使用文档</span><span class="reference-title">参考资料</span></span></span></p>
{% endraw %}

{% referfrom '[1]','Akilarの糖果屋群聊简介','https://jq.qq.com/?_wv=1027&k=pGLB2C0N' %}
{% referfrom '[2]','Hexo中文文档','https://hexo.io/zh-cn/docs/' %}
{% referfrom '[3]','Butterfly 安装文档(一) 快速开始','https://butterfly.js.org/posts/21cfbf15/' %}
{% referfrom '[4]','hexo-theme-volantis 标签插件','https://volantis.js.org/v5/tag-plugins/' %}
{% referfrom '[5]','Volantis文档:内置标签插件','https://volantis.js.org/tag-plugins/' %}
{% referfrom '[6]','Butterfly 安装文档:标签外挂（Tag Plugins','https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89' %}
{% referfrom '[7]','小弋の生活馆全样式预览','https://lovelijunyi.gitee.io/posts/c898.html' %}
{% referfrom '[8]','l-lin-font-awesome-animation','https://github.com/l-lin/font-awesome-animation' %}
{% referfrom '[9]','小康的butterfly主题使用文档','https://www.antmoe.com/posts/3b43914f/' %}

<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
Akilarの糖果屋(akilar.top)是一个私人性质的博客{% referto '[1]','Akilarの糖果屋群聊简介' %}，从各类教程至生活点滴，无话不谈。建群的目的是提供一个闲聊的场所。博客采用Hexo框架{% referto '[2]','Hexo中文文档' %}，Butterfly主题{% referto '[3]','Butterfly 安装文档(一) 快速开始' %}

本项目参考了Volantis{% referto '[4]','hexo-theme-volantis 标签插件' %}的标签样式。引入`[tag].js`，并针对`butterfly`主题修改了相应的`[tag].styl`。在此鸣谢`Volantis`主题众开发者。
主要参考内容包括各个volantis的内置标签插件文档{% referto '[5]','Volantis文档:内置标签插件' %}
Butterfly主题的各个衍生魔改{% referto '[6]','Butterfly 安装文档:标签外挂（Tag Plugins' %}{% referto '[7]','小弋の生活馆全样式预览' %}{% referto '[8]','l-lin-font-awesome-animation' %}{% referto '[9]','小康的butterfly主题使用文档' %}



{% referfrom '[1]','Akilarの糖果屋群聊简介','https://jq.qq.com/?_wv=1027&k=pGLB2C0N' %}
{% referfrom '[2]','Hexo中文文档','https://hexo.io/zh-cn/docs/' %}
{% referfrom '[3]','Butterfly 安装文档(一) 快速开始','https://butterfly.js.org/posts/21cfbf15/' %}
{% referfrom '[4]','hexo-theme-volantis 标签插件','https://volantis.js.org/v5/tag-plugins/' %}
{% referfrom '[5]','Volantis文档:内置标签插件','https://volantis.js.org/tag-plugins/' %}
{% referfrom '[6]','Butterfly 安装文档:标签外挂（Tag Plugins','https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89' %}
{% referfrom '[7]','小弋の生活馆全样式预览','https://lovelijunyi.gitee.io/posts/c898.html' %}
{% referfrom '[8]','l-lin-font-awesome-animation','https://github.com/l-lin/font-awesome-animation' %}
{% referfrom '[9]','小康的butterfly主题使用文档','https://www.antmoe.com/posts/3b43914f/' %}
```
<!-- endtab -->
{% endtabs%}

## 旋转相册 carousel
{% tip warning %}
旋转相册标签与fancybox灯箱存在兼容性bug，若发现旋转相册呈扁平状，请关闭fancybox或换用medium_zoom。
{% endtip %}
{% tabs notation,4 %}
<!-- tab 标签语法 -->
```markdown
{% carousel [Id] , [name] %}
![](/img/1.jpg)
![](/img/2.jpg)
![](/img/3,jpg)
{% endcarousel %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
`Id`: 相册唯一ID，用于监测相册鼠标动作。禁止使用中文。同一页内不得出现相同ID的carousel相册。
`name`: 相册中间显示的内容，建议用英文单引号包裹。
<!-- endtab -->
<!-- tab 示例源码 -->
```markdown
{% carousel 'SF','strike freedom' %}
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110444226.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110508327.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110525753.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110600751.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110621554.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110637459.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110654150.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110707916.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110719787.png)
![](https://npm.elemecdn.com/akilar-candyassets/image/20200907110731118.png)
{% endcarousel %}
```
<!-- endtab -->
<!-- tab 样式预览 -->
{% raw %}
<div id="SF" class="carousel">
<div id="SF-drag-container" class="drag-container">
<div id="SF-spin-container" class="spin-container">
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110444226.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110508327.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110525753.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110600751.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110621554.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110637459.png" ><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110654150.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110707916.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110719787.png"><br>
<img src="https://npm.elemecdn.com/akilar-candyassets/image/20200907110731118.png">
<p>strike freedom</p>
<div id="SF-carousel-ground" class="carousel-ground" style="width: 720px; height: 720px;"></div></div><script type="text/javascript">carouselinit('SF');</script>
{% endraw %}
<!-- endtab -->
{% endtabs%}

