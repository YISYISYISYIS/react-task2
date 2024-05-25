import styled from "styled-components";
import CalendarButton from "./calendars/CalendarButton";
import { useState } from "react";

const Calendars = ({ books }) => {
  const [isColorActive, setIsColorActive] = useState(false);

  const onClickCalendarButton = (month) => {
    setIsColorActive(month);
  };
  return (
    <StyledCalendars>
      <StyledCalendarsInner>
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("1월")}
          isColorActive={isColorActive === "1월"}
          month="1월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("2월")}
          isColorActive={isColorActive === "2월"}
          month="2월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("3월")}
          isColorActive={isColorActive === "3월"}
          month="3월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("4월")}
          isColorActive={isColorActive === "4월"}
          month="4월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("5월")}
          isColorActive={isColorActive === "5월"}
          month="5월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("6월")}
          isColorActive={isColorActive === "6월"}
          month="6월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("7월")}
          isColorActive={isColorActive === "7월"}
          month="7월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("8월")}
          isColorActive={isColorActive === "8월"}
          month="8월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("9월")}
          isColorActive={isColorActive === "9월"}
          month="9월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("10월")}
          isColorActive={isColorActive === "10월"}
          month="10월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("11월")}
          isColorActive={isColorActive === "11월"}
          month="11월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("12월")}
          isColorActive={isColorActive === "12월"}
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
