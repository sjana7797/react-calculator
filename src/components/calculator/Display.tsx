import styled from "styled-components";

type Props = { result: string; calc: string };

function Display({ result, calc }: Props) {
  return (
    <Container>
      {result && <span>({result})</span>} {calc ? calc : "0"}
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  text-align: right;
  background-color: var(--dark);
  color: var(--light);
  font-size: 24px;
  font-weight: 300;
  & > span {
    font-size: 14px;
    color: #888;
  }
`;

export default Display;
