<template>
    <div>
        <div class="columns event-row" @click="toggleRow()">
            <div class="column col-4"><strong>{{dateFormatter(event)}}</strong><br>{{ event.name }}</div>
            <div class="column col-4" v-for="technician in technicians" v-bind:key="technician['.key']">
                <div v-bind:class="['status-'+((event.technicians || {})[technician['.key']] || 0), 'event-cell']">
                    <span class="s0"/>
                    <span class="s1"/>
                    <span class="s2"/>
                    <span class="s3"/>
                </div>
            </div>
        </div>
        <div class="columns" v-if="showDetails">
            <div class="column col-4"><em>{{ event.description }}</em></div>
            <div class="column col-4" v-for="technician in technicians" v-bind:key="technician['.key']">

                <div class="form-group">
                    <label class="form-radio">
                        <input type="radio" :name="`availability-${technician['.key']}-${event['.key']}`" value="1">
                        <i class="form-icon"></i> Verfügbar
                    </label>
                    <label class="form-radio">
                        <input type="radio" :name="`availability-${technician['.key']}-${event['.key']}`" value="0">
                        <i class="form-icon"></i> NICHT verfügbar
                    </label>
                </div>
                <div v-bind:class="['status-'+((event.technicians || {})[technician['.key']] || 0), 'event-cell']">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'Event',
    props: ['event', 'technicians'],
    data: () => ({
      showDetails: false,
    }),
    methods: {
      dateFormatter: (event) => moment(event['.key'], 'YYYY-MM-DD').format('DD.MM.YYYY'),
      // eslint-disable-next-line
      toggleRow() { this.showDetails = !this.showDetails},
    },
  }
</script>

<style>

    .event-row {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid grey;
    }

    .event-cell span {
        width: 20px;
        height: 20px;
        background-color: dimgrey;
        border-radius: 10px;
        display: inline-block;
    }

    .status-0 span.s0 {
        background-color: red;
    }

    .status-1 span.s1 {
        background-color: yellow;
    }

    .status-2 span.s2 {
        background-color: blue;
    }

    .status-3 span.s3 {
        background-color: green;
    }
</style>