import * as Actions from '../constants/attendance.action-type';

const initialState = {
  isFetching: false,
  data: [],
  absences: [],
  delays: [],
  receiveAt: null
}

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUEST_ATTENDANCES:
      return {
        ...state,
        isFetching: true
      };
    case Actions.RECEIVE_ATTENDANCES:
      return {
        ...state,
        receiveAt: new Date(),
        delays: action.payload.filter(event => {
          return event.isArrivedLate;
        }),
        data: action.payload
      };
    case Actions.INVALIDATE_ATTENDANCES_REQUEST:
      return {
        ...state,
        isFetching: false,
      };
    case Actions.UPDATE_ABSENCES:
      const dtstarts = state.data.map(item => item.dtstart);
      return {
        ...state,
        isFetching: false,
        absences: action.payload.filter(event => {
          return !dtstarts.includes(event.dtstart);
        }),
      };
    default:
      return state;
  }
};

export default attendanceReducer;