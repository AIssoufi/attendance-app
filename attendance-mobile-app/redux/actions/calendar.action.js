// Constants
import * as Action from '../constants/calendar.action-type';

// Services
import { CalendarService } from '../../services';

// Actions
import { displayMessageError } from './error.action';

export const requestCalendar = () => {
  return {
    type: Action.REQUEST_CALENDAR
  };
};

export const invalidateCalendarRequest = () => ({
  type: Action.INVALIDATE_CALENDAR_REQUEST
});

export const receiveCalendar = events => {
  return {
    type: Action.RECEIVE_CALENDAR,
    payload: events
  };
};

export function getCalendar() {
  return function (dispatch, getState) {
    const lastFetch = new Date(getState().calendar.receiveAt);
    const now = new Date();

    if (now.getHours() - lastFetch.getHours() <= 1) {
      return Promise.resolve(getState().calendar.data);
    }

    dispatch(requestCalendar());

    return CalendarService.getCalendar()
      .then(calendars => {
        dispatch(receiveCalendar(calendars));
        return calendars;
      }).catch(message => {
        dispatch(invalidateCalendarRequest());
        dispatch(displayMessageError(message));

        throw message;
      });
  };
}