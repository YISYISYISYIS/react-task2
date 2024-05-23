import styled from "styled-components";

const InputContents = () => {
  return (
    <StyledInputContents>
      <label>InputContents</label>
      <input type="text" />
    </StyledInputContents>
  );
};
const StyledInputContents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;
export default InputContents;
