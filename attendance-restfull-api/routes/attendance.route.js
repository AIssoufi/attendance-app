import express from 'express';
import Attendance from '../models/attendance';

const AttendanceRouter = express.Router();

AttendanceRouter.post('/', (req, res) => {
  const { username, dtstart, dtend } = req.body;

  if (!username || !dtstart || !dtend) {
    res.status(400).json({
      message: "All fields required.",
    });
    return;
  }

  const attendanceData = req.body;

  Attendance.create(attendanceData, (error, attendance) => {
    if (error) {
      res.status(500).json({
        message: "Impossible créer la présence."
      });
    } else {
      res.status(201).json(attendance);
    }
  });
});

AttendanceRouter.get('/', (req, res) => {
  const { username } = req.query;

  if (!username) {
    res.status(400).json({
      message: "All url params are required.",
    });
    return;
  }

  Attendance.find({ username }, (error, attendances) => {
    if (error) {
      res.status(500).json({
        message: "Impossible de trouver la présence"
      });
    } else {
      res.status(200).json(attendances);
    }
  });
});

export default AttendanceRouter;