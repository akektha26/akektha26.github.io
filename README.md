### 학습목표(아래)

- 반응형 웹사이트 만들기
- 파이어폭스 개발자도구의 스타일 탭사용
- 기존 PC용 > 태블릿용 > 모바일용 CSS작업순서를 [모바일용 > 태블릿용 > PC용] 으로 변경작업

#### 20201028(수)
- z-index: 주), 0부터 시작 , 화면에는 레이어라는 개념으로 처리(포토피아)
- CSS스타일 적용하는 3가지 방법
- 1.인라인스타일: 태그안쪽에 속성 사용 
    예)style="padding:10px"
- 2.파일안에 style태그사용 
    예)<style>내부스타일 주기</style>
- 3.외부CSS파일 지정하기 
    예)<link href="css파일위치"/>
- 깃허브 README.md(마크다운 언어)
- meta데이터: 데이터의 데이터임.(콘텐츠를 설명하는 데이터)
- 메타태그중 viewport 는 반응형 사이트에서 필수.
- 반응형사이트 화면설계서_학생용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/17jXgf7R2BawMt3K9eoxfnnO_8X9yClLZ/view?usp=sharing
- 반응형사이트 기획서_학생용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1dC2RMqDqNeEFtr-r-dvcsKk0YwPjk0Xy/view?usp=sharing

#### 20201029(목)
- bbs (pc통신부터 게시판약자 bbs) board system.
- img는 가로크기를 지정하면 세로크기는 자동으로 조정.
- j쿼리: 네이티브 자바스크립트 단축키워드로 사용.
- j쿼리 코어를 가져와서 사용.
- 자바스크립트 콜백함수: (아래)
- 이름이 없는 함수.
- 자동실행되는 함수. 기본함수는 이름을 호출해야지 
실행이 되지만, 콜백함수는 호출없이 실행됨.
- nav태그: html5 추가된 태그.
- ul(unorder list)태그 > li(list)태그 ㅣ
- 네이밍규칙: 카멜표기(낙타등) closePop
- 사각형 영역 크기: box-sizing: border-box;
- 웹접근성: 시각장애인을 위한 코딩추가.
- 스크린리더 프로그램용 코딩: 예, text-indent:
- 햄버거메뉴: .openMOgnb--> gnb(global navigation)
글로벌 네비게이션(전체메뉴)
ps. page navigation(페이징링크처리)

#### 20201030(금)
- background-size:cover; 영역보다 이미지가 작을때 작동.
- inherit : 상속(자바에선 extends)
- @media all=> screen,print
- 대괄호[배열],중괄호{구현내용},소괄호(매개변수)
- 16진수(아래) 15인 F까지
- 0,1....9 A B C D E F
- @미디어쿼리
- @=애노테이션=지시어
- 웹프로그램: 기본은 게시판(아래)
- CRUD: Create (Insert-자료입력)
- Read(Select-자료조회)
- Update(자료수정)
- Delete(자료삭제)

#### 20201102(월)
- Rest API: Representation Application Programming Interface
- 원시데이터(Raw데이터-공공데이터)
앱인터페이스(APInputOutput)에서 받아서, 재가공해서 화면에 뿌려주는 작업
(마스크앱, 코로나19환자정보, SNS로그인)
- 토큰: 네트워크로 전송되는 조각 데이터.
- 토큰: OAuth2.0인증데이터(SNS로그인)
- 람다식(코드생략:애로우함수):자바7(x),자바8(o),안드로이드 스튜디오
- 자바 -> , 자바스크립트 =>
- 자바스크립트 버전(아래)
- es5(엑마스크립트2015-오리지널.네이티브자바스크립트비슷), es7(엑마스크립트2017-람다함수식추가-코드축소구현버전)
- 슬라이드 버튼 3초후에 플레이시 초기 진행버튼 숨기기 처리 필요.
- 자바스크립트(제이쿼리) 디버그 방법(아래)
- 1. 개발자도구>콘솔열고>화면실행
- 2. alert('디버그값출력');
- 3. console.log('디버그값출력');

#### 2000만원이상 프로젝트에서 진행순서
1.클라이언트(공개입찰올림):
요구사항명세서(*RFP)
2.개발사(업체):위 RFP를 보고 제안서제출
3.클라이언트(낙찰): 업체선정.
4.작업시작: 개발사작업시작.

#### 취업 IT개발회사기준: 법인(주식회사)중소기업
(사원:10명내외, 연매출액:10억내외)
개발팀(제안서작성)
디자인팀(제안서작성)
기획팀(제안서제출)



#### 20201022(목)

- 소스내용 교육용으로 정리
- 깃 사용시 토큰인증헤제: [윈도우 자격증명관리]에 personal access token 을 삭제 후 커밋
- 강사블로그 http://blog.daum.net/web_design 에서 익스텐션으로 검색 vscode 사용법 참조.
- 비주얼스튜디오코드 익스텐션 파일 구글드라이브 다운로드(아래):
- https://drive.google.com/file/d/1NkZ0qfr2P0tDsRKyP9qHQ3tPkafeKiPv/view?usp=sharing

#### 20201019(월)

- 반응형사이트 화면설계서_교사용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1GqBK_sKPFpfhTDd4whbLK3ZLXP1g3_Kw/view?usp=sharing
- 반응형사이트 기획서_교사용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1Wjuov4TCQjqBtCu5EbUc3SNns8PaxHSX/view?usp=sharing
