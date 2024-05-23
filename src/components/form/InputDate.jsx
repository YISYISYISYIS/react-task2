import styled from "styled-components";

const InputDate = () => {
  return (
    <StyledInputDate>
      <label>InputDate</label>
      <input type="date" />
    </StyledInputDate>
  );
};
const StyledInputDate = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;
export default InputDate;
