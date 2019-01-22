// Constants
import * as Action from '../constants/attendance.action-type';

// Services
import { AttendanceService } from '../../services';

// Actions
import { displayMessageError } from './error.action';

export const requestAttendance = () => {
  return {
    type: Action.REQUEST_ATTENDANCES
  };
};

export const invalidateAttendanceRequest = () => ({
  type: Action.INVALIDATE_ATTENDANCES_REQUEST
});

export const receiveAttendance = attendance => {
  return {
    type: Action.RECEIVE_ATTENDANCES,
    payload: attendance
  };
};

export const updateAbsences = events => {
  return {
    type: Action.UPDATE_ABSENCES,
    payload: events
  };
};

export function getAttendance() {
  return function (dispatch, getState) {
    const lastFetch = new Date(getState().attendance.receiveAt);
    const now = new Date();

    if (now.getHours() - lastFetch.getHours() <= 1) {
      return Promise.resolve(getState().attendance.data);
    }

    dispatch(requestAttendance());

    const username = getState().auth.currentUser.username;
    return AttendanceService.getAttendance({ username })
      .then(attendance => {
        dispatch(receiveAttendance(attendance));

        const calendarDtata = getState().calendar.data;
        if (calendarDtata && calendarDtata.length !== 0) {
          dispatch(updateAbsences(calendarDtata))
        }
        return attendance;
      }).catch(message => {
        dispatch(invalidateAttendanceRequest());
        dispatch(displayMessageError(message));

        throw message;
      });
  };
}