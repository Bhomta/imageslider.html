////let picWidth = 1440;

//document.getElementById("pic0").style.left = (1440 * 0) + "px";
//document.getElementById("pic1").style.left = (1440 * 1) + "px";
//document.getElementById("pic2").style.left = (1440 * 2) + "px"; //숫자 + 문자

//문자 + 숫자 -> + 연결연산자 0,1,2

let picWidth = 1440;
for(var i=0; i<3; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}

let moveNum = 0;

document.getElementById("prev_btn").onclick = function(){
    //document.getElementById("pic0").style.left = (1440 * 1) + "px";
    //document.getElementById("pic1").style.left = (1440 * 2) + "px";
    //document.getElementById("pic2").style.left = (1440 * 3) + "px";
    console.log("이전 버튼 클릭");
    if(moveNum > 0){
        moveNum--;
    }

    else {
        moveNum = 2;
    }

    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    }
};


document.getElementById("next_btn").onclick = function(){
    //document.getElementById("pic0").style.left = (1440 * -1) + "px";
    //document.getElementById("pic1").style.left = (1440 * -2) + "px";
    //document.getElementById("pic2").style.left = (1440 * -3) + "px";

    console.log("다음 버튼 클릭");
    if(moveNum < 2){
        moveNum++;
    }

    else {
        moveNum = 0;
    }

  
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    }

};

//for 반복문 for(초기값; 조건식; 증감식;)

//for(var i=0; i<10; i++){
//    console.log(i);
//}