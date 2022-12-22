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

- 요소 쌓임 순서 (Stack order)
    - 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지)결정
    1. 요소에 position 속성의 값이 있는 경우 위에 쌓임. (기본값 static 제외)
    2. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임.
    3. 1번과 2번 조건까지 같은 경우, HTML의 다음 구조일 수록 위에 쌓임.

- z-index 
    - 요소의 쌓임 정도를 지정
        - 기본값 auto : 부모 요소와 동일한 쌓임 정도
        - 숫자 : 숫자가 높을 수록 위에 쌓임
    - 요소의 display가 변경됨
        - position 속성의 값으로 absolute, fixed가 지정된 요소는,
          display 속성이 block으로 변경됨.


### position 속성의 기본값은?
    - static

### 위치상 부모 요소를 기준으로 배치하는 position 속성의 값은?
    - absolute

### 뷰포트를 기준으로 배치하는 position 속성의 값은
    - fixed

### display 속성이 block 값으로 바뀌지 않는 position 속성의 값은?
    1)absoult
    2)relative - 정답
    3)fixed

## flex(정렬)

    - display
        - flex container의 화면 출력(보여짐)특성
        - flex : 블록 요소와 같이 flex container 정의
        - inline-flex : 인라인 요소와 같이 flex container 정의
    
    -flex-direction
        - 주 축을 설정
        - row : 행 축 (좌=>우)
        - row-reverse : 행 축 (우=>좌)
        - column : 열 축 (위=>아래)
        - column-reverse : 열 축 (아래=>위)
    
    - flex-wrap
        - flex items 묶음(줄 바꿈) 여부
        - nowrap : 묶음(줄 바꿈) 없음
        - wrap : 여러 줄로 묶음
        - wrap-reverse : wrap의 반대 방향으로 묶음
    
    - justify-content
        - 주 축의 정렬 방법
        - flex-start : Flex Items를 시작점으로 정렬
        - flex-end : Flex Items를 끝점으로 정렬
        - center : Flex Items를 가운데 정렬
        - space-between : 각 Flex Item 사이를 균등하게 정렬
        - space-around : 각 Flex Item의 외부 여백을 균등하게 정렬
    
    - align-content
        - 교차 축의 여러 줄 정렬 방법
        - stretch : flex items를 시작점으로 정렬
        - flex-start : flex items를 시작점으로 정렬
        - flex-end : flex items를 끝점으로 정렬
        - center : flex items를 가운데 정렬
        - space-between : 각 Flex Item 사이를 균등하게 정렬
        - space-around : 각 Flex Item의 외부 여백을 균등하게 정렬

    - align-items
        - 교차 축의 한 줄 정렬 방법
        - stretch : flex items를 교차 축으로 정렬
        - flex-start : flex items를 각 줄의 시작점으로 정렬
        - flex-end : flex items를 각 줄의 끝점으로 정렬
        - center : flex items를 각 줄의 가운데 정렬
        - baseline : flex items를 각 줄의 문자 기준선에 정렬

    - order
        - flex item의 순서
        - 0 : 순서 없음
        - 숫자 : 숫자가 작을 수록 먼저

    - flex-grow
        - flex item의 증가 너비 비율
        - 0 : 증가 비율 없음
        - 숫자 : 증가 비율
    
    - flex-shrink
        - flex item의 감소 너비 비율
        - 1 : flex container 너비에 따라 감소 비율 적용
        - 숫자 : 감소 비율
    
    - flex-basis
        - flex item의 공간 배분 전 기본 너비
        - auto : 요소의 content 너비
        - 단위 : px, em, rem 등 단위로 지정

### display:flex;가 지정된 요소의 자식 요소를 Flex ???이라 부릅니다. 이 ???에 들어갈 용어는?
    - items

### flex container의 주 축을 지정하는 속성은?
    - flex-direction

### flex-wrap 속성의 기본값은?
    - nowrap

### 교차 축의 한 줄 정렬을 위한 속성은?
    - aling-items

## transition(전환)
    
    - transitions
        - 요소의 전환(시작과 끝) 효과를 지정하는 단축 속성
        - trasition-property
            - 전환 효과를 사용할 속성 이름을 지정
            - all : 모든 속성에 적용
            - 속성이름 : 전환 효과를 사용할 속성 이름 명시

        - trasition-duration
            - 전환 효과의 지속시간을 지정
            - 0s : 전환 효과 없음
            - 시간 : 지속시간(s)을 지정

        - trasition-timing-function
            - 전환 효과의 타이밍(Easing) 함수를 지정
            - ease : 느리게-빠르게-느리게
            - linear : 일정하게 
            - ease-in : 느리게-빠르게
            - ease-out : 빠르게-느리게
            - ease-in-out : 느리게-빠르게-느리게

        - trasition-delay
            - 전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
            - 0s : 대기시간 없음
            - 시간 : 대기시간(s)을 지정