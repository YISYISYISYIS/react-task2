import styled from "styled-components";
import CalendarButton from "./calendars/CalendarButton";

const Calendars = () => {
  return (
    <StyledCalendars>
      <StyledCalendarsInner>
        <CalendarButton month="1월" />
        <CalendarButton month="2월" />
        <CalendarButton month="3월" />
        <CalendarButton month="4월" />
        <CalendarButton month="5월" />
        <CalendarButton month="6월" />
        <CalendarButton month="7월" />
        <CalendarButton month="8월" />
        <CalendarButton month="9월" />
        <CalendarButton month="10월" />
        <CalendarButton month="11월" />
        <CalendarButton month="12월" />
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
