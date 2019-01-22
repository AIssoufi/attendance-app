import express from 'express';
import axios from 'axios';
import Calendar from '../models/calendar';

const CalendarRouter = express.Router();


CalendarRouter.get('/all', (req, res) => {
  fetchEvents()
    .then(response => {
      res.status(200).json(response)
    }).catch(error => {
      console.log("error : ", error)
      res.status(200).json({ message: "humm" })
    })
});


CalendarRouter.get('/refresh', (req, res) => {
  fetchEvents()
    .then(calendars => {
      Calendar.insertMany(calendars, (error, cals) => {
        if (error) {
          console.log("error : ", error)
          res.status(500).json({ message: "Impossible de créer le cours. " + error });
          return;
        }
        res.status(200).json(cals)
      });
    }).catch(error => {
      console.log("error : ", error)
      res.status(200).json({ message: "humm" })
    })
});

export default CalendarRouter;

const fetchEvents = () => {
  const URL = "https://calendar.google.com/calendar/ical/qrohj3qr45o45a4enu1i686kro%40group.calendar.google.com/public/basic.ics";

  return axios.get(URL)
    .then(response => {
      const data = response.data;
      const lessons = data.split('\r\nEND:VEVENT\r\nBEGIN:VEVENT\r\n');
      const parssedLessons = lessons.map(noParsedLesson => {
        const items = noParsedLesson.split("\r\n");
        const cleanedItems = items.map(ci => {
          let splitedCI = ci.split(":");

          const key = splitedCI.shift().toLowerCase().split(";")[0].replace(/[^a-zA-Z]/g, "");
          const value = splitedCI.join(":").replace(/[^a-zA-Z0-9/:'éà)(. ]/g, "");

          if (isISOFomatDateWhitoutSeparator({ date: value })) {
            return key + `":"` + parseToISOFomatDate({ date: value });
          } else {
            return key + `":"` + value;
          }
        })

        const t = `{"${cleanedItems.join(`","`)}"}`;
        return JSON.parse(t)
      }).filter(cal => {
        const { dtstart } = cal;
        if (dtstart) {
          const date = new Date(dtstart).getTime();
          const startSchool = new Date(`${new Date().getFullYear() - 1}-09-09T00:00:00Z`).getTime();

          return date >= startSchool
        }

        return false;
      });

      return parssedLessons;
    })
}

const isISOFomatDateWhitoutSeparator = ({ date }) => {
  if (typeof (date) !== 'string') throw new TypeError('date must be a string');

  return /^(-?(?:[1-9][0-9]*)?[0-9]{4})(1[0-2]|0[1-9])(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9])([0-5][0-9])([0-5][0-9])(\\.[0-9]+)?(Z)?$/g.test(date);
}

const parseToISOFomatDate = ({ date }) => {
  if (typeof (date) !== 'string') throw new TypeError('date must be a string');

  const year = date.slice(0, 4);
  const mont = date.slice(4, 6);
  const dayAndHour = date.slice(6, 11);
  const minute = date.slice(11, 13);
  const seconde = date.slice(13, 15);

  return `${year}-${mont}-${dayAndHour}:${minute}:${seconde}Z`;
}