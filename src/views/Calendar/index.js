import React, { Component } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Spinner from 'react-spinkit';
import flowRight from 'lodash/flowRight';
import { withSection, withTitle } from '../../components';

import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

momentLocalizer(moment);

class Calendar extends Component {
  state = { events: null };

  calendarId = 'email@gmail.com';
  apiKey = '';

  componentDidMount() {
    fetch(this.getUrl())
      .then(response => response.json())
      .then(data => {
        this.setState({
          events: data.items.map(d => ({
            id: d.id,
            title: d.summary,
            allDay: d.start.date ? true : false,
            start: new Date(d.start.date || d.start.dateTime),
            end: new Date(d.end.date || d.start.dateTime),
            url: d.htmlLink
          }))
        });
      })
      .catch(error => console.log(error));
  }

  getUrl = () =>
    `https://www.googleapis.com/calendar/v3/calendars/${this.calendarId}/events?fields=items(description%2Cend%2ChtmlLink%2Cid%2Clocation%2Cstart%2Csummary)&key=${this.apiKey}`;

  render() {
    return this.state.events ? (
      <BigCalendar
        selectable
        onSelectEvent={event => window.open(event.url)}
        className="calendar"
        events={this.state.events}
        defaultDate={new Date()}
      />
    ) : (
      <Spinner className="loading" name="wave" color="steelblue" />
    );
  }
}

export default flowRight(
  withTitle('Calendar'),
  withSection('calendar')
)(Calendar);
