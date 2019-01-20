// Dependencies
import React from 'react';
import Styled from 'styled-components/native';

// Component
import EventList from './EventList'

const CustumEventList = ({ events = [], onPressItem = f => f }) => (
  <Container>
    {
      events.map((event, index) => (
        <EventItem key={`${index}-${event}`}>
          <Title>{event.title}</Title>
          <EventList schedules={event.schedules} onPressItem={onPressItem} />
        </EventItem>
      ))
    }
  </Container>
);

CustumEventList.navigationOptions = {
  title: 'Vous avez 2 retards',
};

export default CustumEventList;

const Container = Styled.ScrollView`
`;

const EventItem = Styled.View`
`

const Title = Styled.Text`
  color: rgb(131, 113, 187);
  font-size: 18px;
  font-weight: bold;
  margin: 18px 0 10px 20px;
`;
