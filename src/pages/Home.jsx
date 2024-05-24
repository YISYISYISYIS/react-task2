import React from "react";
import Calendars from "../components/Calendars";
import List from "../components/List";
import Form from "../components/Form";
import styled from "styled-components";
import SpendingChart from "../components/SpendingChart";

const Home = ({ books, setBooks }) => {
  return (
    <StyledHome>
      <Form books={books} setBooks={setBooks} />
      <Calendars />
      <SpendingChart />
      <List books={books} />
    </StyledHome>
  );
};

const StyledHome = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;
export default Home;
