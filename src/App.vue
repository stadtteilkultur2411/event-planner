<template>
  <div id="app" class="container grid-sm">
      <div class="columns">
        <div class="column col-6">Events</div>
        <div class="column col-3" v-for="technician in technicians" v-bind:key="technician['.key']">{{ technician.firstName }}</div>
      </div>
      <Event
              v-for="event in events"
              :event="event"
              :technicians="technicians"
              :key="event['.key']"
              :selected="event['.key'] === selectedEvent['.key']"
              @select="setSelected(event)"
              @status="setStatus(event, $event)"
              @submit="createEvent($event)"
      />
      <h3>Neues Event anlegen</h3>
      <EventForm @submit="createEvent($event)" />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';
import moment from 'moment';

import Event from './components/Event.vue'
import EventForm from './components/EventForm.vue'

var config = {
  apiKey: "AIzaSyB5Eef2fVGBf5a_IhesJ4I2SBeMRtPBvVI",
  authDomain: "stadtteilkultur2411.firebaseapp.com",
  databaseURL: "https://stadtteilkultur2411.firebaseio.com",
  projectId: "stadtteilkultur2411",
  storageBucket: "",
  messagingSenderId: "858874824850"
};
firebase.initializeApp(config);
const db = firebase.database();

export default {
  name: 'app',
  components: {
    Event,
    EventForm,
  },
  data: () => ({
    selectedEvent: {},
  }),
  firebase: function () {
    return {
      technicians: db.ref('technicians'),
      events: db.ref('events'),
    }
  },
  methods: {
    changeState: (event, technician) => {
      firebase.database().ref(`events/${event['.key']}/technicians/${technician['.key']}`).set((((event.technicians || {})[technician['.key']] || 0) + 1) % 4);
    },

    setSelected(event) {
      this.selectedEvent = event;
    },

    setStatus(event, data) {
      firebase.database().ref(`events/${data.eventId}/technicians/${data.technicianId}`).set(data.status);
    },

    createEvent: ({date, name, description, technicians}) => {
      const dateKey = moment(date).format('YYYY-MM-DD');
      // eslint-disable-next-line
      firebase.database().ref(`events/${dateKey}`).set({name, description, technicians});
    },


  },
}
</script>

<style>
#app {

}
</style>
