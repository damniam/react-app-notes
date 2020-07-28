import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.small};
  font-weight: ${({ theme }) => theme.light};
`;

export default Paragraph;
