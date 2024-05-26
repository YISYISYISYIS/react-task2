import styled from "styled-components";
import { Link } from "react-router-dom";

const List = ({ filteredBooks }) => {
  // console.log(books);
  return (
    <StyledList>
      <StyledListInner>
        {filteredBooks.map((book) => (
          <StyledListItem key={book.id}>
            <Link state={{ book }} to={`/detail/${book.id}`}>
              {book.date}
              {book.item}
              {book.description}
              {book.amount}
            </Link>
          </StyledListItem>
        ))}
        {filteredBooks.length === 0 && (
          <StyledListItem>
            <p>항목이 없습니다</p>
          </StyledListItem>
        )}
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
const StyledListItempiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & > :first-child {
    margin-bottom: 5px;
    color: rgb(102, 102, 102);
    font-size: 14px;
  }
  & > :last-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export default List;
