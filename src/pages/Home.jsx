import React, { useState } from "react";
import Calendars from "../components/Calendars";
import List from "../components/List";
import Form from "../components/Form";
import styled from "styled-components";
import SpendingChart from "../components/SpendingChart";

const Home = ({ books, setBooks }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <StyledHome>
      <Form setBooks={setBooks} selectedMonth={selectedMonth} />
      <Calendars
        books={books}
        setFilteredBooks={setFilteredBooks}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />
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
