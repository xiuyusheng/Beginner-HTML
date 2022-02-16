    var head = document.getElementById('head');
    var button = document.getElementsByTagName('button');
    var shebei_height = window.innerHeight;
    var shebei_width = window.innerWidth;
    var head_width = document.body.clientWidth;
    var div2 = document.getElementById('div2');
    var cai = document.getElementsByTagName('img');
    var jiacai = document.getElementById('jiacai');
    var guanyu = document.getElementById('guanyu');
    var lianxi = document.getElementById('lianxi');
    var div5 = document.getElementById('div5');
    var tankuang = document.getElementsByTagName('button');
    var text1 = document.getElementById('text1');
    for(let i=4;i<20;i++){
        tankuang[i].onclick =function(){
        div5.style.display = 'block';
        text1.innerHTML = this.innerHTML;
    }
        tankuang[i].style.width=shebei_width+'px';
    }
    div5.style.width = shebei_width + 'px';
    div5.style.height = shebei_height + 'px';
    div5.onclick = function(){
        div5.style.display = 'none';
    }
    for(let i=1;i < cai.length;i++){
        cai[i].style.width = (shebei_width - 20) / 3 + 'px';
    }
    guanyu.onclick = function(){
        alert('      为了让大家在家也可以做出自己喜欢吃的菜，无论做给父母或是亲戚朋友，都是不错的选择，每道菜一定要自己品尝过之后在展示给他人哦，以免产生不悦的心情,有女盆友的快来选一道菜展示给你的小宝吧🥰.\r\r如有不满意可通过“我要加菜”或者“联系me”联系本人，谢谢。');
    }
    lianxi.onclick = function(){
        alert('QQ:3044639452（煮咖啡的大叔）\n微信:17676520416（北伯凉意）')
    }
    jiacai.onclick = function() {       
        var caiming = prompt('请输入菜名，若内容为空结果不会被上传');
        if(caiming){
            var caifang = prompt('请输入菜方，若内容为空结果不会被上传');
            if(caifang){
                var zhaopian = prompt('图片链接（可不填，可在手机上下载“一个木函”app，免费转图片为链接,或可发图片给作者）')
                var beizhu = prompt('备注（可不填）')
                var url = "https://sctapi.ftqq.com/SCT118418TYTpPgLPpQEf9DQM1rUSzlTq6.send?title="+ '加菜了' +"&desp=" +'菜名：'+ caiming + '💕'+'菜方：' + caifang +'❤️'+'备注:'+ beizhu+'🖼️'+zhaopian;
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.send();
                alert('已上传，因作者较忙，因此需等次日才能有结果，还请谅解🙏');
            }
         }
         else if(caiming==="")
         alert('请输入菜名');
    }
    cai[0].style.width = shebei_width + 'px';
    head.style.width = head_width + 'px';
    for (let i= 0; i < 4; i++) {
        button[i].style.width = head_width / 4 + 'px';
    }
// function xin() {
    
//     setTimeout('xin()',1);    
// }
// xin();
