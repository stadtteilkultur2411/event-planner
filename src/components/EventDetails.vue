<template>
    <div>
        <em>{{ event.description }}</em>
        <EventForm
            :event="event"
            @submit="$emit('submit', $event)"
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