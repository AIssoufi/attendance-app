import { combineReducers } from 'redux';

import AttendanceReducer from './attendance.reducer';
import AuthReducer from './auth.reducer';
import CalendarReducer from './calendar.reducer';

const AppReducer = combineReducers({
  attendance: AttendanceReducer,
  auth: AuthReducer,
  calendar: CalendarReducer
});

export default AppReducer;