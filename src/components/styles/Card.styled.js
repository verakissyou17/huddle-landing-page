import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 2.5em 0;
  text-align: center;
  padding: 2.5em;
  gap: 1rem;


  & > div {
    flex: 1;
  }

  p {
    color: ${({ theme }) => theme.projectColors.GrayishBlue};
  }

  img {
    width: 100%;
    margin-bottom: 1.5em;
  }

  h2 {
    margin-bottom: 0.5em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: ${({ layout }) => layout || 'row'};
    padding: 60px;
    text-align: left;
  }

  img {
    width: 80%;
    margin: 0 auto;
  }
`;
