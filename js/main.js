/* 함수의 기본작동원리
	function aname(vars) { //함수선언
		alert(vars + "이름출력");
	} 
	aname('김일국'); //함수호출
	*/
	$(document).ready(function(){
		//alert('콜백함수 실행');
		$(".openMOgnb").click(function(){
			//alert();//디버그용
			// $(".header_cont").css("display","block");
			$(".header_cont").slideDown("show");
			//header 아이디영역 백그라운드 추가
			$("#header").addClass("on");
			});
		$(".closePop").click(function(){
			// $(".header_cont").css("display","none");
			$(".header_cont").slideUp("fast");
			$("#header").removeClass("on");
			});
		
	});