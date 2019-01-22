// Dependencies
import React, { Component } from 'react';
import Styled from 'styled-components/native';
import { connect } from 'react-redux';

// Actions
import { signin } from '../redux/actions/auth.action';

// Components
import { Input, Text, Label, Button } from '../components';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Création de compte',
  }
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
      confirmPassword: undefined,
      fieldsAreValid: false
    }
  }

  handleSubmit = () => {
    const { username, password, confirmPassword } = this.state;

    if (!username) { return; }
    if (!password) { return; }
    if (!confirmPassword) { return; }

    if (password === confirmPassword) {

      this.props.signin({ username, password })
        .then(user => {
          this.props.navigation.navigate('Main');
        }).catch(message => {
          // do nothing
        });
    }
  }

  handleInputChange = (key, value) => {
    if (typeof (key) !== 'string') throw new TypeError('Key must be a string');
    if (typeof (value) !== 'string') throw new TypeError('value must be a string');

    this.setState({
      [key]: value.trim()
    }, () => this.setState({
      fieldsAreValid: this.fieldsAreValid()
    }))
  }

  fieldsAreValid = () => {
    const { username: usr, password: psw, confirmPassword: pswc } = this.state;

    if (typeof (usr) !== 'string') return false;
    if (typeof (psw) !== 'string') return false;
    if (typeof (pswc) !== 'string') return false;

    return (usr.length !== 0) && (psw.length !== 0) && psw === pswc;
  }

  render() {
    return (
      <SignInContainer>
        <Input.Row>
          <Label>Identifiant</Label>
          <Input
            placeholder="nom.prenom@etu.unice.fr"
            onChangeText={newText => this.handleInputChange('username', newText)}
          />
        </Input.Row>
        <Input.Row>
          <Label>Mot de passe</Label>
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={newText => this.handleInputChange('password', newText)}
          />
        </Input.Row>
        <Input.Row>
          <Label>Confirmez le mot de passe</Label>
          <Input
            secureTextEntry
            placeholder="Confirm password"
            onChangeText={newText => this.handleInputChange('confirmPassword', newText)}
          />
        </Input.Row>
        <ButtonContainer>
          <Button
            onPress={() => this.props.navigation.goBack()}>
            <Text color="white">Annuler</Text>
          </Button>
          <Button
            onPress={this.handleSubmit}
            disabled={!this.state.fieldsAreValid}>
            <Text color="white">Valider</Text>
          </Button>
        </ButtonContainer>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = {
  signin
};

export default connect(null, mapDispatchToProps)(SignInScreen);

const SignInContainer = Styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding: 20px 30px;
  justify-content: center;
`;

const ButtonContainer = Styled.View`
  flex-direction: row;
  justify-content: space-around;
`;