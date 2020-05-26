<template>
  <v-layout>
    <v-row>
      <v-col>
        <Timestamp />
      </v-col>
      <v-col>
        <Base64 />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import Base64 from '@/components/Base64'
import Timestamp from '@/components/Timestamp'
export default {
  components: { Base64, Timestamp }
}
</script>
