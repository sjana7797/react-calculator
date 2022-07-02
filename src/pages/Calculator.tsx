import Digits from "../components/calculator/Digits";
import Display from "../components/calculator/Display";
import Operators from "../components/calculator/Operators";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Calculator({}: Props) {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");
  const operators = ["/", "*", "+", "-", "."];
  const updateCalc = (value: string) => {
    if (
      (operators.includes(value) && value === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    if (value === "clear") {
      setCalc("");
      setResult("");
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <Container
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Display result={result} calc={calc} />
      <Operators
        Button={Button}
        updateCalc={updateCalc}
        deleteLast={deleteLast}
      />
      <Digits Button={Button} updateCalc={updateCalc} calculate={calculate} />
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 2px 64px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  appearance: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
  padding: 16px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

export default Calculator;
