import Styled from 'styled-components/native';

const Text = Styled.Text`
  color: ${props => props.color};
  text-align: center;
  font-size: 14px;
`;

Text.defaultProps = {
  color: '#000'
}

export default Text;