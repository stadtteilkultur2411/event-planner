<template>
    <tr class="event-row">
        <td>{{event['.key']}}<br>{{ event.name }}</td>
        <td v-for="technician in technicians" @click="$emit('click',technician)" v-bind:key="technician['.key']">
            <div v-bind:class="['status-'+((event.technicians || {})[technician['.key']] || 0), 'event-cell']">
                <span class="s0"/>
                <span class="s1"/>
                <span class="s2"/>
                <span class="s3"/>
            </div>
        </td>
    </tr>
</template>

<script>
  export default {
    name: 'Event',
    props: ['event', 'technicians'],
  }
</script>

<style>
    .event-cell {
        width: 100px;
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