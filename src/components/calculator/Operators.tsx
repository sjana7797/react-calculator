import styled, { StyledComponent } from "styled-components";

type Props = {
  Button: StyledComponent<"button", any, {}, never>;
  updateCalc: (value: string) => void;
  deleteLast: () => void;
};

function Operators({ Button, updateCalc, deleteLast }: Props) {
  return (
    <Container>
      <Button onClick={() => updateCalc("clear")}>C</Button>
      <Button onClick={() => updateCalc("/")}>/</Button>
      <Button onClick={() => updateCalc("*")}>*</Button>
      <Button onClick={() => updateCalc("+")}>+</Button>
      <Button onClick={() => updateCalc("-")}>-</Button>
      <Button onClick={deleteLast}>DEL</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  & > button {
    flex: 1 1 0%;
    background-color: var(--primary);
    font-weight: 700;
    &:first-child {
      color: var(--dark);
    }
  }
`;

export default Operators;
