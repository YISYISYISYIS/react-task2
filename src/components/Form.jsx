import styled from "styled-components";
import InputContents from "./form/InputContents";
import FormButton from "./form/FormButton";

const Form = () => {
  return (
    <StyledForm>
      <StyledFormInner>
        <InputContents label="날짜" type="date" />
        <InputContents label="항목" type="text" />
        <InputContents label="금액" type="number" />
        <InputContents label="내용" type="text" />
        <FormButton />
      </StyledFormInner>
    </StyledForm>
  );
};

const StyledForm = styled.section`
  background-color: rgb(223, 222, 222);
  border-radius: 16px;
  padding: 20px;
`;
const StyledFormInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
  background-color: #a3a3a3;
`;

export default Form;
