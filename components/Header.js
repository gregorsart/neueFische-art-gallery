import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Art Gallery</StyledH1>
      <StyledContainer>
        <StyledP>recap project 5 </StyledP>
        <StyledP>Neue Fische </StyledP>
      </StyledContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: var(--max-width);
  max-width: var(--max-width);
  padding: 1rem var(--main-spacing);
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 1.6rem;
  color: white;
  font-weight: 100;
  line-height: 1.2;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  color: white;
`;
