import { useLocation } from "react-router-dom";
import InputContents from "../components/form/InputContents";
import styled from "styled-components";
import Layout from "../components/Layout";
import FormButton from "../components/form/FormButton";

const Detail = () => {
  const location = useLocation();
  const { book } = location.state;

  console.log(book);
  return (
    <Layout>
      <StyledDetail>
        <InputContents label="날짜" type="text" />
        <InputContents label="항목" type="text" />
        <InputContents label="금액" type="text" />
        <InputContents label="내용" type="text" />
        <StyledFormButton>
          <FormButton buttonText="수정" color="rgb(0, 123, 255)" />
          <FormButton buttonText="삭제" color="rgb(255, 77, 77)" />
          <FormButton buttonText="뒤로 가기" color="rgb(108, 117, 125)" />
        </StyledFormButton>
      </StyledDetail>
    </Layout>
  );
};

const StyledDetail = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;
const StyledFormButton = styled.div`
  display: flex;
  gap: 10px;
`;
export default Detail;
