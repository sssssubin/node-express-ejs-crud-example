const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

// Express 애플리케이션 생성
const app = express();

// EJS 템플릿 엔진 설정
app.set("view engine", "ejs"); // 템플릿 엔진으로 EJS 사용
app.set("views", path.join(__dirname, "views")); // EJS 템플릿 파일이 위치한 디렉토리 설정

// 미들웨어 설정
app.use(expressLayouts); // EJS 레이아웃 사용
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 제공
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱, 중첩 객체 지원
// app.use(express.urlencoded({ extended: false })); // URL 인코딩된 데이터 파싱, 중첩 객체 지원하지 않음

app.set("layout", "layout"); // 기본 레이아웃 설정

// 초기 게시글 데이터
let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the second post.",
  },
];

// 모든 게시글 목록 렌더링
app.get("/", (req, res) => {
  res.render("index", { posts }); // "index.ejs" 템플릿에 게시글 목록 전달
});

// 특정 게시글 렌더링
app.get("/post/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id)); // 요청된 ID로 게시글 찾기
  res.render("post", { post }); // "post.ejs" 템플릿에 게시글 데이터 전달
});

// 새 게시글 작성 폼 렌더링
app.get("/new", (req, res) => {
  res.render("new"); // "new.ejs" 템플릿 렌더링
});

// 새 게시글 추가
app.post("/new", (req, res) => {
  const { title, content } = req.body; // 폼 데이터에서 제목과 내용 추출
  const newPost = { id: posts.length + 1, title, content }; // 새 게시글 객체 생성
  posts.push(newPost); // 게시글 목록에 추가
  res.redirect("/"); // 게시글 목록 페이지로 리다이렉트
});

// 특정 게시글 수정 폼 렌더링
app.get("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id)); // 요청된 ID로 게시글 찾기
  res.render("edit", { post }); // "edit.ejs" 템플릿에 게시글 데이터 전달
});

// 특정 게시글 수정
app.post("/edit/:id", (req, res) => {
  const { id, title, content } = req.body; // 폼 데이터에서 ID, 제목, 내용 추출
  const postIndex = posts.findIndex((p) => p.id === parseInt(id)); // 게시글 인덱스 찾기
  posts[postIndex] = { id: parseInt(id), title, content }; // 게시글 수정
  res.redirect("/"); // 게시글 목록 페이지로 리다이렉트
});

// 특정 게시글 삭제
app.post("/delete/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== parseInt(req.params.id)); // 요청된 ID의 게시글 삭제
  res.redirect("/"); // 게시글 목록 페이지로 리다이렉트
});

// 서버 시작
// app.listen(3000, () => {
//   console.log("서버연결 http://localhost:3000"); // 서버 시작 메시지
// });

module.exports = app;
