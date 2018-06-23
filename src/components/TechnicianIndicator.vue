<template>
    <div
            class="column col-3"
            v-bind:class="{ active: selected}"
            @click="$emit('click')"
    >
        <div v-bind:class="[`status-${status}`, 'event-cell']">
            <span class="s1"/>
            <span class="s2"/>
            <span class="s3"/>
            <span class="s4"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TechnicianIndicator',
    props: ['status', 'selected'],
    computed: {

    },
  }
</script>


<style>

    .active {
        background-color: pink;
    }

    .event-cell {
        flex-direction: row;
        align-items: center;
    }

    .event-cell span {
        width: 20px;
        height: 20px;
        background-color: dimgrey;
        border-radius: 10px;
        display: inline-block;
    }

    .status-1 span.s1 {
        background-color: red;
    }

    .status-2 span.s2 {
        background-color: yellow;
    }

    .status-3 span.s3 {
        background-color: blue;
    }

    .status-4 span.s4 {
        background-color: green;
    }
</style>