import styled, { StyledComponent } from "styled-components";

type Props = {
  Button: StyledComponent<"button", any, {}, never>;
  updateCalc: (value: string) => void;
  calculate: () => void;
};

function Digits({ Button, updateCalc, calculate }: Props) {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </Button>
      );
    }
    return digits;
  };
  return (
    <Container>
      {createDigits()}
      <Button onClick={() => updateCalc("0")}>0</Button>
      <Button onClick={() => updateCalc(".")}>.</Button>
      <Button onClick={calculate}>=</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > button {
    flex: 1 1 33.33333%;
    max-width: 33.33333%;
    background-color: var(--dark);
    &:last-child {
      background-color: var(--primary);
    }
  }
`;

export default Digits;
