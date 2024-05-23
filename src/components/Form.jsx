import styled from "styled-components";
import InputDate from "./form/InputDate";
import InputContents from "./form/InputContents";
import InputPrice from "./form/InputPrice";
import InputList from "./form/InputList";
import FormButton from "./form/FormButton";

const Form = () => {
  return (
    <StyledForm>
      <StyledFormInner>
        <InputDate />
        <InputList />
        <InputPrice />
        <InputContents />
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
