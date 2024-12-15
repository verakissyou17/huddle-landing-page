import styled from 'styled-components';

export const StyleFooter = styled.footer`
  background-color: ${({ theme }) => theme.projectColors.VeryDarkCyan};
  color: ${({ theme }) => theme.colors.body};
  position: relative;
  padding: 10em 1em 3em;
  font-family: ${({ theme }) => theme.fonts.main};

  img {
    margin-bottom: 1.5em;
    max-width: 50%;
  }

  ul {
    list-style: none;
    align-self: flex-start;
  }

  ul li {
    display: flex;
    padding: 1em 0;
    gap: 1.5rem;
    align-items: flex-start;
  }

  ul li p {
    text-align: left;
  }

  ul li img {
    height: 1.25rem;
    width: 1.25rem;
    fill: currentColor;
    margin-bottom: 0;
  }

  ul li a {
    color: inherit;
    text-decoration: none;
  }

  &:last-child {
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 10em 5em 3em;

    ul {
      flex: 1;
      margin-block: 0;
    }

    ul + ul {
      margin-left: 4em;
    }

    ul:first-of-type {
      flex-basis: 15%;
    }

    ul:last-of-type {
      margin-left: 0;
    }

    &:last-child {
    text-align: right;
  }
  }
`;
