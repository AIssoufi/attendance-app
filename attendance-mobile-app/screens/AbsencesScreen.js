// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getAttendance } from '../redux/actions/attendance.action';

// Component
import CostumEventList from '../components/CostumEventList';
import Loader from '../components/Loader';

// Utils
import { convertEventToGroupedLessons } from '../utils/converters/calendar';

class AbsencesScreen extends React.Component {
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
    this.props.getAttendance().then(data => {
      this.updateTitle();
    });
  }

  updateTitle = () => {
    if (this.props.isFetching) return;

    const result = this.props.absences.length;
    this.props.navigation.setParams({
      custumTitle: `Vous avez ${result > 1 ? `${result} absences` : 'aucune absence'}`
    });
  }

  render() {
    if (this.props.isFetching) return <Loader />;

    return <CostumEventList events={convertEventToGroupedLessons({ data: this.props.absences })} />;
  }
}

const mapDispatchToProps = {
  getAttendance
};

function mapStateToProps(state) {
  return {
    absences: state.attendance.absences,
    isFetching: state.attendance.isFetching,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AbsencesScreen);