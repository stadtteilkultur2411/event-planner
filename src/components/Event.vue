<template>
    <div>
        <div class="columns event-row">
            <div class="column col-6" @click="toggleDetails(event)">
                <strong>{{dateFormatter(event)}}</strong><br>
                {{ event.name }}
            </div>
            <TechnicianIndicator
                v-for="technician in technicians"
                :key="technician['.key']"
                :status="(event.technicians || {})[technician['.key']]"
                :selected="(selected && selectedDetails && selectedDetails['.key'] ===  technician['.key'])"
                @click="toggleDetails(technician)"
            />
        </div>
        <TechnicianForm
            :technicianId="selectedDetails['.key']"
            :eventId="event['.key']"
            :status="selectedStatus"
            @status="$emit('status', $event)"
            v-if="selected && selectedDetails && selectedDetails.firstName"
        />
        <EventDetails
            :event="event"
            @submit="$emit('submit', $event)"
            v-if="selected && selectedDetails && selectedDetails.name"
        />
    </div>
</template>

<script>
  import moment from 'moment';
  import TechnicianForm from './TechnicianForm';
  import TechnicianIndicator from './TechnicianIndicator';
  import EventForm from "./EventForm";
  import EventDetails from "./EventDetails";

  export default {
    name: 'Event',
    props: ['event', 'technicians', 'selected'],
    components: {EventForm, TechnicianForm, TechnicianIndicator, EventDetails },
    data: () => ({
      showDetails: false,
      selectedDetails: null,
    }),
    computed: {
      selectedStatus(){
        if (! this.event.technicians) return 0;
        return this.selectedDetails ? this.event.technicians[this.selectedDetails['.key']] : 0;
      }
    },
    methods: {
      dateFormatter: (event) => moment(event['.key'], 'YYYY-MM-DD').format('DD.MM.YYYY'),
      // eslint-disable-next-line
      toggleDetails(selection) {
        this.$emit('select');

        if (!this.selected || !this.selectedDetails || this.selectedDetails['.key'] !== selection['.key']) {
          this.selectedDetails = selection;
        } else {
          this.selectedDetails = null;
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