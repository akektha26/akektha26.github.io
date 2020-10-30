var wnum =0; //슬라이드 인덱스 초기화 프로그램에서는 0부터 시작
var wwslidingAuto=null; //슬라이드 자동실행 변수 초기값
//자바스크립트 함수 선언
function play_w(directw){ //다이렉트 좌우 슬라이드 방향
    if(directw=="right"){
        wnum = wnum + 1; //wnum++
        if(wnum>2){wnum = 0;}

    }else if(directw=="left"){
        wnum = wnum - 1; //wnum--
        if(wnum<0){wnum = 2;}

    }else{
        wnum = directw;
    }

    $(".rollingbtn").find('li.seq a').each(function(){
        // 슬라이드 이미지아래의 이동버튼을 초기값으로 동그랑땡으로 만든다.(아래)
        $(".rollingbtn li.seq a img").attr('src',
        $(".rollingbtn li.seq a img").attr('src').replace('_on.png','_off.png'));

    });
    // ".rolling li.butt0 a img" --> ".rollingbtnli.butt1 a img"
    $(".rollingbtn li.butt"+wnum+ " a img").attr('src',
    $(".rollingbtn li.butt"+wnum+ " a img").attr('src').replace('_off.png','_on.png'));
    //조건 비교/ == 값비교 /=== 값+형태비교
    if(wnum == 0){
        $(".viewImgList li.imglist1").animate({'opacity':0},1000); //단위 1000밀리초=1초
        //슬라이드 인덱스가 0번일때 li태그를 1초간 서서히 사라지게 한다.
        $(".viewImgList li.imglist2").animate({'opacity':0},1000);
        $(".viewImgList li.imglist0").animate({'opacity':1},1000);
    }else if (wnum==1){
        $(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist2").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist1").animate({'opacity' : 1 },1000);
    }else if (wnum==2){
        $(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist1").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist2").animate({'opacity' : 1 },1000);
    }

    //true, false 값을 슬라이드 AUTO 변수값으로 사용.
    if(wwslidingAuto){
        clearTimeout(wwslidingAuto); //play_w함수를 실행중지한다.
    }
    wwslidingAuto = setTimeout("play_w('right')",6000);

}
//여기서 함수 진입(play_w함수명을 호출해서 실행)됩니다. (아래)
var wwslidingAuto=setTimeout("play_w('right')",3000); //6초후에 play_w함수를 실행.

$(document).ready(function(){

	$(".rollstop a").click(function(){
		$(this).parent().hide();
        $(".rollplay").css('display','inline-block');
        //하단 진행버튼을 클릭했을때, setTimeout으로 실행시킨 함수 실행을 취소
		if(wwslidingAuto)clearTimeout(wwslidingAuto);	
	});

	$(".rollplay a").click(function(){
		$(this).parent().hide();
		$(".rollstop").css('display','inline-block');
		play_w('right');
	});

	$(".rollingbtn li.seq a").each(function(index){ //each 는 매순간
		$(this).click(function(){
			$(".rollplay").hide();
			$(".rollstop").css('display','inline-block');
			if(wwslidingAuto)clearTimeout(wwslidingAuto);	
			play_w(index);
		});
	});

});