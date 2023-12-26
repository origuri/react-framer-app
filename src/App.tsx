import { Variants, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      // duration이 0.5이므로 부모가 나타나는게 완료 되고 0.3초 이따 시작
      delayChildren: 0.3,
      staggerChildren: 0.2, // 자식 컴포넌트들의 css가 0.5초 간격으로 실행
    },
  },
};

const circleVars: Variants = {
  // y는 +면 아래 -면 위부터 시작
  start: { opacity: 0, y: 30 },
  end: {
    opacity: 1,
    y: 0,
  },
};
function App() {
  return (
    <Wrapper>
      <Box variants={boxVars} initial="start" animate="end">
        {/* 프로퍼티가 부모와 같아서 생략해도 자동으로 적용된다. */}
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
      </Box>
    </Wrapper>
  );
}

export default App;
