//爬取更新内容
function fetchCommits(){
  var response = fetch('/json/commits.json').then(res => res.json().then(json =>{
      var commitjson = json;
      for(var i=0;i<commitjson.length;i++){
        var item= commitjson[i];
        var commitmessage = (i+1) + '.' + commitjson[i].commit.message;
        if (i<1){var commitmessagegroup = commitmessage}
        else{var commitmessagegroup = commitmessagegroup +'<br>'+ commitmessage}
      }
      SAONotify("Latest Update",commitmessagegroup,"location.reload(true);");
    })).catch(console.error);
}

//滚动条自动隐藏
var t1 = 0;
var t2 = 0;
var timer = null; // 定时器
document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','display:none;');

// scroll监听
document.onscroll = function() {
  clearTimeout(timer);
  timer = setTimeout(isScrollEnd, 1000);
  t1 = document.documentElement.scrollTop || document.body.scrollTop;
  document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','display:block;');
}

function isScrollEnd() {
  t2 = document.documentElement.scrollTop || document.body.scrollTop;
  if(t2 == t1){
    document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','display:none;');
  }
}
//动态标题

var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

//404重定向
// 对于原本的.html死链的重定向设置。给404页面添加按钮
function ReDirect() {
  var pram_arr = window.location.pathname.split("/");
  var abbr_arr =pram_arr[2].split(".");
  if(abbr_arr[1] === "html"){
    window.location.href="/posts/"+abbr_arr[0]+"/";
  }
  else{
    SAONotify("404","非常抱歉，文章可能已经被删除了...","window.location.href='/'");
  }
}

// 公祭日判定

if(PublicSacrificeDay()){
  document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}

function PublicSacrificeDay(){
    var PSFarr=new Array("0403","0404","0405","0508","0512","0707","0814","0909","0918","0930","1025","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //1999年5月8日 中国驻南斯拉夫联盟共和国大使馆被美军轰炸
    //2008年5月12日，四川汶川地震
    //1937年7月7日,七七事变 又称卢沟桥事变
	  //8月14日，世界慰安妇纪念日
    //1976年9月9日，毛泽东逝世
  	//1931年9月18日，九一八事变
  	//烈士纪念日为每年9月30日
    //1950年10月25日，抗美援朝纪念日
    //1937年12月13日，南京大屠杀
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth()+1;
    if(currentdate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(currentdate.getDate()>9){
      str += currentdate.getDate();
    }else{
      str += "0" + currentdate.getDate();
    }
    if(PSFarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}
// 监听algolia搜索框高度
searchSize();
window.addEventListener('resize', searchSize)
// 搜索窗口自适应
function searchSize() {
    // 只需要适应手机端
    if (document.body.clientWidth > 768) return
    let div = document.querySelector('#algolia-hits')
    // 监听插入，如果有插入则根据可视高度动态设置最大高度
    div.addEventListener('DOMNodeInserted', () => {
        div.children[0].style.maxHeight = (document.documentElement.clientHeight - 310) + 'px'
    })
}
//上下页切换按钮
document.addEventListener('scroll',function(){

  //滚动条高度+视窗高度 = 可见区域底部高度
  var visibleBottom = window.scrollY + document.documentElement.clientHeight;
  //可见区域顶部高度
  var visibleTop = window.scrollY;
  var pagination = document.getElementById('pagination');
  var eventlistner = document.getElementById('pagenation-anchor');
  if (eventlistner&&pagination){
  var centerY = eventlistner.offsetTop+(eventlistner.offsetHeight/2);
  if(centerY>visibleTop&&centerY<visibleBottom){
    // 显示版块
    pagination.classList.add("pagination-active")
  }else{
    //隐藏版块
    pagination.classList.remove("pagination-active")
  }
}
})


