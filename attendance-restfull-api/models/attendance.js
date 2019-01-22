import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  dtstart: {
    type: String,
    required: true
  },
  dtend: {
    type: String,
    required: true
  },
  isArrivedLate: {
    type: Boolean,
    default: false
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
    required: false
  }
});

const User = mongoose.model('Attendance', AttendanceSchema);
export default User;

