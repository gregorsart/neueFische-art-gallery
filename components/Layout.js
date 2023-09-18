import Navigation from "./Navigation";
import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <Header />
      <main>{children}</main>
      <Navigation />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
