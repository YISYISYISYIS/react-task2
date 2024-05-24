import { useState } from "react";
import styled from "styled-components";
import InputContents from "./form/InputContents";
import FormButton from "./form/FormButton";

const Form = ({ setBooks }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [item, setItem] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!date.trim() || !description.trim() || !amount.trim() || !item.trim()) {
      return alert("항목을 모두 입력해주세요.");
    }
    const newBooks = {
      id: crypto.randomUUID(),
      date,
      description,
      amount,
      item,
    };
    console.log("Date:", date);
    console.log("Item:", item);
    console.log("Amount:", amount);
    console.log("Description:", description);
    setBooks((prev) => [...prev, newBooks]);

    setDate("");
    setDescription("");
    setAmount("");
    setItem("");
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledFormInner>
        <InputContents
          label="날짜"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <InputContents
          label="항목"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormButton buttonText="저장" color="rgb(0, 123, 255)" />
      </StyledFormInner>
    </StyledForm>
  );
};

const StyledForm = styled.form`
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
