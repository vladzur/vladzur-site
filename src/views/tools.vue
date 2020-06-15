<template>
  <v-container fluid>
    <Timestamp />
    <Base64 />
  </v-container>
</template>

<script>
import Base64 from '@/components/Base64'
import Timestamp from '@/components/Timestamp'
export default {
  components: { Base64, Timestamp }
}
</script>
