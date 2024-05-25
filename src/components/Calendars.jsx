import styled from "styled-components";
import CalendarButton from "./calendars/CalendarButton";
import { useState } from "react";

const Calendars = ({ books, setFilteredBooks }) => {
  const [isColorActive, setIsColorActive] = useState(false);

  const onClickCalendarButton = (month) => {
    setIsColorActive(month);

    const filteredBooks = books.filter((book) =>
      book.date.split("-")[1].includes(month)
    );

    setFilteredBooks(filteredBooks);
    // console.log(filteredBooks);
  };
  return (
    <StyledCalendars>
      <StyledCalendarsInner>
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("01")}
          isColorActive={isColorActive === "01"}
          month="1월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("02")}
          isColorActive={isColorActive === "02"}
          month="2월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("03")}
          isColorActive={isColorActive === "03"}
          month="3월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("04")}
          isColorActive={isColorActive === "04"}
          month="4월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("05")}
          isColorActive={isColorActive === "05"}
          month="5월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("06")}
          isColorActive={isColorActive === "06"}
          month="6월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("07")}
          isColorActive={isColorActive === "07"}
          month="7월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("08")}
          isColorActive={isColorActive === "08"}
          month="8월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("09")}
          isColorActive={isColorActive === "09"}
          month="9월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("10")}
          isColorActive={isColorActive === "10"}
          month="10월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("11")}
          isColorActive={isColorActive === "11"}
          month="11월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("12")}
          isColorActive={isColorActive === "12"}
          month="12월"
        />
      </StyledCalendarsInner>
    </StyledCalendars>
  );
};

const StyledCalendars = styled.section`
  background-color: #a5a5a5;
  border-radius: 16px;
  padding: 20px;
`;
const StyledCalendarsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
export default Calendars;
