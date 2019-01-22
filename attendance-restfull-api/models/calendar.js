import mongoose from 'mongoose';

const CalendarSchema = new mongoose.Schema({
  dtstart: {
    type: String,
    required: true
  },
  dtend: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    unique: true,
    required: true
  },
  location: {
    type: String,
    required: false
  },
  summary: {
    type: String,
    required: false,
  }
});

const Calendar = mongoose.model('Calendar', CalendarSchema);
export default Calendar;

