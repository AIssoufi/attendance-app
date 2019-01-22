// Dependencies
import React, { Component } from 'react';
import Styled from 'styled-components/native';
import { connect } from 'react-redux';

// Actions
import { login } from '../redux/actions/auth.action';

// Components
import { Input, Text, Label, Button } from '../components';

class LogInScreen extends Component {
  static navigationOptions = {
    title: 'Connexion',
  }

  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
      fieldsAreValid: false
    }
  }

  handleInputChange = (key, value) => {
    if (typeof (key) !== 'string') throw new TypeError('Key must be a string');
    if (typeof (value) !== 'string') throw new TypeError('value must be a string');

    this.setState({
      [key]: value.trim(),
    }, () => this.setState({
      fieldsAreValid: this.fieldsAreValid()
    }))
  }

  fieldsAreValid = () => {
    const { username, password } = this.state;

    if (typeof (username) !== 'string') return false;
    if (typeof (password) !== 'string') return false;

    return (username.length !== 0) && (password.length !== 0);
  }

  handleLogin = () => {
    const { username, password } = this.state;

    this.props.login({ username, password }).then(user => {
      this.props.navigation.navigate('Main')
    }).catch(error => {
      // Do nothing
    })
  }

  render() {
    return (
      <LogInContainer>
        <HeaderContainer>
        </HeaderContainer>
        <MainContainer>
          <Input.Row>
            <Label>Identifiant</Label>
            <Input
              placeholder="nom.prenom@etu.unice.fr"
              onChangeText={newText => this.handleInputChange('username', newText)}
              value={this.state.username}
            />
          </Input.Row>
          <Input.Row>
            <Label>Mot de passe</Label>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={newText => this.handleInputChange('password', newText)}
              value={this.state.password}
            />
          </Input.Row>
          <Button
            onPress={this.handleLogin}
            disabled={!this.state.fieldsAreValid}
            size={Button.LARGE}>
            <Text color="white" >Se connecter</Text>
          </Button>
        </MainContainer>
        <FooterContainer>
          <Text>Vous êtes nouveau sur Attendance App ? </Text>
          <Text
            color="blue"
            onPress={() => this.props.navigation.navigate('SignIn')}
          >Créer un compte.</Text>
        </FooterContainer>
      </LogInContainer>
    )
  }
}

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(LogInScreen);

const LogInContainer = Styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: space-between;
`

const HeaderContainer = Styled.View`
  flex-direction: row;
`;

const MainContainer = Styled.View`
  flex-direction: column;
  align-items: stretch;
  padding: 0 30px;
  justify-content: center;
`;

const FooterContainer = Styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 40px;
`;

