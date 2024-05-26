import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputContents from "../components/form/InputContents";
import styled from "styled-components";
import Layout from "../components/Layout";
import FormButton from "../components/form/FormButton";

const Detail = ({ setBooks }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state;

  // console.log(location);
  const [date, setDate] = useState(book.date);
  const [description, setDescription] = useState(book.description);
  const [amount, setAmount] = useState(book.amount);
  const [item, setItem] = useState(book.item);

  // console.log(amount);

  const onClickInputChange = () => {
    const newBook = {
      id: book.id,
      date,
      description,
      amount,
      item,
    };

    setBooks((prev) =>
      prev.map((prevBook) => (prevBook.id === book.id ? newBook : prevBook))
    );
  };

  const onClickDelete = () => {
    alert("삭제하시겠습니까?");
    setBooks((prev) => prev.filter((prevBook) => prevBook.id !== book.id));
    navigate("/");
  };

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <StyledDetail>
        <InputContents
          label="날짜"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <InputContents
          label="항목"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputContents
          label="금액"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputContents
          label="내용"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <StyledFormButton>
          <FormButton
            buttonText="수정"
            color="rgb(0, 123, 255)"
            onClick={onClickInputChange}
          />
          <FormButton
            buttonText="삭제"
            color="rgb(255, 77, 77)"
            onClick={onClickDelete}
          />
          <FormButton
            buttonText="뒤로 가기"
            color="rgb(108, 117, 125)"
            onClick={onClickBack}
          />
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
