import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.desktop}) {
   flex-direction: row;
  }
`