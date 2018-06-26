<template>
    <div id="addEventForm">
        <div class="form-group">
            <div class="columns">
                <div class="column col-3">
                    <label  class="form-label"> Datum
                    <Datepicker v-model="date" :format="dateFormatter" placeholder="Datum" input-class="form-input"/>
                    </label>
                </div>
                <div class="column col-8">
                    <label  class="form-label"> Title
                    <input v-model="name" placeholder="Titel" class="form-input">
                    </label>
                </div>
            </div>
            <div class="columns">
                <div class="column col-11">
                    <label  class="form-label"> Beschreibung
                    <textarea v-model="description" placeholder="Beschreibung" class="form-input"></textarea>
                    </label>
                </div>
            </div>
            <div class="columns">
                <div class="column col-5">
                    <button @click="$emit('submit', {name, date, description, technicians: (event && event.technicians) || {}})" class="btn btn-primary">
                        Hinzufügen
                    </button>
                </div>
                <div class="column col-6" style="text-align: right">
                    <button @click="$emit('delete', { event })" class="btn btn-error" v-if="deletable">
                        Löschen
                    </button>
                </div>
            </div>
        </div>
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
    props: ['event', 'deletable'],
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

.date-picker input{
    width: 100px;
}
</style>