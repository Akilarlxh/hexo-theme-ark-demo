/* 
    侧栏通讯录在线人数统计
*/
var addressbook = document.getElementsByClassName("card-friend-class-name");
if (addressbook){
  for (var i=0; i<addressbook.length; i++){
    var online = addressbook[i].getElementsByClassName("online-friend-link").length;
    addressbook[i].getElementsByClassName("online-friend-number")[0].innerHTML = "  "+online+"/";
  }
}

/* 

    fixed_comment.js相关内容 

*/
//移除FixedComment类，保持原生样式，确保不与最新评论跳转冲突
function RemoveFixedComment() {
  var activedItems = document.querySelectorAll('.fixedcomment');
  if (activedItems) {
    for (i = 0; i < activedItems.length; i++) {
      activedItems[i].classList.remove('fixedcomment');
    }
  }
}
//给post-comment添加fixedcomment类
function AddFixedComment(){
  var commentBoard = document.getElementById('post-comment');
  var quitBoard = document.getElementById('quit-board');
  commentBoard.classList.add('fixedcomment');
  quitBoard.classList.add('fixedcomment');
}
//创建一个蒙版，作为退出键使用
function CreateQuitBoard(){
  var quitBoard = `<div id="quit-board" onclick="RemoveFixedComment()"></div>`
  var commentBoard = document.getElementById('post-comment');
  commentBoard.insertAdjacentHTML("beforebegin",quitBoard)
}

function FixedCommentBtn(){
  //第一步，判断当前是否存在FixedComment类，存在则移除，不存在则添加
  // 获取评论区对象
  var commentBoard = document.getElementById('post-comment');
  // 若评论区存在
  if (commentBoard) {
      // 判断是否存在fixedcomment类
      if (commentBoard.className.indexOf('fixedcomment') > -1){
        // 存在则移除
        RemoveFixedComment();
      }
      else{
        // 不存在则添加
        CreateQuitBoard();
        AddFixedComment();
      }
  }
  // 若不存在评论区则跳转至留言板
  else{
      if (pjax){
        pjax.loadUrl("/comments/#post-comment");
      }
      else{
        window.location.href = "/comments/#post-comment";
      }
  }
}
//切换页面先初始化一遍，确保开始时是原生状态。
RemoveFixedComment();



