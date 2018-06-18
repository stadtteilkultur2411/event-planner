<template>
  <div id="app" class="container grid-sm">
      <div class="columns">
        <div class="column col-6">Events</div>
        <div class="column col-3" v-for="technician in technicians" v-bind:key="technician['.key']">{{ technician.firstName }}</div>
      </div>
      <Event
              v-for="event in events"
              v-bind:event="event"
              v-bind:technicians="technicians"
              v-bind:key="event['.key']"
              @click="changeState(event, $event)"
      />
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

    createEvent: ({date, name}) => {
      const dateKey = moment(date).format('YYYY-MM-DD');
      // eslint-disable-next-line
      firebase.database().ref(`events/${dateKey}`).set({name});
    }
  },
}
</script>

<style>
#app {

}
</style>
