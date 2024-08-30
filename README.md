# node-express-ejs-crud-example

이 프로젝트는 Node.js 환경에서 Express와 EJS(Embedded JavaScript)를 사용하여 웹 애플리케이션을 개발하기 위한 템플릿입니다. EJS 템플릿 엔진을 사용하여 서버 사이드 렌더링을 지원하며, 게시글의 생성, 수정, 삭제 및 조회 기능을 구현하여 기본적인 CRUD 작업을 실습할 수 있습니다. Node.js, Express, EJS의 핵심 개념을 학습하고 실습할 수 있는 예제입니다.

## 프로젝트 구조

```plaintext
node-express-ejs-crud-example/
│
├── node_modules/         # 프로젝트의 의존성이 저장된 디렉토리
├── public/               # 정적 파일 (CSS, JavaScript 등) 저장 디렉토리
├── views/                # EJS 템플릿 파일이 저장된 디렉토리
│   ├── index.ejs         # 게시글 목록을 표시하는 템플릿
│   ├── post.ejs          # 특정 게시글을 표시하는 템플릿
│   ├── new.ejs           # 새 게시글 작성 폼 템플릿
│   ├── edit.ejs          # 게시글 수정 폼 템플릿
│   └── layout.ejs        # 공통 레이아웃 템플릿
├── server.js             # Express 서버를 설정하고 실행하는 파일
├── package-lock.json     # 정확한 의존성 버전을 기록한 파일
├── package.json          # 프로젝트 메타데이터 및 의존성 관리 파일
└── README.md             # 프로젝트 설명서
```

## 기술 스택

- **Node.js**: 서버 사이드 JavaScript 런타임 환경으로, 비동기적이고 이벤트 기반의 애플리케이션을 개발할 수 있습니다.
- **npm**: Node.js 패키지 관리 도구로, 필요한 라이브러리와 도구를 설치하고 관리합니다.
- **Express**: Node.js 웹 애플리케이션 프레임워크로, 빠르고 간편하게 웹 서버를 구축할 수 있습니다.
- **EJS**: 서버 사이드 템플릿 엔진으로, HTML 템플릿에 JavaScript 코드를 삽입하여 동적인 HTML을 생성합니다.
- **express-ejs-layouts**: EJS 레이아웃을 지원하여 공통 레이아웃과 템플릿을 쉽게 관리할 수 있습니다.
- **body-parser**: HTTP 요청 본문을 파싱하여 req.body로 접근할 수 있게 해주는 미들웨어입니다.
- **Nodemon**: 코드 변경 시 자동으로 서버를 재시작해주는 도구로, 개발 시 유용합니다.

## 사용 방법

1. 프로젝트를 클론합니다:

   ```bash
   git clone <repository-url>

   ```

2. 프로젝트 디렉토리로 이동합니다:

   ```bash
   cd node-express-ejs-crud-example

   ```

3. 필요한 의존성을 설치합니다:

   ```bash
   npm install

   ```

4. 개발 서버를 실행합니다:

   ```bash
   npm run dev

   ```

   - 이 명령어는 nodemon을 사용하여 개발 서버를 실행하며, 코드 변경 시 자동으로 서버를 재시작합니다.

5. 브라우저에서 `http://localhost:3000`로 접근하여 프로젝트를 확인할 수 있습니다.

## 파일 설명

- `server.js`: Express 서버를 설정하고 라우팅을 정의하는 파일입니다. 서버는 EJS 템플릿을 사용하여 HTML을 렌더링합니다.
- `views/`: EJS 템플릿 파일이 저장된 디렉토리입니다. 각 페이지의 HTML 구조를 정의합니다.
- `public/`: CSS, JavaScript, 이미지 파일 등과 같은 정적 파일이 저장된 디렉토리입니다.

## 주요 라우팅 및 기능

- `GET /`: 모든 게시글 목록을 렌더링합니다.
- `GET /post/:id`: 특정 게시글을 렌더링합니다.
- `GET /new`: 새로운 게시글 작성 폼을 렌더링합니다.
- `POST /new`: 새로운 게시글을 생성하고 기본 페이지로 리다이렉트합니다.
- `GET /edit/:id`: 특정 게시글을 수정할 수 있는 폼을 렌더링합니다.
- `POST /edit/:id`: 게시글을 수정하고 기본 페이지로 리다이렉트합니다.
- `POST /delete/:id`: 특정 게시글을 삭제하고 기본 페이지로 리다이렉트합니다.

## 참고 자료

- [Express 공식 문서](https://expressjs.com/)
- [EJS 공식 문서](https://www.npmjs.com/package/ejs)
- [express-ejs-layouts 공식 문서](https://www.npmjs.com/package/express-ejs-layouts)
- [body-parser 공식 문서](https://www.npmjs.com/package/body-parser)
- [nodemon 공식 문서](https://www.npmjs.com/package/nodemon)

## License

[MIT License](LICENSE).
