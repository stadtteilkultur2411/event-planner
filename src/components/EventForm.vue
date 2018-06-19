<template>
    <div id="addEventForm">
        <h3>Neues Event anlegen</h3>
        <div>
            <Datepicker v-model="date" :format="dateFormatter" placeholder="Datum"/>
        </div>
        <div>
            <input v-model="name" placeholder="Titel">
        </div>
        <div>
            <textarea v-model="description" placeholder="Beschreibung"></textarea>
        </div>
        <button @click="$emit('submit',{name, date, description})">Hinzufügen</button>
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

    data: () => ({
      name: '',
      date: '',
      description: '',
    }),
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