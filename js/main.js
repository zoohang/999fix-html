window.onload = function() {
    var oDiv = $('#tab');
    var oLi = $('#tab').children('.tabList').find('li');
    var aCon = oDiv.children('.tabCon').children('.tab_div');
    var timer;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function() {
            show(this.index);
        }
    }
    function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            //aCon[j].className = "";
            aCon[j].style.opacity = 0;
            aCon[j].style.display = 'none';
            aCon[j].style.filter = "alpha(opacity=0)";
        }
        oLi[index].className = "cur";
        clearInterval(timer);
        timer = setInterval(function() {
            alpha += 2;
            alpha > 100 && (alpha = 100);
            aCon[index].style.opacity = alpha / 100;
            aCon[index].style.display = 'block';
            aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
            alpha == 100 && clearInterval(timer);
        },
        5)
    }

    var oDiv2 = $('#tab2');
    var oLi2 = $('#tab2').children('.tabList').find('li');
    var aCon2 = oDiv2.children('.tabCon').children('.tab_div');
    var timer2;
    for (var i = 0; i < oLi2.length; i++) {
        oLi2[i].index = i;
        oLi2[i].onclick = function() {
            show2(this.index);
        }
    }
    function show2(a) {
        index = a;
        var alpha2 = 0;
        for (var j = 0; j < oLi2.length; j++) {
            oLi2[j].className = "";
            //aCon2[j].className = "";
            aCon2[j].style.opacity = 0;
            aCon2[j].style.display = 'none';
            aCon2[j].style.filter = "alpha2(opacity=0)";
        }
        oLi2[index].className = "cur";
        clearInterval(timer2);
        timer2 = setInterval(function() {
            alpha2 += 2;
            alpha2 > 100 && (alpha2 = 100);
            aCon2[index].style.opacity = alpha2 / 100;
            aCon2[index].style.display = 'block';
            aCon2[index].style.filter = "alpha2(opacity=" + alpha2 + ")";
            alpha2 == 100 && clearInterval(timer2);
        },
        5)
    }
}