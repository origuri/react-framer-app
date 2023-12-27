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
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: { x: -500, opacity: 0, scale: 0 },
};

function App() {
  const [visible, setVisible] = useState(1);
  const next = () => {
    setVisible((prev) => (prev === 9 ? (prev = 1) : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
          i === visible ? (
            <Box
              variants={boxVars}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={next}>next</button>
    </Wrapper>
  );
}

export default App;
