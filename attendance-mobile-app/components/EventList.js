import React from 'react';
import { StyleSheet, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Styled, { css } from 'styled-components/native';

const EventList = ({ schedules = [], onPressItem = f => f }) => (
  <View>
    {schedules.map((schedule, index) => (
      <Option
        background={Touchable.Ripple('#ccc', false)}
        onPress={() => onPressItem(schedule)}
        first={index === 0}
        key={index}
      >
        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <TimesContainer>
            <Time start>{getTime(schedule.times.start)}</Time>
            <Time>{getTime(schedule.times.end)}</Time>
          </TimesContainer>
          <Infos>
            <TiteContainer>
              <Infos.Title>{schedule.title}</Infos.Title>
              <Infos.Status>{schedule.status}</Infos.Status>
            </TiteContainer>
            <Infos.Content>
              {schedule.details}
            </Infos.Content>
          </Infos>
        </View>
      </Option>
    ))}
  </View>
);

export default EventList;

// Conponents
const Option = Styled(Touchable)`
    background-color: #fdfdfd;
    padding: 0 15px;
    ${props => props.first && css`
      border-top-width: ${StyleSheet.hairlineWidth};
      border-top-color: #EDEDED;
    `}
    border-bottom-width: ${StyleSheet.hairlineWidth};
    border-bottom-color: #EDEDED;
`;
Option.defaultProps = {
  first: false
}

const TimesContainer = Styled.View`
  margin-right: 9px;
  padding: 9px 9px 9px 0;
  width: 60px;
  flex-direction: column;
  align-items: flex-end;
  border-right-width: ${StyleSheet.hairlineWidth};
  border-right-color: #ccc;
`

const Time = Styled.Text`
  font-size: 16px;
  color: ${props => props.start ? '#000' : '#ccc'};
`;
Time.defaultProps = {
  start: false
}

const Infos = Styled.View`
  flex: 1;
  flex-direction: column;
  padding: 9px 0;
`

const TitleInfos = ({ children: text, fill = false, ...rest }) => (
  <TitleInfosStyled {...rest}>
    {typeof (text) === 'string' && text.length > 28 && !fill ? text.substring(0, 25) + '...' : text}
  </TitleInfosStyled>
);

const TitleInfosStyled = Styled.Text`
  font-size: 16px;
  color: #000;
`;

const ContentInfos = Styled.Text`
  font-size: 16px;
  color: #ccc;
`;

const StatusInfos = Styled.Text`
  font-size: 14px;
  color: rgb(131, 113, 187);
`

Infos.Title = TitleInfos;
Infos.Content = ContentInfos;
Infos.Status = StatusInfos;

const TiteContainer = Styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justifyContent: space-between;
`

getTime = dateIsoFormat => {
  const date = new Date(dateIsoFormat);
  return `${date.getHours()}:${date.getMinutes()}`;
}