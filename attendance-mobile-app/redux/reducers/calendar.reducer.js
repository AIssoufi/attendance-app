import * as Actions from '../constants/calendar.action-type';

const initialState = {
  isFetching: false,
  data: [],
  today: [],
  receiveAt: null
}

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUEST_CALENDAR:
      return {
        ...state,
        isFetching: true
      };
    case Actions.RECEIVE_CALENDAR:
      const events = action.payload.sort((a, b) => {
        const dateA = new Date(a.dtstart).getTime();
        const dateB = new Date(b.dtstart).getTime();

        if (dateA < dateB) {
          return -1;
        } else if (dateA > dateB) {
          return 1
        } else {
          return 0;
        }
      });

      return {
        ...state,
        isFetching: false,
        receiveAt: new Date(),
        data: events,
        today: events.filter(event => {
          const dateA = new Date(event.dtstart).toDateString();
          const dateB = new Date().toDateString();
          return dateA === dateB;
        })
      };
    case Actions.INVALIDATE_CALENDAR_REQUEST:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default calendarReducer;