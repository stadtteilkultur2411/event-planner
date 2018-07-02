<template>
    <div>
        <em>{{ event.description }}</em>
        <EventForm
            :event="event"
            actionLabel="Speichern"
            destructiveLabel="Löschen"
            expandLabel="Veranstaltung Bearbeiten"
            @submit="$emit('submit', $event)"
            @destruct="$emit('delete', $event)"
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