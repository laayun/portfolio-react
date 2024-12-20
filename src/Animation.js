export const addScrollEvents = (homeRef, aboutRef, skillsRef, contactRef) => {
  // 각 버튼에 클릭 이벤트 추가
  const homeButton = document.querySelector(".Home");
  const aboutButton = document.querySelector(".About");
  const skillsButton = document.querySelector(".Skills");
  const contactButton = document.querySelector(".Contact");

  homeButton.addEventListener("click", () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  });

  aboutButton.addEventListener("click", () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  });

  skillsButton.addEventListener("click", () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  });

  contactButton.addEventListener("click", () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  });

  // 이벤트 리스너 제거 함수 리턴
  return () => {
    homeButton.removeEventListener("click", () => homeRef.current.scrollIntoView({ behavior: "smooth" }));
    aboutButton.removeEventListener("click", () => aboutRef.current.scrollIntoView({ behavior: "smooth" }));
    skillsButton.removeEventListener("click", () => skillsRef.current.scrollIntoView({ behavior: "smooth" }));
    contactButton.removeEventListener("click", () => contactRef.current.scrollIntoView({ behavior: "smooth" }));
  };
};