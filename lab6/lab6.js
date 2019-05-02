window.onload = function(){
    var timerIn = null;
    var timerOut = null;
    var imgs = document.getElementsByTagName("img");
    var $bImage = document.getElementById("featured");

    for(var i = 0 ; i<imgs.length ; i++) {
    imgs[i].index = i;
    imgs[i].onclick = function () {
        $bImage.innerHTML = "<img " + "src=" + "\"" + this.src.replace(/small/g, "medium") + "\" title = \"" + this.title + "\"/>"+
        "<figcaption>" + this.title + "</figcaption>";
        // console.log($bImage.innerHTML)

    }
}
// $bImage.onclick = function () {
//     alert("fuck")
// }

// 注意要重新引用
$bImage.onmouseleave = function () {
    var figcaption = document.getElementsByTagName("figcaption")[0];
    clearInterval(timerIn)
    var opacity = figcaption.style.opacity;
    timerOut = setInterval(function () {
        var doubleOp = figcaption.style.opacity;
        doubleOp -= 0.02;
        figcaption.style.opacity = String(doubleOp);
        // console.log("op="+doubleOp);
        // console.log("sb="+figcaption.style.opacity)
        if (doubleOp === 0) {
            clearInterval(timerOut);
        }
    }, 1000 / (opacity / 0.02));
}

$bImage.onmouseenter = function () {
    var figcaption = document.getElementsByTagName("figcaption")[0];
    clearInterval(timerOut)
    timerIn = setInterval(function () {
        var doubleOp = figcaption.style.opacity*100;
        doubleOp += 2;
        figcaption.style.opacity = String(doubleOp/100);
        //因为直接使用+=会在字符串之后直接加0.2，所以通过*10来转换类型
        // console.log("op="+doubleOp);
        // console.log("sb="+figcaption.style.opacity)
        if (doubleOp >= 80) {
            clearInterval(timerIn);
        }
    }, 1000 / (0.8 / 0.02));
}

}