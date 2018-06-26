<template>
    <div>
        <em>{{ event.description }}</em>
        <EventForm
            :event="event"
            :deletable="true"
            @submit="$emit('submit', $event)"
            @delete="$emit('delete', $event)"
        />
    </div>
</template>

<script>
    import EventForm from './EventForm';

  export default {
    name: "EventDetails",
    props: ['event'],
    components: {EventForm}
  }
</script>

<style scoped>

</style>