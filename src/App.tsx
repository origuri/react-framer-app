import { Variants, motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: #3498db;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; // bigBox 영역에서 넘치면 나간만큼 숨겨줌
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
  // hover하면 크기가 1.5배 커짐, 180도 회전
  hover: {
    scale: 1.5,
    rotateZ: 180,
  },
  // 해당 div를 계속 클릭을 유지할 때 크기는 원상 복귀, 원모양 변환
  tab: {
    scale: 1,
    borderRadius: "100px",
  },
  drag: {
    backgroundColor: "#9b59b6",
    transition: {
      duration: 0, // 애니메이션 효과를 주기 싫을 때
    },
  },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVars}
          whileHover={"hover"}
          whileTap={"tab"}
          whileDrag={"drag"}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
