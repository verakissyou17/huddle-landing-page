import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 23.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 100%;
  }
` 