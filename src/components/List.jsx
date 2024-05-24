import styled from "styled-components";

const List = () => {
  return (
    <StyledList>
      <StyledListInner>List</StyledListInner>
    </StyledList>
  );
};
const StyledList = styled.section`
  background-color: #d3d3d3;
  border-radius: 16px;
  padding: 20px;
`;
const StyledListInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default List;
