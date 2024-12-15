import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  background-image: url('./images/bg-hero-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1em;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url('./images/bg-hero-desktop.svg');
    padding: 1.5em 5em 4em;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4em;
`;

export const Logo = styled.img`
  width: 20%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    margin-bottom: 0.5em;
    font-size: clamp(1.75rem, 1.063rem + 2.93vw, 3.7rem);
  }

  p {
    margin-bottom: 1em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex: 1;
    text-align: left;
    align-items: flex-start;
    align-self: flex-start;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 5em auto 0;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex: 1;
    max-width: 50%;
    margin: 0 auto;
  }
`;
