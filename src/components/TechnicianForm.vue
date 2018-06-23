<template>
    <div class="columns">
        <div class="column col-12">
            <div class="form-group">
                Verfügbar?
                <label class="form-radio form-inline">
                    <input type="radio" name="availability" value="1" @change="handleRadio($event)" :checked="status===1">
                    <i class="form-icon"></i> Nein
                </label>
                <label class="form-radio form-inline">
                    <input type="radio" name="availability" value="2"  @change="handleRadio($event)" :checked="status>1">
                    <i class="form-icon"></i> Ja
                    &nbsp;|&nbsp;
                </label>
                <label class="form-switch form-inline">
                    <input type="checkbox" name="active" value="3" @change="handleRadio($event)" :checked="status>2">
                    <i class="form-icon"></i> Übernommen
                    &nbsp;|&nbsp;
                </label>
                <label class="form-switch form-inline">
                    <input type="checkbox" name="contact" value="4" @change="handleRadio($event)" :checked="status>3">
                    <i class="form-icon"></i> Kontakt
                </label>
            </div>
        </div>
    </div>
</template>




<script>
  export default {
    name: 'TechnicianForm',
    props: ['eventId', 'technicianId', 'status'],
    methods: {
      handleRadio(event) {
        const newStatus =  event.target.value - (event.target.checked ? 0 : 1);
        this.$emit('status', {eventId: this.eventId, technicianId: this.technicianId, status: newStatus})
      }
    }
  }
</script>