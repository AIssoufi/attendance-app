import Styled from 'styled-components/native';

const Loader = Styled.ActivityIndicator`
  margin: 10px auto;
`
Loader.defaultProps = {
  size: "large",
  color: "rgb(131, 113, 187)"
}

export default Loader;