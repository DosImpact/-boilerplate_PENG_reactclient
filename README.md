# 재능무역

![thumnail.png](thumnail.png)

# feature

- state 관리
- [ ] node.js 빠르게 HTTPS 적용시켜보기
- [ ] localState 저장 미들웨어 조사

- Auth
- [ ] 회원가입 기능
- [ ] 소셜 로그인 기능

- Post
- [ ] 포스트 모집완료 기능 추가

- Profile
- [ ] 인스타 그램 클론 - 게시물, 저장됨, 피드?
- [ ] 프로파일 수정하기
- [ ] 없는 유저 url 왔을때 표시.

# 이슈

- [ ] 서버랑 연결불량일때 > frontPage가 공백
- [ ] 리덕스 컴포넌트 + 최적화

- [ ] popup 이슈
- 안보이는 div를 화면 전체가 덮고 그위에 pop 창을 올려 두어야한다.
-
- [ ] Header popup 뛰울때 다른곳 누르면 들어가도록 만들기 ( useEffect 에서 비슷한거 했었는데.)
- [ ] Home 로그인 , 첫화면에서도 로그인 누르면 popup이 나온다.

## tag apolloclient update v3.0

- apolloclient update

```
npm install @apollo/client graphql @apollo/react-hooks
use instead of:
import { useQuery, useMutation, gql } from "@apollo/client";
```

## tag redux install

```
yarn add redux react-redux redux-promise redux-thunk
```
