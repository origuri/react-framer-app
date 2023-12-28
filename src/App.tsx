import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  // flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  // position: absolute;
  top: 100px;
  width: 200px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  // 두 개의 그림자를 써서 페이지에 떠있는 듯한 느낌을 줌.
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #bdc3c7;
  height: 100px;
  width: 100px;
  // border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {};

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {clicked ? (
          <Circle
            layoutId="circle"
            style={{ borderRadius: "50px", scale: 0.5 }}
          />
        ) : null}
      </Box>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: "0px", scale: 1 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
