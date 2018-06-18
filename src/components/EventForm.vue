<template>
    <div>
        <Datepicker v-model="date" :format="dateFormatter" placeholder="Datum"/>
        <input v-model="name" placeholder="name">
        <button @click="$emit('submit',{name, date})">Hinzufügen</button>
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
    }),
    methods: {
      dateFormatter: (date) => moment(date).format('DD.MM.YYYY'),
    },
  }
</script>