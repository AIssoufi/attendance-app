// Dependencies
import Styled from 'styled-components/native';

// Constants
const SMALL = "small", MEDIUM = "medium", LARGE = "large", XSMALL = "xsmall";

// Component
const Button = Styled.TouchableOpacity`
  padding: ${props => getPadding(props.size)};
  align-items: center;
  margin: 0 auto;
  background-color: rgba(131, 113, 187, ${props => props.disabled ? 0.6 : 1});
  border-radius: 30px;
`;

Button.defaultProps = {
  size: MEDIUM
}

Button.XSMALL = XSMALL;
Button.SMALL = SMALL;
Button.MEDIUM = MEDIUM;
Button.LARGE = LARGE;

export default Button;

// Utils
const getPadding = size => {
  switch (size) {
    case SMALL:
      return '5px 10px';
    case MEDIUM:
      return '10px 25px';
    case LARGE:
      return '20px 50px';
    case XSMALL:
      return '3px 5px';
    default:
      return '10px 5px'
  }
}

