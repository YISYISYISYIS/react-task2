import styled from "styled-components";

const InputPrice = () => {
  return (
    <StyledInputPrice>
      <label>InputPrice</label>
      <input type="number" />
    </StyledInputPrice>
  );
};
const StyledInputPrice = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;
export default InputPrice;
