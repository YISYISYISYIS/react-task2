import styled from "styled-components";
import { Link } from "react-router-dom";

const List = ({ books, setBooks }) => {
  // console.log(books);
  return (
    <StyledList>
      <StyledListInner>
        {books.map((book) => (
          <StyledListItem key={book.id}>
            <Link state={{ book }} to={`/detail/${book.id}`}>
              {book.item}
            </Link>
          </StyledListItem>
        ))}
      </StyledListInner>
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
const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;
  cursor: pointer;
`;
export default List;
