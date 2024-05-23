import styled from "styled-components";

const InputList = () => {
  return (
    <StyledInputList>
      <label>InputList</label>
      <input type="text" />
    </StyledInputList>
  );
};

const StyledInputList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;
export default InputList;
