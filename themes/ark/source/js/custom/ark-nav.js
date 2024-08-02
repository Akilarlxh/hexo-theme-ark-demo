// 获取当前时间
var box = document.getElementById('ark-nav-message-date-box')

//不足十位补零
var addZero = val => val < 10 ? '0' + val : val
//把阿拉伯数字的星期转化为中国汉字的星期 // 星期映射表
var trans = val => {
    var obj = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
    }
    return obj[val]
}
setTime()
//获取时间的方法
function setTime() {
    var time = new Date();
    // var year = time.getFullYear(); // 获取年
    // var month = time.getMonth() + 1; // 获取月（是从0到11，所以我们要给他加1）
    // var date = time.getDate(); // 获取日
    var hour = time.getHours(); // 获取小时
    var min = time.getMinutes(); // 获取分钟
    var sec = time.getSeconds(); // 获取秒
    var day = time.getDay(); // 获取星期几(0是星期日)


    var value = addZero(hour) +
        ':' + addZero(min) + ":" + addZero(sec) + ' 星期' + trans(day)
    // 把所有的时间拼接到一起
    box.innerText = value
    // console.log(value)
    // 把拼接好的时间插入到页面

}
// 让定时器每间隔一秒就执行一次setTime这个方法（这是实现时钟的核心）
setInterval(setTime, 1000)

// 点击激活按钮后启动菜单栏
document.getElementById('ark-menu-start-btn').addEventListener('click', () => {
    document.getElementById('ark-cab-box').classList.remove("arksink") //驾驶舱上浮
    document.getElementById('ark-menu-box').classList.remove("arksink") //菜单栏上浮
    document.getElementById('ark-cab-box').classList.remove("arkend") //驾驶舱启动
    document.getElementById('ark-menu-box').classList.remove("arkend") //菜单栏显现
})
// 点击关闭按钮关闭菜单栏
document.getElementById('ark-menu-end-btn').addEventListener('click', () => {
    document.getElementById('ark-cab-box').classList.add("arkend") //驾驶舱结束动画
    document.getElementById('ark-menu-box').classList.add("arkend") //菜单栏结束动画
    setTimeout(function () {
        document.getElementById('ark-menu-box').classList.add("arksink") //菜单栏下沉
        document.getElementById('ark-cab-box').classList.add("arksink") //驾驶舱下沉
    }, 1800)
})
// 点击页面选项后关闭菜单栏，延时一段时间后再跳转。
function ark_menu_link(link) {
    //首先播放菜单栏结束动画，保留驾驶舱版块
    document.getElementById('ark-menu-box').classList.add("arkend")
    //延时0.5s待动画放完后再启动跳转
    setTimeout(function () {
        //动画播放完后菜单栏下沉
        document.getElementById('ark-menu-box').classList.add("arksink")
        // 对跳转链接进行判断，站外链接直接跳转
        if (link.includes('https://') || link.includes('http://')) {
            window.location.href = link;
        }
        // 若是站内链接,先判断是否有pjax
        else {
            if (pjax) {
                pjax.loadUrl(link);
            }
            else {
                window.location.href = link;
            }
        }
    }, 500)
}

