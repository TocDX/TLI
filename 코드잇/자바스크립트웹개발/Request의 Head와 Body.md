하나의 Request는 Head와 Body가 존재한다.

Head: Request에 대한 부가정보 ex)메소드(method)
Body: 실제 데이터를 담는 부분

POST,PUT Request는 Body에 값을 담아 보내야 한다.
GET,DELETE Request는 Body가 필요하지 않다.

웹에서 사용되는 HTTP의 프로토콜에는 여러 버전이 있습니다. 현재 시중의 서비스들에서는 1.1 버전과 2.0 버전이 주로 사용되고 있는데요. 
각 버전에서 리퀘스트의 헤드에 관한 구체적인 표현이 조금 다릅니다.

http/1.1에서는 method와 path의 경우

GET /men/shirts HTTP/1.1 
헤더 1: 값
헤더 2: 값
헤더 3: 값 
...
이런 식으로 가장 첫 번째 줄에 별도의 형식을 갖고 표시됩니다. 이를 start-line이라고 하는데요. 
http/2에서는 start-line 대신에, method와 path를 일종의 가상 헤더(pseudo header)로 표현합니다. 가상 헤더 앞에는 콜론(:)이 붙어있는데요.

...
:method: GET
:path: /men/shirts
...
헤더 1: 값
헤더 2: 값
헤더 3: 값
...
조금 깊은 내용이지만 혹시 이전에 http/1.1 버전 때, 리퀘스트의 헤드와 바디를 배운 분들이 혼동을 할 우려가 있어 참고차 알려드립니다. 
현재 영상에서 접속한 구글 홈페이지의 서버는 촬영 당시 http/2 프로토콜을 지원하는 서버였기 때문에 이렇게 Start-line 대신 가상 헤더들이 보인 것입니다. 
일단 이 가상 헤더들과 일반적인 헤더들을 한번에 묶어서 헤더라고 설명한 것입니다.