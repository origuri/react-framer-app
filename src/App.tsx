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

const Grid = styled.div`
  display: grid;
  width: 70vh;
  grid-template-columns: repeat(3, 1fr);
  // 띄어쓰기 하면 안됨
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  gap: 10px;
`;

const Box = styled(motion.div)`
  // position: absolute;

  //width: 200px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  // 두 개의 그림자를 써서 페이지에 떠있는 듯한 느낌을 줌.
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVars = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  animate: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};

function App() {
  const [id, setId] = useState<string | null>(null);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          // layoutId는 string만 들어올 수 있음.
          <Box onClick={() => setId(n)} key={n} layoutId={n}>
            {n}
          </Box>
        ))}
      </Grid>
      {id ? ( // 전체에 조건문을 주면 버그 사라짐.
        <AnimatePresence>
          (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* id state로 layoutId를 일치시킬 수 있음.  
              똑같은 layoutId를 가진 컴포넌트가 이동했기 때문에 애니메이션이 작동 됨. 
            */}
            <Box style={{ width: 400, height: 200 }} layoutId={id}>
              {id}
            </Box>
          </Overlay>
          )
        </AnimatePresence>
      ) : null}
    </Wrapper>
  );
}

export default App;
