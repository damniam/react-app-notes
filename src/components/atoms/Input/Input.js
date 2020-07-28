import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/magnifier.svg';

const Input = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.grey100};
  border-radius: 50px;
  padding: 10px 25px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  outline: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 10px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-position: 15px 50%;
      background-size: 13px;
      background-repeat: no-repeat;

      :focus {
        background-position: 10px 50%;
        background-size: 10px;
        padding: 10px 10px 10px 30px;
        transition: background 0.2s, padding 0.2s;
      }
    `}
`;

export default Input;
