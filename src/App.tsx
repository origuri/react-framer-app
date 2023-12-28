import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  width: 200px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const boxVars = {
  // 함수 형태로 변경하고 해당 값일 때 애니메이션을 변경할 수 있음.
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({ x: isBack ? 500 : -500, opacity: 0, scale: 0 }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const next = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 9 ? (prev = 1) : prev + 1));
  };
  const prev = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? (prev = 9) : prev - 1));
  };
  console.log(isBack);

  return (
    <Wrapper>
      {/* 커스텀 값을 보내줌 */}
      <AnimatePresence mode="wait" custom={isBack}>
        <Box
          // 커스텀 값을 보내줌
          custom={isBack}
          variants={boxVars}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible} // state의 값이 변하면서 새로운 컴포넌트가 생겼다고 생각함.
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={next}>next</button>
      <button onClick={prev}>prev</button>
    </Wrapper>
  );
}

export default App;
