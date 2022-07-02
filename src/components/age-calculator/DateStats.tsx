import partyPopper from "../../assets/party-popper.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = { age: string };

function DateStats({ age }: Props) {
  return (
    <Container
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <CongratsText>Congrats on {age}</CongratsText>
      <PartyPopper
        src={partyPopper}
        alt="Party Popper"
        width={200}
        height={200}
      />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin-top: 10px;
  }
`;

const CongratsText = styled.h4`
  font-style: italic;
  font-size: 1rem;
`;

const PartyPopper = styled.img`
  border-radius: 5px;
`;

export default DateStats;
