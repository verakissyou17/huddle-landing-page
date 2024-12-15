import styled from 'styled-components';

export const StyledSocialIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 1.5em;

  li {
    list-style-type: none;
  }

  a {
    border: 1px solid ${({theme}) => theme.colors.body};
    border-radius: 50%;
    color: ${({theme}) => theme.colors.body};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    height: 2.5rem;
    width: 2.5rem;
    text-decoration: none;
  }

  a:hover {
    background-color: ${({theme}) => theme.projectColors.Pink};
    border-color: ${({theme}) => theme.projectColors.Pink};
  }

  @media (min-width: ${({theme}) => theme.desktop}) {
    align-self: flex-start;
  } 
  `