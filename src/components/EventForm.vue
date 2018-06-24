<template>
    <div id="addEventForm">
        <div>
            <Datepicker v-model="date" :format="dateFormatter" placeholder="Datum"/>
        </div>
        <div>
            <input v-model="name" placeholder="Titel">
        </div>
        <div>
            <textarea v-model="description" placeholder="Beschreibung"></textarea>
        </div>
        <button @click="$emit('submit', {name, date, description, technicians: (event && event.technicians) || {}})">Hinzufügen</button>
    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import moment from 'moment';

  export default {
    name: 'EventForm',
    components: {
      Datepicker
    },
    props: ['event'],
    data() {
      return {
          name: (this.event && this.event.name) || '',
          date: (this.event && this.event['.key']) || '',
          description: (this.event && this.event.description) || '',
      }
    },
    methods: {
      dateFormatter: (date) => moment(date).format('DD.MM.YYYY'),
    },
  }
</script>

<style>
#addEventForm {
    margin-top: 30px;
}
</style>