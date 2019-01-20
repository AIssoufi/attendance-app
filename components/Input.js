import Styled from 'styled-components/native';

const Input = Styled.TextInput`
  background-color: #f2f2f2;
  width: 100%;
  border-width: 0;
  margin: 10px 0 15px 0;
  padding: 15px;
  font-Size: 14px;
  border-Radius: 20px;
`;

const InputContainer = Styled.View`
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 20px;
`
Input.Row = InputContainer;

export default Input;