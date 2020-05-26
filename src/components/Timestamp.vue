<template>
  <v-layout>
    <v-card>
      <v-card-title>Timestamp converter</v-card-title>
      <v-card-text>
        <v-text-field v-model="timestampInput" label="Enter timestamp" />
        <h2>{{ dateOutput }}</h2>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      timestampInput: 0,
      dateinput: ''
    }
  },
  computed: {
    dateOutput () {
      const timestamp = this.timestampInput * 1000
      const now = moment(timestamp)
      return now.format('Y-M-D H:m:s')
    }
  }

}
</script>
