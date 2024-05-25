import React, { useState } from "react";
import Calendars from "../components/Calendars";
import List from "../components/List";
import Form from "../components/Form";
import styled from "styled-components";
import SpendingChart from "../components/SpendingChart";

const Home = ({ books, setBooks }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  return (
    <StyledHome>
      <Form books={books} setBooks={setBooks} />
      <Calendars books={books} setFilteredBooks={setFilteredBooks} />
      <SpendingChart books={books} />
      <List filteredBooks={filteredBooks} />
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
