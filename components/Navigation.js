import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const navigationData = [
  { id: 11, href: "/", name: "Spotlight" },
  { id: 12, href: "/art-pieces", name: "Art Pieces" },
  { id: 13, href: "/favorites", name: "Favorites" },
];

export default function Navigation() {
  // get Pathname from URL
  const pathname = usePathname();
  return (
    <StyledNav>
      <StyledUl>
        {navigationData.map((navItem) => {
          const isActive = pathname === navItem.href;
          return (
            <StyledLi key={navItem.id} $primary={isActive ? true : false}>
              <StyledLink href={navItem.href} key={navItem.name}>
                {navItem.name}
              </StyledLink>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
}

// Styled Components

const StyledNav = styled.nav`
  height: 4rem;
  background-color: black;
  position: fixed;
  bottom: 0;
  width: var(--max-width);
  max-width: var(--max-width);
  font-size: 1.2em;
  text-align: center;
`;

const StyledUl = styled.ul`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

const StyledLi = styled.li`
  background-color: ${(props) =>
    props.$primary ? "var(--color-lightgray)" : "black"};
  color: ${(props) => (props.$primary ? "black" : "white")};
  height: 100%;
  width: 100%;
`;

const StyledLink = styled(Link)`
  margin-top: auto;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-weight: 200;
  display: inline-block;
  height: 100%;
  line-height: 4rem;
`;
