import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
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
  const x = useMotionValue(0);
  // useTransForm은 3개의 인자를 필요로 함.
  // 변할 함수, 변할 값, 그 값에 도달했을 때 얻은 값
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const bgColor = useTransform(x, [-800, 800], ["#f1c40f", "#d35400"]);

  useMotionValueEvent(bgColor, "change", (e) => console.log(e));
  useMotionValueEvent(x, "change", (e) => console.log(e));
  useMotionValueEvent(rotate, "change", (e) => console.log(e));
  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      {/* x값을 대입 시킬 수 있음. */}
      <Box style={{ x: x, rotateZ: rotate }} drag={"x"} dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
