// 自动生成网格
// var div2 = document.getElementById('div2');
// var e=1;
//     for(var i = 1;i < 362;i++){
//        var div2_1 = document.createElement('div' + (i+1) );
//         if(e % 2 != 0)
//         {
//         div2_1.innerHTML =  '<P style="width:52.55px;height:52.55px;background-color:rgb(250,250,0);">' + i + '</P>';
//         }
//         if(e % 2 == 0||i % 2 == 0){
//         div2_1.innerHTML =  '<P style="width:52.55px;height:52.55px;background-color:rgb(250,0,0);">' + i + '</P>';
//         }
//         if(i % 19 == 0){
//            e++;
//        }
//         div2_1.style.float = 'left';
//         div2_1.style.margin = 0 + 'px ' + 0 + 'px ' + ' ' + 0 + ' ' + 0 + 'px';
//         div2.appendChild(div2_1);
//     }
// 生成移动图片
// var f = 0;
// function xin(){
//     if(f == 4)
//     f -= 4;
//     f++;
//     var div3 = document.getElementById('div3');      
//     div3.innerHTML = '<img src="' + f + '.jpg" alt="" id="div3_1" style=" animation-name: move;animation-duration: 3s;"></img>';    
//     setTimeout('xin()',3000);
// }
// xin();
// 进度条
    var inputTime2 = +new Date('2022-1-25');
    var inputTime3 = +new Date('2022-2-1');
    var div4_width = document.getElementById('div4').offsetWidth;
    var div4_p = document.getElementById('div4_p');
function xiu(){

    var inputTime4 = +new Date();
    var shijianbi = ((inputTime4 - inputTime2) / (inputTime3 - inputTime2));

    div4_p.style.width = div4_width * shijianbi + 'px';
   
    setTimeout('xiu()',1);
}
xiu();
div4_p.onmouseover = function(){
    var inputTime4 = +new Date();
    var shijianbi = ((inputTime4 - inputTime2) / (inputTime3 - inputTime2));
    div4_p.innerHTML ='进度为：' + shijianbi;
    setTimeout('div4_p.onmouseover',1);
}
div4_p.onmouseout = function(){
    var inputTime4 = +new Date();
    var shijianbi = ((inputTime4 - inputTime2) / (inputTime3 - inputTime2));
    div4_p.innerHTML = ' <p style="position: relative;top: 30%;text-align: right;color: black;background: none;font-size:10px;display: none;">进度为：' + shijianbi + '</p>';
}
var a = 0,b = 0,c = 0,d=0;
function xun(){
    // 获取当前时间
    var time = new Date();
    var date = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var now_hns = document.getElementById('now_hns');
    // 中文当前时间
    now_hns.innerText = h + '点' + m + '分' + s + '秒';
    var zs = (60-s)+(60-m)*60+(24-h)*3600;
    var shi1 = 30 - date;
    var shi2 = 24 - h;
    var shi3 = 60 - m;
    var shi4 = 60 - s;
    var ps = document.getElementsByTagName('p');
    // 获取天数和时分秒
    ps[4].innerText = shi1 + '天';
    ps[5].innerText = shi2 + '时';
    ps[6].innerText = shi3 + '分';
    ps[7].innerText = shi4 + '秒';
    // 获取当前时间和春节时间至1970年1月1日
    var inputTime = +new Date();
    var inputTime1 = +new Date('2022-2-1');
    var millisecond = document.getElementById('millise');
    millisecond.innerText = inputTime1 - inputTime;
    // 获取body的宽度
    var width =  document.body.clientWidth;
    var div0 = document.getElementById('div0');
    // 获取#div0的宽度
    var width1 = div0.offsetWidth;
    var div1 = document.getElementById('div1');
    // 修改#div1.width = body.width - #div0.width;
    div1.style.width = width - width1 - 30 + 'px';
    var chunjie = document.getElementById('chunjie');
    var date = document.getElementById('date');
    // 春节倒计时自动换色
    a++;
    if(a + b + c == 750 || a + b + c == 0)
     d++;
    if(a == 250){
        a--;
        b++;
    }
    if(b == 250){
        b--;
        c++;
    }
    if(d % 2 != 0){
        a -= 1;
        b -= 1;
        c -= 1;
    }
    // alert(c);
    if(a + b + c !=0){
        millise.style.background = 'rgb(' + a + ',' + b + ',' + c +')';  
        millise.style.color = 'rgb(' + (250 - a) + ',' + (250 - b) + ',' + ( 250 - c) +')';  
    }
    // 函数自调用，实现无限循环
    setTimeout('xun()',1);
        return 0;
    }
    xun();
    
    
    
    
    
