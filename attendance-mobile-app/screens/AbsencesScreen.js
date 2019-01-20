// Dependencies
import React from 'react';

// Component
import CostumEventList from '../components/CostumEventList';

export default class AbsencesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('custumTitle', 'Mes retards')
  });

  constructor(props) {
    super(props);
    this.state = {
      schedules: [
        {
          title: 'Ven 14 jan 2018',
          schedules: [
            {
              times: {
                start: '08:00',
                end: '09:30'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
            },
            {
              times: {
                start: '09:30',
                end: '11:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
            },
            {
              times: {
                start: '13:00',
                end: '15:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles'
            }
          ]
        },
        {
          title: 'Lun 14 fev 2018',
          schedules: [
            {
              times: {
                start: '08:00',
                end: '09:30'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
              status: 'Justifié'
            },
            {
              times: {
                start: '09:30',
                end: '11:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
              status: 'Justifié'
            },
            {
              times: {
                start: '13:00',
                end: '15:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles'
            }
          ]
        },
        {
          title: 'Ven 14 jan 2018',
          schedules: [
            {
              times: {
                start: '08:00',
                end: '09:30'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
            },
            {
              times: {
                start: '09:30',
                end: '11:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
            },
            {
              times: {
                start: '13:00',
                end: '15:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles'
            }
          ]
        },
        {
          title: 'Lun 14 fev 2018',
          schedules: [
            {
              times: {
                start: '08:00',
                end: '09:30'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
              status: 'Justifié'
            },
            {
              times: {
                start: '09:30',
                end: '11:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
              status: 'Justifié'
            },
            {
              times: {
                start: '13:00',
                end: '15:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles'
            }
          ]
        },
        {
          title: 'Ven 14 jan 2018',
          schedules: [
            {
              times: {
                start: '08:00',
                end: '09:30'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
            },
            {
              times: {
                start: '09:30',
                end: '11:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles',
            },
            {
              times: {
                start: '13:00',
                end: '15:00'
              },
              title: 'UE4 Data sciences et analyse',
              details: 'Salle MBDS aux lucioles'
            }
          ]
        },
      ]
    }
  }
  componentDidMount() {
    this.updateTitle()
  }

  updateTitle = () => {
    const result = this.state.schedules.reduce((total, curentItem) => {
      return total + curentItem.schedules.length;
    }, 0);

    this.props.navigation.setParams({
      custumTitle: `Vous avez ${result} ${result > 1 ? 'absences' : 'aucune absence'}`
    });
  }

  render() {
    return <CostumEventList events={this.state.schedules} />;
  }
}