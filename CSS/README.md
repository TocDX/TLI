## BOX 모델

- width, height = 요소의 가로/세로 너비
    - auto : 브라우저가 너비를 계산 (지정하지 않아도 auto는 들어가있다.)
    - 단위 : px,em, vw 등 단위로 지정

- max-width, max-height
    - none : 최대 너비 제한 없음
    - auto : 브라우저가 너비를 계산
    - 단위 : px, em, vw 등 단위로 지정

- min-width, min-height
    - none : 최대 너비 제한 없음
    - auto : 브라우저가 너비를 계산
    - 단위 : px, em, vw 등 단위로 지정


- <span></span> = 대표적인 **인라인**요소. 본질적으로 아무것도 나타내지 않는 **콘텐츠 영역을 설정**하는 용도.   
    - auto : 포함한 콘텐츠 크기만큼 자동으로 줄어듬(가로,세로)

- <div></div> = 대표적인 **블록**요소. 본질적으로 아무것도 나타내지 않는 **콘텐츠 영역을 설정**하는 용도.
    - auto : 부모 요소의 크기만큼 자동으로 늘어남(가로,세로)

### width와 height의 속성은?
    - width: 요소의 가로너비
    - height: 요소의 세로너비

### width와 height의 기본값은?
    - auto이다

### max-width max-height의 기본값은?
    - none이다

### min-width min-height의 기본값은?
    - 0이다

## CSS의 단위

- px : 픽셀
- % : 상대적 백분율
- em : 요소의 글꼴 크기 (10em = 요소가 가지고 있는 폰트 사이즈 * 10 )
- rem : 루트 요소(html)의 글꼴 크기(루트란: 최상위를 뜻한다.) (html요소의 지정되어있는 폰트의 크기만 사용한다.)
- vw : 뷰포트 가로 너비의 백분율. 
- vh : 뷰포트 세로 너비의 백분율

### em단위의 기준은?
    - 요소가 가지고 있는 폰트 사이즈 

### 0px과 0vw 중 더 큰 값은?
    - 같다

## 외부여백(margin)

- margin = 요소의 **외부 여백(공간)을** 지정하는 단축 속성
    - 음수를 사용할 수 있다
    - 0 : 외부 여백 없음
    - auto : 브라우저가 여백을 계산(가로,세로 너비가 있는 요소의 가운데 정렬에 활용한다)
    - 단위 px, em, vw 등 단위로 지정
    - %: 부모 요소의 가로 버니에 대한 비율로 지정 (마진을 %로 사용하는 경우는 드물다.)
- margin: 10px 20px 40px 50px(위, 우, 아래, 좌 ) 
- margin: 10px 20px (위아래, 좌우) 
- margin: 10px 20px 40px(위, 좌우, 아래, ) 
- margin: 10px 20px 30px 40px(위, 우, 아래, 좌) 시계방향

### margin 속성의 역할은?
    - 외부여백

### margin: 40px 30px 20px; 에 30px은 어느 방향을 의미하는가?
    - 좌우

### margin:  20px 10px; 에 20px은 어느 방향을 의미하는가?
    - 위 아래

## 내부여백(padding)

- padding = 요소의 **내부 여백(공간)을** 지정하는 단축 속성
    - 0 : 내부 여백 없음
    - 단위: px, em, vw 등 단위로 지정
    - % : 부모 요소의 가로 너비에 대한 비율로 지정
- padding: 10px(위, 우, 아래, 좌 ) 
- padding: 10px 20px (위아래, 좌우) 
- padding: 10px 20px 40px(위, 좌우, 아래, ) 
- padding: 10px 20px 30px 40px(위, 우, 아래, 좌) 시계방향

### padding 속성의 역할은?
    - 내부여백

### padding: 20px 10px 40px 30px;의 30px은 어느방향을 의미하는가?
    - 좌

### padding 속성의 특징은?
    - 요소의 크기가 늘어난다


## 보더(border)

- border = 요소의 테두리 선을 지정하는 단축 속성

- border-width(선-두께)
    - 요소 테두리 선의 두께
    - 기본값 medium: 중간 두께
    - 단위 px, em, % 등 단위로 지정 
    
- border-style(선-종류)
    - 요소 테두리 선의 종류
    - 기본값 none: 선 없음
    - solid : 실선(일반 선)
    - dashed : 파선

- border-color(선-색상)
    - 요소 테두리 선의 색상을 지정하는 단축 속성
    - 기본값 black
    - 색상 : 선의 색상
    - transparent : 투명
    
### boraer 속성의 특징은?
    - 요소의 크기가 늘어남

### 두께 2px, 종류 실선, 색상 빨강의 테두리 선을 코드로 작성하시오.
    - border: 2px solid red;

## border-radius

- border-radius = 요소의 모서리를 둥글게 깎음
    - 기본값 0 : 둥글게 없음
    - 단위 : px, em, vw 등 단위로 지정

## box-sizing

- 요소의 크기 계산 기준을 지정
    - 기본값 content-box 요소의 내용(content)으로 크기 계산
    - boder-box 요소의 내용 + padding + border로 크기 계산

## 출력 특성(display)

- 요소의 화면 출력(보여짐) 특성
    - block : 상자(레이아웃)요소
    - inline : 글자 요소
    - inline-block : 글자 + 상자 요소
    - flex : 플렉스 박스 (1차원 레이아웃)
    - grid : 그리드 (2차원 레이아웃)
    - none : 보여짐 특성 없음, 화면에서 사라짐
    - 기타 : table, table-row, table-cell 등 ..


## 배치(position)

- 요소의 위치 지정 기준
    - static : 기준없음
    - relative : 요소 자신을 기준
    - absolute : 위치 상 부모 요소를 기준
    - fixed : 뷰포트(브라우저)를 기준
    - sticky : 스크롤 영역 기준