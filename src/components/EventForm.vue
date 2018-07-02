<template>
    <div id="addEventForm">
        <div class="form-group"  v-if="expanded">
            <h3>{{ expandLabel }}</h3>
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
                    <button @click="submit()" class="btn btn-primary">
                        {{ actionLabel }}
                    </button>
                    &nbsp;
                    <button @click="cancel()" class="btn">
                        Abbrechen
                    </button>
                </div>
                <div class="column col-6" style="text-align: right" v-if="destructiveLabel">
                    <button @click="$emit('destruct', { event })" class="btn btn-error">
                        {{ destructiveLabel }}
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <button @click="expanded = true" class="btn btn-primary">{{ expandLabel }}</button>
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
    props: ['event', 'expandLabel', 'actionLabel', 'destructiveLabel'],
    data() {
      return {
        expanded: false,
        name: (this.event && this.event.name) || '',
        date: (this.event && this.event['.key']) || '',
        description: (this.event && this.event.description) || '',
      }
    },
    methods: {
      dateFormatter: (date) => moment(date).format('DD.MM.YYYY'),
      submit() {
        this.$emit(
          'submit',
          {
            name: this.name,
            date: this.date,
            description: this.description,
            technicians: (this.event && this.event.technicians) || {}
          }
        );
        if (! this.event) {
          this.name = this.date = this.description = '';
        }
        this.expanded = false;
      },
      cancel() {
        if (! this.event) {
          this.name = this.date = this.description = '';
        }
        this.expanded = false
      }
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