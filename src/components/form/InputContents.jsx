import styled from "styled-components";

const InputContents = ({ label, type }) => {
  return (
    <StyledInputContents>
      <label>{label}</label>
      <input type={type} />
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
