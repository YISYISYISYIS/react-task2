import styled from "styled-components";

const FormButton = () => {
  return (
    <StyledFormButton>
      <div>저장</div>
    </StyledFormButton>
  );
};

const StyledFormButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;
export default FormButton;
