import styled from "styled-components";

const Layout = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
const StyledMain = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #b40808;
`;

export default Layout;
