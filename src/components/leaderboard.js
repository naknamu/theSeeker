import { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper, Container } from "./gameover";
import Table from "./table";

const Leaderboard = (props) => {
  const [rankUser, setRankUser] = useState([]);

  const handleButtonClick = () => {
    props.setLeaderboard(false);
    props.setCount(props.TARGET_COUNT);
    props.setActiveTime(true);
    props.setSeconds(0);
    props.setMinutes(0);
    props.setHours(0);
    props.setIsGameOver(false);

    let resetStatus = {};
    resetStatus.first = false;
    resetStatus.second = false;
    resetStatus.third = false;

    props.setStatus(resetStatus);
  };

  const sortUserData = () => {
    let unsortedData = [...props.userDatabase];

    let sortedData = unsortedData.sort(function (a, b) {
      return a.time.localeCompare(b.time);
    });

    return sortedData;
  };

  const createRankTable = (sortedData) => {
    let rankData = sortedData;
    let emptyUser = {};

    //display empty row when data is less than 10
    for (let i = 0; i < 10; i++) {
      if (rankData.length < 10) {
        emptyUser.name = "";
        emptyUser.time = "";

        rankData.push(emptyUser);
      }
    }

    setRankUser(rankData);

    return rankData;
  };

  useEffect(() => {
    let sortedData = sortUserData();

    createRankTable(sortedData);
  }, []);

  return (
    <Wrapper>
      <Container>
        <h1>Global Leaderboard 🏆</h1>
        <Table rankUser={rankUser} />
        <Button onClick={() => handleButtonClick()}>Restart</Button>
      </Container>
    </Wrapper>
  );
};

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 22px;
  font-weight: 700;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.light};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media all and (max-width: 480px) { 
    font-size: 16px;
  }
`;

export default Leaderboard;
