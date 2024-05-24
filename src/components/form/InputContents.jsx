import styled from "styled-components";

const InputContents = ({ label, type }) => {
  return (
    <StyledInputContents>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} />
    </StyledInputContents>
  );
};
const StyledInputContents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;
const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;
export default InputContents;
