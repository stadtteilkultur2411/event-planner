<template>
    <div>
        <div class="columns event-row">
            <div class="column col-6">
                <strong>{{dateFormatter(event)}}</strong><br>
                {{ event.name }}<br>
                <em>{{ event.description }}</em>
            </div>
            <TechnicianIndicator
                v-for="technician in technicians"
                :key="technician['.key']"
                :status="(event.technicians || {})[technician['.key']]"
                :selected="(selectedTechnician && selectedTechnician['.key'] ===  technician['.key'])"
                @click="toggleTechnician(technician)"
            />
        </div>
        <TechnicianForm
                :technicianId="selectedTechnician['.key']"
                :eventId="event['.key']"
                :status="selectedStatus"
                @status="$emit('status', $event)"
                v-if="selectedTechnician"/>
    </div>
</template>

<script>
  import moment from 'moment';
  import TechnicianForm from './TechnicianForm';
  import TechnicianIndicator from './TechnicianIndicator';

  export default {
    name: 'Event',
    props: ['event', 'technicians'],
    components: { TechnicianForm, TechnicianIndicator },
    data: () => ({
      showDetails: false,
      selectedTechnician: null,
    }),
    computed: {
      selectedStatus(){
        if (! this.event.technicians) return 0;
        return this.selectedTechnician ? this.event.technicians[this.selectedTechnician['.key']] : 0;
      }
    },
    methods: {
      dateFormatter: (event) => moment(event['.key'], 'YYYY-MM-DD').format('DD.MM.YYYY'),
      // eslint-disable-next-line
      toggleTechnician(technician) {

        if (! this.selectedTechnician || this.selectedTechnician['.key'] !== technician['.key']) {
          this.selectedTechnician = technician;
        } else {
          this.selectedTechnician = null;
        }
      },
    },
  }
</script>

<style>

    .event-row {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid grey;
    }
</style>