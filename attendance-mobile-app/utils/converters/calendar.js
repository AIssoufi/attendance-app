import moment from 'moment/min/moment-with-locales';
import 'moment/locale/fr';

// Sets the moment instance to use.
moment.locale("fr");

export const converEventToLessons = ({ data = [], statusFunc = () => { } }) => data.map(lesson => {
  const { summary, dtstart, dtend, location } = lesson;
  return {
    title: summary,
    details: location,
    times: {
      start: dtstart,
      end: dtend
    },
    status: statusFunc(dtstart, dtend)
  }
});

export const convertEventToGroupedLessons = ({ data = [], statusFunc = () => { } }) => {
  const groupedDelays = converEventToLessons({
    data: data,
    statusFunc: statusFunc
  }).reduce((accumulator, currentValue) => {
    const splitedDate = currentValue.times.start.split("T");
    const key = splitedDate[0];
    const response = accumulator;

    if (key in response) {
      response[key] = [
        ...accumulator[key],
        currentValue
      ]
    } else {
      response[key] = [
        currentValue
      ]
    }
    return response
  }, {});

  const result = Object.entries(groupedDelays).map(array => {
    const [key, value] = array;
    return {
      title: moment(key).format("ddd DD MMM	YYYY"),
      schedules: value
    }
  });

  return result;
}


