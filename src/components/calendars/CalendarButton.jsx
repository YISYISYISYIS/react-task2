import styled from "styled-components";

const CalendarButton = ({ month }) => {
  return <StyledCalendarButton>{month}</StyledCalendarButton>;
};
const StyledCalendarButton = styled.button`
  text-align: center;
  font-family: Pretendard, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--white-alpha-100, #fff);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: var(--bg-form, #2ec4b6);
`;
export default CalendarButton;
