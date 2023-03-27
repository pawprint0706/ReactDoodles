import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
// BrowserRouter: HTML5 history API를 사용하는 라우터. 서버에서는 설정이 필요하다.
// 동적 페이지에 적합, 검색엔진이 읽을 수 있다.
// import { HashRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
// HashRouter: URL에 #(hash)를 사용하는 라우터. 서버 설정이 필요없다.
// 정적 페이지에 적합, 검색엔진이 읽을 수 없다.
// 서버에 대한 설정 권한이 없는 경우에만 사용하도록 한다.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

let contents = [
  { id: 1, title: 'HTML', description: 'HTML is...' },
  { id: 2, title: 'JS', description: 'JS is...' },
  { id: 3, title: 'React', description: 'React is...' },
];

function Topic() {
  let params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = { title: 'Not found', description: 'Not found' };
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics() {
  let topicsList = [];
  for ( let i = 0; i < contents.length; i++ ) {
    topicsList.push(<li key={contents[i].id}><NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink></li>)
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/*
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
        */}
        {topicsList}
      </ul>
      <Routes>
        {/*
        <Route path="/1" element={<div><h3>HTML</h3>HTML is...</div>}></Route>
        <Route path="/2" element={<div><h3>JS</h3>JS is...</div>}></Route>
        <Route path="/3" element={<div><h3>React</h3>React is...</div>}></Route>
        <Route path="/*" element={<div><h3>Not found</h3>Not found</div>}></Route>
        */}
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
  // 중첩된 하위 Route에서는 path에 부모의 path를 제외해야 한다.(여기서는 '/*' 이전의 '/topics')
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<h2>Not found</h2>}></Route>
      </Routes>
    </div>
  );
  // Routes를 사용하면 Switch가 없어도 exact 등 예외처리가 없어도 되는거 같다.
  // Routes를 이용해서 그런지 NavLink에도 exact가 필요 없어졌다.
  // <a> -> 새로고침됨. <Link> -> 새로고침 안됨.(SPA에 적합)
  // <NavLink> -> 현재 페이지에 링크가 활성화(class="active")되어 있을 때 특정 스타일을 적용할 수 있다.
  // Routes를 중첩하여 사용하기 위해서는 하위 경로를 '*'로 명시하면 된다.
  // 혹은 Outlet을 조사해보자.
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
