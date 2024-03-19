2024/03/18~19 TIL

### 고민한점 & 배운점:

1. 컴포넌트는 여러번 리랜더링 되므로 불필요한 함수 호출 발생에 유의  
   e.g. 클릭이벤트 등에 연결하는 함수들, useState의 초기값으로 함수의 return값을 넣을 때 등 callback함수 활용.
   -> 함수를 return하므로 클릭이벤트가 발생할때, 초기값이 필요할 때 등 필요한 상황에서만 함수 호출
2. 상태나 로직을 child, parent component중 어디에 둘것인지의 문제.  
   투두리스트의 추가, 수정, 삭제 기능을 하위컴포넌트에서 처리하기 위해
   처음에는 setTasks 자체를 prop으로 넘겨주었으나 결론적으로 addTask함수 자체를 prop으로 줘서 추가할 task를 상위컴포넌트로 전달만 해줬다.  
   이렇게 중요 데이터나 로직은 하위컴포넌트가 아닌 상위 컴포넌트에서 관리(리액트는 단방향 데이터 흐름)하는게 일반적인듯 하다.  
   장단점이 있다는데 코드를 많이 봐야지 알 수 있을것같다.
3. modes처럼 값이 바뀔 가능성이 없는 상수값은 컴포넌트 외부에 위치시킨다.
4. useState사용시 주의사항들 배움.  
   useState를 써서 상태를 변화시킬때 setState함수의 clousure로 state에 접근한다, prev 매개변수는 필요한 경우에만 사용  
   useState로 상태 변경시 "다음 렌더때" 반영 된다는 것을 주의해야 한다.->setState함수 호출시 setState함수 내부에서 state의 값이 변하지만, 컴포넌트의 rerender된 후에 다시 useState에서 state와 setState를 불러오기 때문에 변경사항이 반영되는 것은 다음 렌더때이다.

### 소감

1. useStateHook 사용시 주의사항으로 비동기 요청시 abort?controller? 라는 것을 봤는데 투두리스트는 정적인 데이터만 다루고 있어서 사용 안했다. 나중에 적용해보고 싶다.

## TODOLIST

task를 추가 수정 삭제 가능한 할일 앱  
기능1. 전체, 진행중, 완료 탭이 나뉨  
기능2. 완료 task는 줄이 그어지고 체크박스가 checked상태임  
기능3. task추가, 수정, 삭제 기능  
기능4. task 저장

task 저장  
[v] localStorage에 set, get (useLocalStorage)

task 읽기  
[v] 모드에 따라 각 모드에 해당하는 task 보여주기

task 추가  
[v] input에 task입력후 추가버튼 클릭시 tasks배열에 추가(초기 상태는 INPROGRESS)  
[v] 엔터키 입력시 추가로직 시행  
[v] 추가로직 후 input의 value 초기화

task 수정  
[v] task 수정 버튼 클릭시 해당 task의 text수정 (input의 readonly x)  
[v] 체크박스 toggle로 task의 상태 변경

task 삭제  
[v] task옆의 삭제버튼 클릭시 삭제
