// Dependencies
import React from 'react';
import Styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';

// Actions
import { getCalendar } from '../redux/actions/calendar.action';

// Component
import { EventList, Loader } from '../components';

// Utils
import { converEventToLessons } from '../utils/converters/calendar';

class CheckInScreen extends React.Component {
  static navigationOptions = {
    title: 'Accueil',
  };

  componentDidMount() {
    this.props.getCalendar();
  }

  getStatus = (dstart, dend) => {
    const _dstart = new Date(dstart);
    const _now = new Date()

    const start = _dstart.getTime();
    const end = new Date(dend).getTime();
    const now = _now.getTime();

    if (now >= start && now <= end) {
      return "Actuellement";
    } else if (now < start && (_dstart.getHours() - _now.getHours() <= 2)) {
      return "Prochainnement"; // Dans moins de heure heure
    } else {
      return null;
    }
  }

  render() {
    return (
      <ScrollView>
        <CeckInContainer>
          <Title>Mes prochains cours</Title>{
            this.props.todayIsFetching ?
              <Loader /> :
              <EDTContainer ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight) => {
                  this.scrollView.scrollToEnd({ animated: true });
                }}>
                <EventList schedules={converEventToLessons({ data: this.props.today, statusFunc: this.getStatus })} onPressItem={(e) => console.log(e)} />
              </EDTContainer>
          }
          <Title>Pointage de présence</Title>
          <MainContainer>
            <Alert>Vous pouvez pointer votre présence 15 minutes avant le début du cours</Alert>
            <Alert color='orange'>Vous êtes considéré comme en retard, 15 minutes après le début du cours</Alert>
            <CheckInButton>
              <TextBtn>Appuyez pour valider votre présence</TextBtn>
            </CheckInButton>
            <Text>Rapprochez votre téléphone du boitier et appuyez sur le button pour valider votre présence</Text>
          </MainContainer>
        </CeckInContainer>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  getCalendar
};

function mapStateToProps(state) {
  return {
    today: state.calendar.today,
    todayIsFetching: state.calendar.isFetching,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckInScreen)

const CeckInContainer = Styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  background-color: #fff;
`;

const Title = Styled.Text`
  color: rgb(131, 113, 187);
  font-size: 18px;
  font-weight: bold;
  margin: 18px 0 10px 20px;
`;

const MainContainer = Styled.View`
  align-items: stretch;
`;

const CheckInButton = Styled.TouchableOpacity`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: rgba(131, 113, 187, 0.7);
  border-radius: ${props => props.size / 2}px;
  border-width: 5px;
  border-color: rgb(131, 113, 187);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px auto;
`;

CheckInButton.defaultProps = {
  size: 220
}

const TextBtn = Styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const Alert = ({ color = 'green', children }) => (
  <AlertContainer>
    <Icon.Ionicons
      name='ios-information-circle'
      size={20}
      color={color}
    />
    <AlertText color={color}>{children}</AlertText>
  </AlertContainer>
);

const AlertText = Styled.Text`
  font-size: 12px;
  color: ${props => props.color};
  margin-left: 10px;
  flex-wrap: wrap;
`;

const AlertContainer = Styled.View`
  margin: 0 20px 7px 20px;
  flex-direction: row;
  flex-wrap: nowrap;
`

const Text = Styled.Text`
  color: rgb(131, 113, 187);
  margin: 10px 20px;
  text-align: center;
  font-size:14px;
  font-weight: bold;
`;

const EDTContainer = Styled.ScrollView`
max-height: 150px;
`