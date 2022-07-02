import { motion } from "framer-motion";
import moment from "moment";
import { useState } from "react";
import styled from "styled-components";
import DateStats from "../components/age-calculator/DateStats";

type Props = {};

function AgeCalculator({}: Props) {
  const todayDate = moment();
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");
  const [showStats, setshowStats] = useState(false);
  const calculateBirthDate = () => {
    const birthDatetime = moment(birthDate);
    const resultDate = moment.duration(todayDate.diff(birthDatetime));
    const formatedDate = `${resultDate.years()} years ${resultDate.months()} months ${resultDate.days()} days`;
    setshowStats(true);
    setAge(formatedDate);
  };
  return (
    <Container
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Title>Age Teller</Title>
      <TodayDate>
        Today's date is{" "}
        <span>
          <em>{todayDate.format("Do MMMM YYYY").toString()}</em>
        </span>
      </TodayDate>
      <InputLabel>Input your birth date!</InputLabel>
      <InputContainer
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <DateInput
          type="date"
          onChange={(event) => {
            setBirthDate(event.target.value);
            setshowStats(false);
          }}
        />
        <Submit onClick={calculateBirthDate}>submit</Submit>
      </InputContainer>
      {showStats && <DateStats age={age} />}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 5rem;
  @media (max-width: 640px) {
    font-size: 3rem;
  }
`;
const TodayDate = styled.h2`
  text-align: center;
  font-size: 3rem;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
  & > span em {
    font-size: 3rem;
    color: var(--primary);
    @media (max-width: 640px) {
      font-size: 1.5rem;
    }
  }
`;

const InputLabel = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  text-transform: capitalize;
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const DateInput = styled.input`
  background-color: transparent;
  border: 2px solid var(--dark);
  padding: 5px 10px;
  border-radius: 10px;
  outline: none;
  &:focus-visible {
    outline: 4px solid #e4628c;
  }
`;

const Submit = styled.button`
  border: 2px solid var(--dark);
  padding: 5px 10px;
  font-size: 1.2rem;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: var(--primary);
    color: #fff;
    border: 2px solid var(--primary);
  }
`;
export default AgeCalculator;
