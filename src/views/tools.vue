<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col lg=6>
        <Timestamp />
      </v-col>
      <v-col lg=6>
        <Base64 />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Base64 from '@/components/Base64'
import Timestamp from '@/components/Timestamp'
export default {
  components: { Base64, Timestamp }
}
</script>
