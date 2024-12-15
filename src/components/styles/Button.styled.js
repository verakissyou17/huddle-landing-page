import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 3.125rem;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: ${({ padding }) => padding};
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 1em 3em;
  }
`;
