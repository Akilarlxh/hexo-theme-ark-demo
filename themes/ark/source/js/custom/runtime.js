setInterval(() => {

  let create_time = Math.round(new Date('2019-04-17 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);
  //格式规范化，个位数前面加0
  var nol = function(h){
    return h>9?h:'0'+h;
  }
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }//年
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }//天
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }//时
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }//分
  if (second > 0) {
    time[4] = nol(second);
  }//秒
  //早上7点到晚上10点营业
  if ((Number(time[2])<22) && (Number(time[2])>7)){
    currentTimeHtml ="<div class='ark-footer-reminder'>糖果屋营业中</div><div class='ark-footer-timer'>建站时间持续增长中</div><div id='ark-site-runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  } 
  //其余时间打烊
  else{
    currentTimeHtml ="<div class='ark-footer-reminder'>糖果屋打烊了</div><div class='ark-footer-timer'>建站时间持续增长中</div><div id='ark-site-runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>'; 
  }
  //覆写挂载标签的内容
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);