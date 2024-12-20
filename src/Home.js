import './Home.css';
import React, { useRef, useEffect } from 'react';
import { addScrollEvents } from './Animation';

const Home = () => {
  // 각 섹션을 참조할 ref 생성
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // 페이지가 로드되면 스크롤 이벤트를 추가
    const cleanup = addScrollEvents(homeRef, aboutRef, skillsRef, contactRef);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 정리
    return cleanup;
  }, []);

  return (
    <div id="wrap">
      {/*-----네비게이션 바-----*/}
      <div className="Nav_container">
        <div className="Sub_Nav">
          <ul className="menu">
            <li className="Home">Home</li>
            <li className="About">About</li>
            <li className="Skills">Skills</li>
            <li className="Contact">Contact</li>
          </ul>
        </div>
      </div>
      {/* ------전체 구역 관리------ */}
      <div id="AllSection">
        {/* Home Section */}
        <div ref={homeRef} className="HomeSection">
          <p>Welcome :) <br /> 성장하는 개발자, 지윤의 포트폴리오</p>
        </div>
        {/* About Section */}
        <div ref={aboutRef} className="AboutSection">
          <p>About, me <br /> 저에 대한 것들을 기록하는 공간입니다.</p>
        </div>
        {/* Skills Section */}
        <div ref={skillsRef} className="SkillsSection">
          <p>My Skills <br /> 저는 이런 걸 다룰 수 있어요!</p>
        </div>
        {/* Contact Section */}
        <div ref={contactRef} className="ContactSection">
          <p>Contact <br /> 이메일, 주소</p>
        </div>
      </div>
      {/* ------전체 구역 끝------ */}
    </div>
  );
};

export default Home;