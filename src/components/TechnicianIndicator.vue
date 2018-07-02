<template>
    <div
            class="column col-3"
            v-bind:class="{ active: selected}"
            @click="$emit('click')"
    >
        <div v-bind:class="[`status-${status}`, 'event-cell']">
            <div class="s1"/>
            <div class="s2"/>
            <div class="s3"/>
            <div class="s4"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TechnicianIndicator',
    props: ['status', 'selected'],
  }
</script>


<style>

    .active {
        background-color: pink;
    }

    .event-cell {
        display: flex;
        flex: 1;
        padding-top: 12px;
        justify-content: center;
    }

    .event-cell div {
        width: 20px;
        height: 20px;
        background-color: dimgrey;
        border-radius: 10px;
        display: inline-block;
        margin: 0 2px;
    }

    .status-1 div.s1 {
        background-color: red;
    }

    .status-2 div.s2 {
        background-color: yellow;
    }

    .status-3 div.s3,
    .status-4 div.s3 {
        background-color: green;
    }

    .status-4 div.s4 {
        background-color: blue;
    }
</style>